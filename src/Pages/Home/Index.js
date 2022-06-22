import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button1, Container } from "./style";
import { imagem } from "../img/lista.jpg";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/data";
import { AdicionarLista } from "../../Components/AdicionarLista";

export const Home = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/quemsomos");
  }

  return (
    <>
      <Container>
        <h1>Bem vindo(a) a sua Lista de Desejos!!</h1>
        <img src={require("../img/lista.jpg")} width="20%" height="30%" />
        <Button1 onClick={handleClick}>Navegar</Button1>
      </Container>
    </>
  );
};
