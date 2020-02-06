import { Button, Heading, HFlow, Icon, Text, useTheme, VFlow } from "bold-ui";
import React, { useState } from "react";

export type GitRepositories = {
  totalCount: number;
  items: GitRepositoriesItem[];
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
export interface GitListItemProps {
  item: GitRepositoriesItem;
}

export const GitListItem = (props: GitListItemProps) => {
  const theme = useTheme();
  const [clicked, setClicked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { item } = props;

  const onFavClicked = () => {
    setClicked(!clicked);
  };

  const onExpandedClicked = () => {
    setExpanded(!expanded);
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
          <Heading level={3}>{item.repositoryName}</Heading>
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
                <Text fontWeight="bold">Description:</Text>
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
                    <Text fontWeight="bold">Open Issues:</Text>
                    <Text>{item.openIssues}</Text>
                  </HFlow>
                  <HFlow hSpacing={0.5}>
                    <Text fontWeight="bold">Language:</Text>
                    <Text>{item.language}</Text>
                  </HFlow>
                  <HFlow hSpacing={0.5}>
                    <Text fontWeight="bold">Created at:</Text>
                    <Text>{item.createdAt}</Text>
                  </HFlow>
                </VFlow>
              ) : null}
            </VFlow>
          </HFlow>
        </VFlow>

        <HFlow>
          <Button onClick={onExpandedClicked} skin="ghost" size="small">
            <Icon icon={expanded ? "angleDown" : "angleUp"}></Icon>
          </Button>
        </HFlow>
      </HFlow>
    </>
  );
};
