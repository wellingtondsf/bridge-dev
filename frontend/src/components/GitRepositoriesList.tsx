import { Button, HFlow, Icon, Text, TextField, VFlow } from "bold-ui";
import React, { useEffect, useState } from "react";
import {
  GitRepositoriesListItem,
  GitRepositories
} from "./GitRepositoriesListItem";

export const GitRepositoriesList = () => {
  const [repositories, setRepositories] = useState<GitRepositories>();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch(`/api/repositories?name=${inputValue}`)
      .then(response => response.json())
      .then(data => setRepositories(data))
      .catch(response => console.log("Ocorreu algum erro.", response));
  }, [inputValue, setInputValue]);

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
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
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

        {repositories?.items?.length > 0 ? (
          repositories?.items.map(repo => (
            <GitRepositoriesListItem key={repo.id} item={repo} />
          ))
        ) : (
          <Text>Nenhum resultado encontrado.</Text>
        )}
      </VFlow>
    );
  } else {
    return null;
  }
};
