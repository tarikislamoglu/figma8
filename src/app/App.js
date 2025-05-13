import React from "react";

const App = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen relative">
      <img
        src="/Ellipse 1.svg"
        className="w-1/2 h-[60%] absolute bottom-0 left-0 hidden lg:block"
      />
      <img
        src="/Ellipse 2.svg"
        className="w-1/2 h-[60%] absolute top-0 right-[-100px] hidden lg:block"
      />
      <div className="h-3/5 lg:w-1/3 md:w-2/3 w-full bg-[#FFFFFF0D] z-10 shadow-xl flex flex-col rounded-lg ">
        <form className="flex flex-col space-y-5 p-10 w-full">
          <h3 className="font-semibold text-[50px] text-[#02B94BD6] lg:w-1/2 w-full text-center lg:text-start ">
            LOGIN
          </h3>
          <input
            placeholder="Username"
            className="p-2 border-1 rounded-md border-[#0000004F]  "
          />
          <input
            placeholder="Password"
            className="p-2 border-1 rounded-md  border-[#0000004F]  "
          />
          <button className="p-2 bg-[#02B94BD6] lg:w-1/2 text-[#fff] w-full rounded-[10px]">
            LOGIN
          </button>
          <div className="flex items-center w-full ">
            <div className="flex-grow h-px bg-[#101A1C] "></div>
            <span className="px-2 text-[#101A1C] font-semibold">OR</span>
            <div className="flex-grow h-px bg-[#101A1C]"></div>
          </div>
          <div className="flex space-x-10 justify-center ">
            <a href="">
              <img src="/google.png" width={25} height={25} />
            </a>
            <a href="">
              <img src="/facebook.png" width={25} height={25} />
            </a>
          </div>
        </form>
        <div className="text-[#02B94BD6] flex justify-between  px-3 w-full  ">
          <a href="">Forgot Password</a>
          <a href="">Register</a>
        </div>
      </div>
    </div>
  );
};

export default App;
