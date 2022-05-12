import Image from "next/image";
import React from "react";

const Card = ({ name, description, urlImage }) => {
  return (
    <div
      className="bg-gray px-10 py-16 rounded-[32px] text-center border-2 border-gray hover:border-2 hover:border-primary
       hover:shadow-[0px_0px_12px_rgba(255,255,255,0.3)] transition-colors ease-in-out duration-300"
    >
      <Image src={urlImage} width={56} height={56} alt={name} />
      <p className="text-[22px] md:text-[26px] font-medium text-center mt-12 leading-tight">
        {description}
      </p>
    </div>
  );
};

export default Card;
