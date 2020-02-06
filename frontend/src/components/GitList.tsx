import React, { useState, useEffect } from "react";
import {
  VFlow,
  TextField,
  Button,
  Icon,
  HFlow,
  Text
} from "bold-ui";
import { GitListItem } from "./GitListItem";

export const GitList = () => {
  const [repositories, setRepositories] = useState([
    { id: 0, name: "-", description: "-", stargazers_count: 0, forks: 0, 
    watchers: 0, owner: {login: ""}, open_issues: 0, language: "-", created_at:"-"}
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
    <VFlow style={{ margin: "3.12rem 3.12rem 3.12rem 3.12rem" }}>
      <VFlow>
        <Text fontWeight="bold" fontSize={3}>
          Bridge Dev
        </Text>
      </VFlow>
      <HFlow alignItems="center" hSpacing={2}>
        <TextField
          maxLength={200}
          style={{ width: "58.5rem", fontSize: "1.6rem" }}
          placeholder="Buscar repositório"
        />
        <Button
          kind="primary"
          skin="default"
          size="medium"
          style={{ height: 46,  }}
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
          description={repo.description}
          login= {repo.owner.login}
          open_issues= {repo.open_issues}
          language= {repo.language}
          created_at= {repo.created_at}
        />
      ))}
    </VFlow>
  );
};
