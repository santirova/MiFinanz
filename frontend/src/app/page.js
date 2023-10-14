import NavBar from '@/components/LandinPage/NavBar'
import PriceCard from '@/components/LandinPage/PriceCard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      < >
        <NavBar />
        <p>Hola mundo</p>
        <PriceCard />
      </>
    </main>
  )
}
