"use client"
import Product from "./Product";
import { contextGlobal } from "./contextoGlobal"

export default function Stock() {
      //esta variables son las del context
  const {products,setProducts} = contextGlobal();
  return (
    <div className="p-4 shadow-sm w-[59rem] ">
      <div className="flex flex-row flex-wrap w-full px-3 overflow-y-auto gap-y-2 h-[25rem] gap-x-3 py-2">
      {
            products.map((e,i)=>{
                return <Product producto={e} key={i}/>
            })
          }
      </div>
          
    </div>
  )
}
