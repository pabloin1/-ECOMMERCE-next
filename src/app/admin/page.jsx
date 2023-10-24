import Form from "@/components/Form";
import Stock from "@/components/Stock";
import Link from "next/link";

export default function Adminpage() {
  return (
    <div>     
      <div className="flex flex-row mt-20 justify-center w-full px-4 py-5 gap-x-52">
        <Form/>
        <Stock/>
      </div>

      <nav className="flex flex-col mt-20 items-center justify-between w-full px-4 py-2">
      <Link href="/" className="p-2 text-white bg-indigo-600 rounded-sm">Volver al inicio</Link>
      </nav>
    </div>
  )
}
