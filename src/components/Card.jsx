"use client";
import { useEffect, useState } from "react";
import { contextGlobal } from "./contextoGlobal";

export default function Card({ producto }) {
  const { setState, state } = contextGlobal();
  const [cantidad1, setCantidad] = useState(1);

  const handleAdd = () => {
    // Verificamos si existe el producto en el arreglo.
    const productoExistente = state.find((e) => e.nombre === producto.nombre);

    // Si el producto existe, incrementamos su cantidad.
    if (productoExistente) {
      productoExistente.cantidad += cantidad1;
      setState([...state]);
    } else {
      // Si el producto no existe, lo agregamos al arreglo con la cantidad especificada.
      producto = { ...producto, cantidad: cantidad1 };
      setState([...state, producto]);
    }
  };

  return (
    <div className="flex items-center flex-col  shadow-lg rounded-lg mb-9 overflow-hidden w-72">
      <img src={producto.rutaImg} alt={producto.nombre} className="h-48 object-cover" />
      <div className="px-4 py-2">
        <h2 className="text-xl font-bold mb-2">{producto.nombre}</h2>
        <p className="text-gray-600 mb-4">Precio: ${producto.precio}</p>
        <button
          className="p-2 text-white bg-indigo-600 rounded-md w-full"
          onClick={handleAdd}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
  
}
