"use client"
import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const MyContext = createContext();

// Crear un componente que proporciona el contexto
export const GlobalState = ({ children }) => {
  const [state, setState] = useState([]);
  const [products, setProducts] = useState([
    {
      nombre: "AMD Ryzen 7 5800X 3.8GHz",
      precio: 3000,
      rutaImg: "https://img.pccomponentes.com/articles/32/328473/168-amd-ryzen-7-5800x-38ghz.jpg"
    },
    {
      nombre: "AMD Ryzen 5 5600X 3.7GHz",
      precio: 2000,
      rutaImg: "https://thumb.pccomponentes.com/w-530-530/articles/32/328475/1101-amd-ryzen-5-5600x-37ghz.jpg"
    },
    {
      nombre: "AMD Ryzen 7 7800X 4.2GHz",
      precio: 5000,
      rutaImg: "https://thumb.pccomponentes.com/w-530-530/articles/1066/10665103/1575-amd-ryzen-7-7800x3d-42-ghz-5-ghz.jpg"
    },
    {
      nombre: "Intel Core i5-12400F 2.5 GHz",
      precio: 5000,
      rutaImg: "https://thumb.pccomponentes.com/w-530-530/articles/83/834922/1636-intel-core-i5-12400f-44-ghz.jpg"
    },
  ]);

  return (
    <MyContext.Provider value={{ state, setState, products, setProducts }}>
      {children}
    </MyContext.Provider>
  );
};

export const contextGlobal = () => useContext(MyContext);
