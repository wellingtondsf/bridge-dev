import React, { useState } from "react";
import {
  VFlow,
  Grid,
  Cell,
  TextField,
  Button,
  Icon,
  Text,
  HFlow
} from "bold-ui";

export interface GitRepositoriesFormProps {
  handleSubmit(repo: String, language: String, user: String): void;
}

export const GitRepositoriesForm = (props: GitRepositoriesFormProps) => {
  const [repositoryValue, setRepositoryValue] = useState("");
  const [languageValue, setLanguageValue] = useState("");
  const [userValue, setUserValue] = useState("");

  const onBuscarClicked = () => {
    props.handleSubmit(repositoryValue, languageValue, userValue);
  };

  return (
    <>
      <VFlow style={{ textAlign: "center" }}>
        <Text fontWeight="bold" fontSize={3}>
          Bridge Dev
        </Text>
      </VFlow>
      <VFlow
        style={{
          paddingBottom: "1rem"
        }}
      >
        <Grid>
          <Cell md={12}>
            <TextField
              label="Buscar repositório"
              maxLength={200}
              style={{ fontSize: "1.5rem" }}
              onChange={e => setRepositoryValue(e.target.value)}
              name={"buscaCidadaoDiltro"}
            />
          </Cell>
          <Cell md={3}>
            <TextField
              name={"userFiltro"}
              label="Usuário"
              onChange={e => setUserValue(e.target.value)}
            />
          </Cell>

          <Cell md={3}>
            <TextField
              name={"linguagemFiltro"}
              label="Linguagem principal"
              onChange={e => setLanguageValue(e.target.value)}
            />
          </Cell>
          <Cell alignSelf="flex-end" md={5}>
            <HFlow alignItems={"flex-end"}>
              <Button kind="normal" skin="outline" size="small">
                Limpar filtros
              </Button>
              <Button
                kind="primary"
                skin="default"
                size="small"
                onClick={onBuscarClicked}
              >
                <Icon icon="zoomOutline" style={{ marginRight: "0.5rem" }} />
                Buscar
              </Button>
            </HFlow>
          </Cell>
        </Grid>
      </VFlow>
    </>
  );
};
