import React, { useState } from "react";
import { GitRepositoriesForm } from "./GitRepositoriesForm";
import { GitRepositoriesList } from "./GitRepositoriesList";
import {
  GitRepositories,
  GitRepositoriesItem
} from "./GitRepositoriesListItem";
import { VFlow, useTheme, Button, Icon, Text } from "bold-ui";

export interface FavoritesRepositoriesListItems {
  item: GitRepositoriesItem[];
}

export const GitRepositoriesView = () => {
  const theme = useTheme();
  const [actualPage, setActualPage] = useState<number>(1);
  const [actualForm, setActualForm] = useState({
    repository: "",
    language: "",
    user: ""
  });

  const [repositories, setRepositories] = useState<GitRepositories>({
    totalCount: 0,
    items: []
  });

  const [favorites, setFavorites] = useState<FavoritesRepositoriesListItems>({
    item: []
  });

  const handleAddRemoveFavorite = (
    item: GitRepositoriesItem,
    favorite: boolean
  ) => {
    if (favorite === true) {
      setFavorites((previusFav: { item: any }) => ({
        item: [...previusFav.item, item]
      }));
    } else {
      const index = favorites.item.indexOf(item);
      setFavorites(() => ({ item: favorites.item.splice(index, 1) }));
    }
  };

  const handleBuscarClicked = (
    repo: string,
    language: string,
    user: string
  ) => {
    if (repo !== "" || language !== "" || user !== "") {
      setActualForm({ repository: repo, language: language, user: user });
      setActualPage(1);
      fetch(
        `/api/repositories?name=${repo}&language=${language}&user=${user}&page=${1}`
      )
        .then(response => response.json())
        .then(data => setRepositories(data))
        .catch(response => console.log("Ocorreu algum erro.", response));
    }
  };

  const handleChangePage = (page: number) => {
    setActualPage(page);
    fetch(
      `/api/repositories?name=${actualForm.repository}&language=${actualForm.language}&user=${actualForm.user}&page=${actualPage}`
    )
      .then(response => response.json())
      .then(data => setRepositories(data))
      .catch(response => console.log("Ocorreu algum erro.", response));
  };

  const handleScrollClicked = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <VFlow style={{ textAlign: "center", marginTop: "4rem" }}>
        <Text fontWeight="bold" fontSize={3}>
          Bridge Dev
        </Text>
      </VFlow>

      <VFlow style={{ margin: "5.12rem 5.12rem 5.12rem 5.12rem" }}>
        <GitRepositoriesForm handleSubmit={handleBuscarClicked} />
        <div style={{ borderBottom: `1px solid ${theme.pallete.divider}` }} />
        <GitRepositoriesList
          repo={repositories}
          handleChangePage={handleChangePage}
          handleAddRemoveFavorite={handleAddRemoveFavorite}
          page={actualPage}
        />
      </VFlow>

      <Button
        onClick={handleScrollClicked}
        skin="ghost"
        size="small"
        style={{
          position: "fixed",
          bottom: "2rem",
          left: "99.5%",
          marginLeft: "-50px",
          opacity: "0.4"
        }}
      >
        <Icon icon="arrowUp" />
      </Button>
    </>
  );
};
