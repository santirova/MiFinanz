import Image from "next/image"
import Section from '@/assets/landing/Section.png'
export default function LandingThree() {
    return (
        <section id="" className="h-[calc(100vh_-_120px)]">
            <div className="w-1/2 md:w-full">
                <Image src={Section} />
            </div>
        </section>
    )
}