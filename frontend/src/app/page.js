import ContactForm from '@/components/LandinPage/ContactForm'
import NavBar from '@/components/LandinPage/NavBar'
import PriceCard from '@/components/LandinPage/PriceCard'
import TeamInfo from '@/components/LandinPage/TeamInfo'
import Footer from '../components/LandinPage/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white dark:bg-black text-white">
      < >
        <NavBar />
        <div className='flex flex-col items-center justify-center'>
          <PriceCard />
          <ContactForm />
          <TeamInfo />
        </div>
        <Footer />
      </>
    </main>
  )
}
