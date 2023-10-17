import Image from "next/image"
import graphics from "@/assets/landing/graphics.png"
export default function LandingTwo () {
    return(
        <section className="flex justify-between ">
            <div>
                <Image src={graphics}/>
            </div>
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa distinctio deleniti asperi</p>
            </div>
        </section>
    )
}