import React from "react";

const WorkTogether = () => {
  return (
    <section className="bg-black pt-24 pb-20 md:py-28 lg:pt-32 lg:pb-20">
      <div className="container grid grid-cols-12 space-y-20 md:space-y-0">
        <div className="col-span-12 md:col-span-5 flex flex-col items-center md:items-start">
          <h2 className="text-white text-center md:text-left ">
            <span className="text-gradient-primary">
              Trabajemos <br />
            </span>{" "}
            juntos
          </h2>
          <button
            className="mt-16 md:mt-24 px-12 py-3 text-xl font-medium bg-gradient-primary text-white rounded-lg cursor-pointer
           hover:animated-gradient-button"
          >
            Contáctame
          </button>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6 flex flex-col justify-center">
          <div className="space-y-3 mb-16 mt-6 md:mt-0 md:mb-28 text-white">
            <p className="text-[18px] text-center md:text-right ">
              espaaoscar@gmail.com
            </p>
            <p className="text-[18px] text-center md:text-right ">
              +593990121123
            </p>
            <p className="text-[18px] text-center md:text-right ">LinkedIn</p>
            <p className="text-[18px] text-center md:text-right ">Github</p>
          </div>
        </div>
      </div>
      <p className="text-white text-center mt-20 md:mt-32">
        © Oscar España - 2022
      </p>
    </section>
  );
};

export default WorkTogether;
