import Image from "next/image";
import React from "react";

const CardPortfolio = ({
  title = "",
  titleEmphasys,
  description,
  imageUrl,
  technologies,
  linkProject,
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

          {linkProject && (
            <a
              className="link-portfolio mt-5 flex items-center gap-2 group cursor-pointer text-neutral-600"
              href={linkProject}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col overflow-hidden">
                <p className="group-hover:text-primary transition-colors ease-in-out duration-300 ">
                  Ver proyecto
                </p>
                <div className="mt-[2px] h-[1px] bg-primary -translate-x-full group-hover:translate-x-0 transition-transform ease-in-out duration-300 "></div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-right-circle group-hover:text-primary group-hover:-rotate-45 transition-all ease-in-out duration-300"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 16 16 12 12 8"></polyline>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </a>
          )}
        </div>
        <div className="md:col-span-7 md:col-end-13 ">
          <figure className="shadow-xl">
            <Image
              src={imageUrl}
              alt={`${title} ${titleEmphasys}`}
              width={640}
              height={365}
              quality={80}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
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
