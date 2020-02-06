import { Button, HFlow, Icon, Text, TextField, VFlow } from "bold-ui";
import React, { useEffect, useState } from "react";
import { GitListItem, GitRepositories } from "./GitListItem";

export const GitList = () => {
  const [repositories, setRepositories] = useState<GitRepositories>();

  async function fetchRep() {
    const response = await fetch(`https://api.github.com/users/diego3g/repos`);
    const data = await response.json();
    setRepositories(data);
  }

  useEffect(() => {
    fetch("/api/repositories?name=bold")
      .then(response => response.json())
      .then(data => setRepositories(data))
      .catch(response => console.log("Deu xabu", response));
    // fetchRep();
  }, []);

  if (repositories) {
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
            style={{ height: 46 }}
          >
            <Icon icon="zoomOutline" style={{ marginRight: "0.5rem" }} />
            Buscar
          </Button>
        </HFlow>

        {repositories?.items.map(repo => (
          <GitListItem key={repo.id} item={repo} />
        ))}
      </VFlow>
    );
  } else {
    return null;
  }
};
