import { Button, Heading, HFlow, Icon, Text, useTheme, VFlow } from "bold-ui";
import React, { useState } from "react";

export type GitRepositories = {
  totalCount: number;
  items: GitRepositoriesItem[];
};

type GitSimpleRepositoriesItem = {
  id: number;
  repositoryName: String;
};

export type GitRepositoriesOwner = {
  login: string;
};

export type GitRepositoriesItem = {
  id: number;
  repositoryName: String;
  description: String;
  owner: GitRepositoriesOwner;
  forks: number;
  watchers: number;
  openIssues: number;
  language: String;
  createdAt: String;
  stargazersCount: String;
};
export interface GitRepositoriesListItemProps {
  item: GitRepositoriesItem;
  handleAddRemoveFavorite(item: GitRepositoriesItem, favorite: boolean): void;
}

export const GitRepositoriesListItem = (
  props: GitRepositoriesListItemProps
) => {
  const theme = useTheme();
  const [favorite, favClicked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [repositories, setRepositories] = useState<
    GitSimpleRepositoriesItem[]
  >();
  const { item } = props;
  const user = item.owner.login;

  const handleFavClicked = () => {
    favClicked(!favorite);
    props.handleAddRemoveFavorite(item, favorite);
  };

  const handleExpandedClicked = () => {
    setExpanded(!expanded);
    fetch(`/api/user_repositories?user=${user}`)
      .then(response => response.json())
      .then(data => setRepositories(data))
      .catch(response => console.log("Ocorreu algum erro.", response));
  };

  return (
    <>
      <HFlow
        justifyContent="space-between"
        style={{
          background: theme.pallete.surface.main,
          padding: "1rem",
          borderRadius: "2px",
          border: `1px solid ${theme.pallete.divider}`
        }}
      >
        <VFlow vSpacing={0}>
          <HFlow alignItems="center" hSpacing={0}>
            <Heading level={3}>{item.repositoryName}</Heading>
            <Button
              skin="ghost"
              size="small"
              style={{ height: "1.5rem" }}
              onClick={handleFavClicked}
            >
              <Icon
                icon={favorite === true ? "heartFilled" : "heartOutline"}
                size={1}
                color={favorite === true ? "#F02532" : ""}
              />
            </Button>
          </HFlow>
          <HFlow hSpacing={6}>
            <VFlow vSpacing={0.3}>
              <HFlow hSpacing={0.5}>
                <Icon icon="userFilled" size={1}></Icon>
                <Text>{item.owner.login}</Text>
              </HFlow>
              <HFlow hSpacing={0.5}>
                <Icon icon="starFilled" size={1}></Icon>
                <Text>{item.stargazersCount}</Text>
              </HFlow>
              <HFlow hSpacing={0.5}>
                <Text fontWeight="bold">Descrição:</Text>
                <Text>{item.description}</Text>
              </HFlow>

              {expanded ? (
                <VFlow vSpacing={0.5}>
                  <HFlow hSpacing={0.5}>
                    <Text fontWeight="bold">Forks:</Text>
                    <Text>{item.forks}</Text>
                  </HFlow>
                  <HFlow hSpacing={0.5}>
                    <Text fontWeight="bold">Watchers:</Text>
                    <Text>{item.watchers}</Text>
                  </HFlow>
                  <HFlow hSpacing={0.5}>
                    <Text fontWeight="bold">Issues abertas:</Text>
                    <Text>{item.openIssues}</Text>
                  </HFlow>
                  <HFlow hSpacing={0.5}>
                    <Text fontWeight="bold">Linguagem principal:</Text>
                    <Text>{item.language}</Text>
                  </HFlow>
                  <HFlow hSpacing={0.5}>
                    <Text fontWeight="bold">Criado em:</Text>
                    <Text>{item.createdAt}</Text>
                  </HFlow>
                  <Text fontWeight="bold">
                    Alguns outros repositórios do autor:
                  </Text>

                  {repositories != null ? (
                    repositories.map(repo => (
                      <Text
                        key={repo.id}
                        fontWeight="bold"
                        style={{ marginLeft: "1rem" }}
                      >
                        • {repo.repositoryName}
                      </Text>
                    ))
                  ) : (
                    <Text>Nenhum resultado encontrado.</Text>
                  )}
                </VFlow>
              ) : null}
            </VFlow>
          </HFlow>
        </VFlow>

        <HFlow>
          <Button onClick={handleExpandedClicked} skin="ghost" size="small">
            <Icon icon={expanded ? "angleUp" : "angleDown"}></Icon>
          </Button>
        </HFlow>
      </HFlow>
    </>
  );
};
