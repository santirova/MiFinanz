import ContactForm from '@/components/LandinPage/ContactForm'
import NavBar from '@/components/LandinPage/NavBar'
import PriceCard from '@/components/LandinPage/PriceCard'
import TeamInfo from '@/components/LandinPage/TeamInfo'
import LandingHeader from '../components/LandinPage/LandingHeader'
import TryDemo from '@/components/LandinPage/TryDemo'
import Blog from '@/components/LandinPage/Blog'
import Footer from '@/components/LandinPage/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-mWhite text-mBlack dark:bg-mBlack dark:text-mWhite">
      < >
        <NavBar />
        <div className='flex flex-col items-center justify-center gap-24'>
          <LandingHeader />
        </div>
        <div className='w-full bg-gradient-to-b from-[#44444C] from-5% via-[#313135] via-25% to-mBlack flex flex-col items-center justify-center gap-24'>
          <TryDemo />
        </div>
        <div className='flex flex-col items-center justify-center gap-24'>
          <Blog />
          <PriceCard />
          <TeamInfo />
          <ContactForm />
        </div>
        <Footer />
      </>
    </main>
  )
}
