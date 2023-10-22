import Image from "next/image"
import Section from '@/assets/landing/Section.png'
export default function Blog() {
    return (
        <section id="blog" className="h-[calc(100vh_-_120px)]">
            <div className="w-1/2 md:w-full">
                <Image src={Section} />
            </div>
        </section>
    )
}