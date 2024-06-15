import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full lg:w-[70%] lg:m-auto mt-[1%] p-10 bg-green-100 rounded-lg shadow-lg">
      <h1 className="text-2xl lg:text-5xl font-extrabold text-green-600 mb-8 text-center">
        Do You Want to Reach Us?
      </h1>
      <p className="text-center text-lg lg:text-2xl text-zinc-700 mb-6">
        We are here to help and answer any questions you might have. Feel free to reach out to us and we'll get back to you as soon as possible.
      </p>
      <button className="rounded-md text-lg lg:text-xl bg-green-600 text-white py-3 px-8 hover:bg-green-700 duration-200 mb-10">
        Reach Out to Us &nbsp; &#8594;
      </button>
      <img 
        className="w-full lg:w-[50%] lg:hidden rounded-lg mt-10" 
        src="https://aaah0mnbncqtinas.public.blob.vercel-storage.com/TTo3AaR79M-no-background-GM2T3O0zcfiVBzXQTWEKtL3OlLSFm6.png" 
        alt="Contact Us Illustration"
      />
    </div>
  );
};

export default Contact;
