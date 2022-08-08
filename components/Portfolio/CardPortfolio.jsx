import Image from "next/image";
import React from "react";

const CardPortfolio = ({
  title = "",
  titleEmphasys,
  description,
  imageUrl,
  technologies,
}) => {
  return (
    <article className="container bg-white rounded-3xl text-black transition-colors duration-300 ease-in-out ">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-5 py-16 md:py-24 lg:py-28">
        <div className=" md:col-span-4">
          <h3>
            {title}{" "}
            <span className="text-gradient-primary">{titleEmphasys}</span>
          </h3>
          <p className="description-portfolio text-[18px] mt-5 md:mt-12 text-darkGray">
            {description}
          </p>
        </div>
        <div className="md:col-span-7 md:col-end-13 ">
          <figure className="shadow-xl">
            <Image
              src={imageUrl}
              alt={`${title} ${titleEmphasys}`}
              width={640}
              height={365}
              layout="responsive"
            />
          </figure>
          <p className="tech-portfolio text-[15px] md:text-base mt-5 md:mt-10 text-violet hover:text-gradient-violet text-right ">
            {technologies}
          </p>
        </div>
      </div>
    </article>
  );
};

export default CardPortfolio;
