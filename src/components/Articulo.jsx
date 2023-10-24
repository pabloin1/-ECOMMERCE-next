"use client";
import React from "react";
import { contextGlobal } from "./contextoGlobal";

export default function Articulo({ producto }) {
  const { state, setState } = contextGlobal();

  const handleDelete = () => {
    const productoExistente = state.find((objeto) => objeto.nombre === producto.nombre);

    if (productoExistente) {
      productoExistente.cantidad--;

      if (productoExistente.cantidad === 0) {
        setState((prevState) => prevState.filter((objeto) => objeto.nombre !== producto.nombre));
      } else {
        setState([...state]);
      }
    }
  };

  return (
    <div className="flex items-center shadow-md justify-between p-2  rounded-md">
      <div className="flex flex-row items-center gap-x-4 mr-7">
        <img src={producto.rutaImg} alt="" className="w-16 h-16" />
        <p className="text-lg">{`${producto.nombre}, cantidad: ${producto.cantidad} total: ${producto.cantidad * producto.precio}`}</p>
      </div>

      <button className="items-center w-8 p-1 text-white bg-red-500" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}