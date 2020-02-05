import React, { useState } from "react";
import { Heading, HFlow, VFlow, Button, Icon, Text, useTheme } from "bold-ui";

interface GitListItemProps {
  id: number;
  name: String;
  stars: number;
  forks: number;
  watchers: number;
}

export const GitListItem = (props: GitListItemProps) => {
  const theme = useTheme();
  const [clicked, setClicked] = useState(false);

  const onClicked = () => {
    setClicked(!clicked);
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
            <VFlow vSpacing={0}>
              <HFlow hSpacing={0.5}>
                <Text fontWeight="bold">Stars</Text>
                <Text>{props.stars}</Text>
              </HFlow>
              <HFlow hSpacing={0.5}>
                <Text fontWeight="bold">Forks</Text>
                <Text>{props.forks}</Text>
              </HFlow>
              <HFlow hSpacing={0.5}>
                <Text fontWeight="bold">Watchers</Text>
                <Text>{props.watchers}</Text>
              </HFlow>
            </VFlow>
          </HFlow>
        </VFlow>
        <VFlow>
          <Button
            kind="normal"
            skin="outline"
            size="small"
            style={{ height: 32, width: 114 }}
          >
            <Icon icon="zoomOutline" style={{ marginRight: "0.5rem" }} />
            Visualizar
          </Button>
          <Button
            kind="normal"
            skin="outline"
            size="small"
            style={{ height: 32, width: 114 }}
            onClick={onClicked}
          >
            <Icon
              icon={clicked ? "starFilled" : "starOutline"}
              style={{ marginRight: "0.5rem" }}
            />
            Favoritar
          </Button>
        </VFlow>
      </HFlow>
    </>
  );
};
