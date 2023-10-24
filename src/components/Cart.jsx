"use client";
import React, { useState, useEffect } from "react";
import { contextGlobal } from "./contextoGlobal";
import ListProducts from "./ListProducts";

export default function Cart() {
  const { state } = contextGlobal();
  const [ver, setVer] = useState(false);

  useEffect(() => () => {}, [state]);

  return (
    <>
      <div className="absolute flex items-center justify-center p-1 bg-green-500 rounded-full w-7 h-7 right-1 top-1">
        {state.length}
      </div>
      <button
        className="p-2 text-white rounded-sm bg-red-600"
        onClick={() => setVer(!ver)}
      >
        Carrito de compras
      </button>
      {ver && <ListProducts />}
    </>
  );
}

