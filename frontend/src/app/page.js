import ContactForm from '@/components/LandinPage/ContactForm'
import NavBar from '@/components/LandinPage/NavBar'
import PriceCard from '@/components/LandinPage/PriceCard'
import TeamInfo from '@/components/LandinPage/TeamInfo'
<<<<<<< HEAD
import LandingHeader from '../components/LandinPage/LandingHeader'
import LandingTwo from '@/components/LandinPage/LandingTwo'
import LandingThree from '@/components/LandinPage/LandingThree'
=======
import Footer from '../components/LandinPage/Footer'
>>>>>>> 7c2a11520cda56603bafd9f6ab8dfba2ea1e5fb9

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white dark:bg-black text-white">
      < >
        <NavBar />
        <div className='flex flex-col items-center justify-center'>
          <LandingHeader/>
          <LandingTwo/>
          <LandingThree/>
          <PriceCard />
          <ContactForm />
          <TeamInfo />
        </div>
        <Footer />
      </>
    </main>
  )
}
