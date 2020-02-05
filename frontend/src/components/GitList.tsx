import React, { useState, useEffect } from "react";
import {
  VFlow,
  TextField,
  Button,
  Icon,
  Grid,
  Cell,
  HFlow,
  Heading,
  Text
} from "bold-ui";
import { GitListItem } from "./GitListItem";

export const GitList = () => {
  const [repositories, setRepositories] = useState([
    { id: 0, name: "", stargazers_count: 0, forks: 0, watchers: 0 }
  ]);

  async function fetchRep() {
    const response = await fetch(`https://api.github.com/users/diego3g/repos`);
    const data = await response.json();
    setRepositories(data);
  }

  useEffect(() => {
    fetchRep();
  }, []);

  return (
    <VFlow style={{ margin: "50px 50px 50px 50px" }}>
      <VFlow>
        <Text fontWeight="bold" fontSize={3}>
          Bridge Dev
        </Text>
      </VFlow>
      <HFlow alignItems="center" hSpacing={2}>
        <TextField
          maxLength={200}
          style={{ width: "98.5rem", fontSize: "1.6rem" }}
          placeholder="Buscar repositório"
        />
        <Button
          kind="primary"
          skin="default"
          size="medium"
          style={{ height: 46 }}
        >
          <Icon icon="zoomOutline" style={{ marginRight: "0.5rem" }} />
          Buscar
        </Button>
      </HFlow>

      {repositories.map(repo => (
        <GitListItem
          id={repo.id}
          name={repo.name}
          stars={repo.stargazers_count}
          forks={repo.forks}
          watchers={repo.watchers}
        />
      ))}
    </VFlow>
  );
};
