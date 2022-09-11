import Image from "next/image";
import React from "react";

const Card = ({ description, urlImage }) => {
  return (
    <article
      className="bg-darkGray px-10 py-16 rounded-[32px] text-center border-2 border-darkGray sm:hover:border-2 sm:hover:border-primary
      sm:hover:shadow-[0px_0px_12px_rgba(255,255,255,0.3)] transition-colors duration-150 ease-in-out"
    >
      <Image
        src={urlImage}
        width={56}
        height={56}
        alt={description}
        layout="fixed"
      />
      <p className="text-[22px] md:text-[26px] font-medium text-center mt-12 leading-tight">
        {description}
      </p>
    </article>
  );
};

export default Card;
