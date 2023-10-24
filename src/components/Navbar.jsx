"use client";
import Link from "next/link";
import Cart from "./Cart";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-5 py-3">
      <h1 className="flex text-3xl font-black">
        Tiendita <div className="text-indigo-600">UP</div>
      </h1>
      <div className="flex gap-x-10">
        <Link href="/admin" className="p-2 bg-indigo-600 text-white rounded-none">
          Administrador
        </Link>
        <Cart />
      </div>
    </nav>
  );
}

