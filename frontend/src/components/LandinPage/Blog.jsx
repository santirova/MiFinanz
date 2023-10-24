import Image from "next/image";
import blogCategory from "@/assets/landing/blogCategory.png";
import blogFee from "@/assets/landing/blogFee.png";
import blogGoal from "@/assets/landing/blogGoal.png";

export default function Blog() {
  return (
    <section
      id="blog"
      className="h-[calc(100vh_-_0px)] w-full flex flex-col md:flex-row"
    >
      <div className="w-1/2">
        <Image src={blogGoal} alt="Blog goal picture" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam optio
          laudantium nostrum corrupti aut voluptate quam alias natus doloribus
          laboriosam. Modi, magni delectus id aliquam molestiae corporis
          provident velit voluptatum!
        </p>
      </div>
      <div className="w-1/2">
        <div className="flex">
          <Image src={blogCategory} alt="Blog Category picture" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            ducimus alias enim deleniti facilis minima ipsum iure perferendis
            fuga quos. Officiis maiores est eos libero quod veniam quos ex
            laudantium.
          </p>
        </div>
        <div className="flex">
          <Image src={blogFee} alt="Blog Fee picture" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            voluptatibus explicabo ab perferendis similique, quibusdam incidunt
            nisi tempora neque. Optio temporibus earum repellendus voluptas
            alias autem inventore adipisci magnam. Doloribus.
          </p>
        </div>
      </div>
    </section>
  );
}
