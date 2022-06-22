import React from "react";

export const ListaDeCompras = (props) => {
  return (
    <>
      <h3>Seus Desejos listados:</h3>
      {props.lista.map((res) => (
        <div>
          <span>{res}</span>
        </div>
      ))}
    </>
  );
};
