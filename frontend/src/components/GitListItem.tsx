import React, { useState } from "react";
import { Heading, HFlow, VFlow, Button, Icon, Text, useTheme } from "bold-ui";

interface GitListItemProps {
  id: number;
  name: String;
  stars: number;
  description: String;
  login: String;
  forks: number;
  watchers: number;
  open_issues: number
  language: String 
  created_at:String
}

export const GitListItem = (props: GitListItemProps) => {
  const theme = useTheme();
  const [clicked, setClicked] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
          <Heading level={3}>{props.name}</Heading>
          <HFlow hSpacing={6}>
            <VFlow vSpacing={0.3}>
              <HFlow hSpacing={0.5}>
              <Icon icon = 'userFilled' size={1}></Icon>
                <Text>{props.login}</Text>
              </HFlow>
              <HFlow hSpacing={0.5}>
                <Icon icon = 'starFilled' size={1}></Icon>
                <Text>{props.stars}</Text>
              </HFlow>
              <HFlow hSpacing={0.5}>
                <Text fontWeight="bold">Description:</Text>
                <Text>{props.description}</Text>
              </HFlow>

              {expanded ? (
                <VFlow vSpacing={0.5}>
                <HFlow hSpacing={0.5}>
                <Text fontWeight="bold">Forks:</Text>
                <Text>{props.forks}</Text>
              </HFlow>
              <HFlow hSpacing={0.5}>
                <Text fontWeight="bold">Watchers:</Text>
                <Text>{props.watchers}</Text>
              </HFlow>
              <HFlow hSpacing={0.5}>
                <Text fontWeight="bold">Open Issues:</Text>
                <Text>{props.open_issues}</Text>
              </HFlow>
              <HFlow hSpacing={0.5}>
                <Text fontWeight="bold">Language:</Text>
                <Text>{props.language}</Text>
              </HFlow>
              <HFlow hSpacing={0.5}>
                <Text fontWeight="bold">Created at:</Text>
                <Text>{props.created_at}</Text>
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
