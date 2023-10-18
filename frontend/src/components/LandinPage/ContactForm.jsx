'use client'
import Image from 'next/image'
import contactImage from '@/assets/landing/contact.png'


const ContactForm = () => {
    const onFormSubmit = () => {
        /* Pendiente */
    }
    return (
        <section className="flex flex-wrap justify-center gap-6 w-full p-5">
            <figure className="flex w-1/2 items-center">
                <Image className='rounded-md' src={contactImage} alt="Contact image" />
            </figure>

            <form
                className="flex flex-col flex-1 justify-center gap-y-3 dark:text-black"
                onSubmit={onFormSubmit}
            >
                <input
                    className="h-14 rounded-md p-4 placeholder-white bg-gray-700 focus:bg-white focus:placeholder-black transition-all "
                    name="name"
                    required
                    maxLength={500}
                    placeholder="Name*"
                />
                <input
                    className="h-14 rounded-md p-4rounded-md  p-4 placeholder-white bg-gray-700 focus:bg-white focus:placeholder-black transition-all "
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Email*"
                />
                <textarea
                    className="h-52 rounded-md p-4 placeholder-white bg-gray-700 focus:bg-white focus:placeholder-black transition-all "
                    name="message"
                    placeholder="Message*"
                    required
                    maxLength={5000}
                />
                <div className="flex w-full justify-center">
                    <button className="w-full rounded-md p-4 bg-cyan-700 text-black font-bold">ENVIAR</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm