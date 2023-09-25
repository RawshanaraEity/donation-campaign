import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[80vh]"
        style={{ backgroundImage: "url(/public/img/bg.png)" }}
      >
        <div className="hero-overlay bg-white bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-10 text-3xl text-black lg:text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>
            
            <div className="w-60 md:w-80 lg:w-1/2 mx-auto text-black relative">
              <input
                type="text"
                placeholder="search here...."
                className="input input-bordered w-full pr-16"
              />
              <button className="btn bg-red-500 text-white border-none absolute top-0 right-0 rounded-l-none">
                Search
              </button>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
