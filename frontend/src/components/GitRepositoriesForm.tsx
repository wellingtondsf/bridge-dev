import React, { useState } from "react";
import { Grid, Cell, TextField, Button, Icon, HFlow } from "bold-ui";

export interface GitRepositoriesFormProps {
  handleSubmit(
    repo: string,
    language: string,
    user: string,
    page?: number
  ): void;
}

export const GitRepositoriesForm = (props: GitRepositoriesFormProps) => {
  const [formState, setFormState] = useState({
    repository: "",
    language: "",
    user: ""
  });

  const handleChange = (name: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const el = e.target;

    setFormState(state => ({
      ...state,
      [name]: el.value
    }));
  };

  const handleBuscarClicked = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.handleSubmit(
      formState.repository,
      formState.language,
      formState.user
    );
  };

  const handleClearValuesClicked = () => {
    setFormState({
      repository: "",
      language: "",
      user: ""
    });
  };

  return (
    <>
      <form onSubmit={handleBuscarClicked}>
        <Grid>
          <Cell md={12}>
            <TextField
              label="Buscar repositório"
              style={{ fontSize: "1.5rem", borderRadius: "15px" }}
              onChange={handleChange("repository")}
              value={formState.repository}
              name={"repository"}
              clearable={false}
            />
          </Cell>
          <Cell md={5}>
            <TextField
              name={"user"}
              label="Usuário"
              style={{ fontSize: "1.5rem", borderRadius: "15px" }}
              onChange={handleChange("user")}
              value={formState.user}
              clearable={false}
            />
          </Cell>
          <Cell md={5}>
            <TextField
              name={"language"}
              label="Linguagem principal"
              style={{ fontSize: "1.5rem", borderRadius: "15px" }}
              onChange={handleChange("language")}
              value={formState.language}
              clearable={false}
            />
          </Cell>
          <HFlow alignItems={"flex-end"}>
            <Cell alignSelf="flex-end" md={12}>
              <Button
                kind="normal"
                skin="outline"
                size="medium"
                type="reset"
                onClick={handleClearValuesClicked}
              >
                Limpar filtros
              </Button>
            </Cell>
            <Cell>
              <Button kind="primary" skin="default" size="medium" type="submit">
                <Icon icon="zoomOutline" style={{ marginRight: "0.5rem" }} />
                Buscar
              </Button>
            </Cell>
          </HFlow>
        </Grid>
      </form>
    </>
  );
};
