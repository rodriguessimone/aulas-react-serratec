import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import { FirstText, SecondText, Container, AulaButton } from "./style.js";

import { AdicionarLista } from "../../Components/AdicionarLista.js";
import { api } from "../../Services/api.js";

export const QuemSomos = () => {
  const [usuario, setUsuario] = useState({
    nome: "",
    preco: "",
  });

  useEffect(() => {
    const getUsuario = async () => {
      const response = await api.get(`ecommerce / produtos`);
      console.log(response.data);
    };
    getUsuario();
  }, []);

  var navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <Container>
        <FirstText>Adicione seus Desejos!</FirstText>
        <SecondText> Vamos começar?</SecondText>
        <AdicionarLista />
        <AulaButton onClick={handleClick}>Voltar para home</AulaButton>
      </Container>
    </>
  );
};
