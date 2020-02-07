import React, { useState } from "react";
import { GitRepositoriesForm } from "./GitRepositoriesForm";
import { GitRepositoriesList } from "./GitRepositoriesList";
import { GitRepositories } from "./GitRepositoriesListItem";
import { VFlow, useTheme } from "bold-ui";

export const GitRepositoriesView = () => {
  const [repositories, setRepositories] = useState<GitRepositories>({
    totalCount: 0,
    items: []
  });
  const theme = useTheme();

  const onBuscarClicked = (repo: String) => {
    fetch(`/api/repositories?name=${repo}`)
      .then(response => response.json())
      .then(data => setRepositories(data))
      .catch(response => console.log("Ocorreu algum erro.", response));
  };

  return (
    <VFlow style={{ margin: "5.12rem 5.12rem 5.12rem 5.12rem" }}>
      <GitRepositoriesForm handleSubmit={onBuscarClicked} />
      <div style={{ borderBottom: `1px solid ${theme.pallete.divider}` }} />
      <GitRepositoriesList repo={repositories} />
    </VFlow>
  );
};
