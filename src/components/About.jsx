import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full lg:w-[70%] lg:m-auto mt-[0%] p-10 bg-green-100 rounded-lg shadow-lg">
      <h1 className="text-2xl lg:text-5xl font-extrabold text-green-600 mb-8 text-center">
        Let's Talk About What We Are
      </h1>
      <p className="text-center text-lg lg:text-2xl text-zinc-700 mb-6">
        Discover more about our story, values, and what drives us to deliver the best experience for you. We are excited to share our journey with you.
      </p>
      <button className="rounded-md text-lg lg:text-xl bg-green-600 text-white py-3 px-8 hover:bg-green-700 duration-200 mb-10">
        Jaan Pehchan Bna Lo Fraands &nbsp; &#8594;
      </button>
      <img 
        className="w-full lg:w-[50%] rounded-lg  lg:hidden" 
        src="https://img.freepik.com/premium-photo/peru-sushi-peruvian-style-icon_889461-6482.jpg" 
        alt="About Us Illustration"
      />
    </div>
  );
};

export default About;
