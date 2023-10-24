import Card from '@/components/Card'
import ContainProducts from '@/components/ContainProducts'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
     <div>
      <Navbar/>
       <main className="flex flex-col items-center pt-10">
        <ContainProducts/>
      </main>
     </div>
  )
}
