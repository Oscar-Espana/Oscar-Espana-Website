import React from "react";

const ItemSkill = ({ skill }) => {
  return (
    <p className="boxSkill absolute w-60 md:w-[425px] lg:w-[500px] text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center">
      {skill}
    </p>
  );
};

export default ItemSkill;
