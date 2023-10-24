"use client";
import Image from "next/image";
import contactImage from "@/assets/landing/contact.png";

const ContactForm = () => {
  const onFormSubmit = () => {
    /* Pendiente */
  };
  return (
    <section
      id="soporte"
      className="h-[calc(100vh_-_0px)] flex flex-col items-center justify-center gap-6 w-full p-5 md:flex-wrap md:flex-row"
    >
      <h2 className="block text-4xl font-semibold text-mBlack md:hidden dark:text-mWhite">
        Contact
      </h2>
      <figure className="hidden w-1/2 items-center md:flex">
        <Image className="rounded-md" src={contactImage} alt="Contact image" />
      </figure>

      <form
        className="flex flex-col flex-1 justify-center gap-y-3 dark:text-mBlack"
        onSubmit={onFormSubmit}
      >
        <input
          className="h-14 rounded-md p-4 placeholder-mWhite bg-mDarkGray focus:bg-mWhite focus:placeholder-mBlack transition-all "
          name="name"
          required
          maxLength={500}
          placeholder="Nombre*"
        />
        <input
          className="h-14 rounded-md p-4rounded-md  p-4 placeholder-mWhite bg-mDarkGray focus:bg-mWhite focus:placeholder-mBlack transition-all "
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Email*"
        />
        <textarea
          className="h-52 rounded-md p-4 placeholder-mWhite bg-mDarkGray focus:bg-mWhite focus:placeholder-mBlack transition-all "
          name="message"
          placeholder="Mensaje*"
          required
          maxLength={5000}
        />
        <div className="flex w-full justify-center">
          <button className="w-full rounded-md p-4 bg-cyan-700 text-mBlack font-bold">
            ENVIAR
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
