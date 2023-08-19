import React from "react";
import Typed from "react-typed";

const Home = () => {
  return (
    <div className="w-[100%] h-screen flex flex-col justify-start items-center z-10">
      <h1 className="text-4xl text-orange-400 m-4 p-4 font-bold mt-[20rem]">
        Usefull Applications
      </h1>
      <div className=" w-[100%] flex justify-center items-center">
      <span className="w-[6rem] text-center text-white">Made with</span>
      <span className='w-[8rem] text-xl text-white text-start'>
        <Typed
          strings={["React", "tailwind css"]}
          typeSpeed={80}
          backSpeed={40}
          loop
        />
      </span>
      </div>
    </div>
  );
};

export default Home;
