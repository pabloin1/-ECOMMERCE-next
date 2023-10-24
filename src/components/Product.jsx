import { contextGlobal } from "./contextoGlobal";

export default function Product({ producto }) {
  const { products, setProducts } = contextGlobal();

  const deleteProduct = () => {
    const updatedProducts = products.filter((p) => p.nombre !== producto.nombre);
    setProducts(updatedProducts);
  };

  return (
    <div className="flex flex-row items-center p-3 rounded-md shadow-md h-36 w-72">
      <img src={producto.rutaImg} alt={producto.nombre} className="w-32 h-32 rounded-md" />
      <div>
        <p>{"Producto: " + producto.nombre}</p>
        <p>{"Precio: $" + producto.precio}</p>
        <button
          className="text-[0.9rem] text-white bg-red-500 p-1 mt-2 rounded-sm"
          onClick={deleteProduct}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

