"use client";
import React, { useState } from "react";
import { contextGlobal } from "./contextoGlobal";

export default function Form() {
  const [producto, setProducto] = useState({
    rutaImg: "",
    nombre: "",
    precio: 0,
  });

  const { products, setProducts } = contextGlobal();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!producto.rutaImg || !producto.nombre || !producto.precio) {
      alert("Debes ingresar una ruta de imagen, un nombre de producto y un precio.");
      return;
    }

    setProducts([...products, producto]);
    console.log(products);
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4">Ingrese el producto</h2>
        <div className="flex flex-col w-full gap-y-4">
          <input
            type="text"
            name="rutaImg"
            placeholder="URL"
            value={producto.rutaImg}
            onChange={handleInputChange}
            className="text-lg text-black bg-white border border-b rounded-sm placeholder-black p-2"
          />
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={producto.nombre}
            onChange={handleInputChange}
            className="text-lg text-black bg-white border border-b rounded-sm placeholder-black p-2"
          />
          <input
            type="number"
            name="precio"
            placeholder="Precio"
            value={producto.precio}
            onChange={handleInputChange}
            className="text-lg text-black bg-white border border-b rounded-sm placeholder-black p-2"
          />
        </div>
        <button type="submit" className="w-32 mt-4 text-white bg-indigo-600 p-2 rounded-md">
          Confirmar
        </button>
      </form>
    </div>
  );
}

