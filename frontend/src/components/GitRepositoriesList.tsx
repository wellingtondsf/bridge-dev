import { HFlow, Text, VFlow, Paginator } from "bold-ui";
import React from "react";
import {
  GitRepositoriesListItem,
  GitRepositories,
  GitRepositoriesItem
} from "./GitRepositoriesListItem";

export interface GitRepositoriesListProps {
  repo: GitRepositories;
  handleChangePage(page?: number): void;
  handleAddRemoveFavorite(item: GitRepositoriesItem, favorite: boolean): void;
  page: number;
}

export const GitRepositoriesList = (props: GitRepositoriesListProps) => {
  return (
    <VFlow>
      <HFlow>
        <Text fontSize={1.5}>
          Repositórios
          {props.repo?.totalCount != null ? (
            <Text fontSize={1} style={{ marginLeft: "1rem" }}>
              {props.repo.totalCount === 1
                ? props.repo.totalCount + " repositorio encontrado"
                : props.repo.totalCount + " repositorios encontrados"}
            </Text>
          ) : null}
        </Text>
      </HFlow>

      {props.repo?.items != null ? (
        props.repo?.items.map(repo => (
          <GitRepositoriesListItem
            key={repo.id}
            item={repo}
            handleAddRemoveFavorite={props.handleAddRemoveFavorite}
          />
        ))
      ) : (
        <HFlow alignItems="center" style={{ textAlign: "center" }}>
          <Text>Nenhum repositorio encontrado.</Text>
        </HFlow>
      )}
      {props.repo?.items?.length > 0 ? (
        <VFlow style={{ textAlign: "center" }}>
          <Paginator
            page={props.page}
            total={
              props.repo.totalCount % 30 !== 0
                ? Math.floor(props.repo.totalCount / 30 + 1)
                : Math.floor(props.repo.totalCount / 30)
            }
            onChange={props.handleChangePage}
          />
        </VFlow>
      ) : null}
    </VFlow>
  );
};
