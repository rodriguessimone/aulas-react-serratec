import React, { useState } from "react";
import { Mostrar } from "./Mostrar";

export const Input = () => {
  const [nome, setNome] = useState();

  function handleChangeNome(e) {
    setNome(e.target.value);
  }

  return (
    <>
      <label>
        Nome: {nome}
      </label>
      <div>
        <input type="text" value={nome} onChange={(e) => handleChangeNome(e)} />
      </div>
    </>
  );
};
