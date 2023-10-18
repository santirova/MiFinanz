import ContactForm from '@/components/LandinPage/ContactForm'
import NavBar from '@/components/LandinPage/NavBar'
import PriceCard from '@/components/LandinPage/PriceCard'
import TeamInfo from '@/components/LandinPage/TeamInfo'
import LandingHeader from '../components/LandinPage/LandingHeader'
import LandingTwo from '@/components/LandinPage/LandingTwo'
import LandingThree from '@/components/LandinPage/LandingThree'
import Footer from '@/components/LandinPage/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-mWhite text-mBlack dark:bg-mBlack dark:text-mWhite">
      < >
        <NavBar />
        <hr className="bg-mlightGray w-full h-px my-2 border-0 dark:bg-mWhite" />
        <div className='flex flex-col items-center justify-center gap-24'>
          <LandingHeader/>
          <LandingTwo/>
          <LandingThree/>
          <PriceCard />
          <ContactForm />
          <TeamInfo />
        </div>
        <Footer/>
      </>
    </main>
  )
}
