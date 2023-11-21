import React from "react";
import { HiArrowDownRight } from "react-icons/hi2";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[rgb(250,249,249)] md:px-10 overflow-y-scroll no-scrollbar">

      <div className="max-w-[1000px] fixed px-8 py-20 mt-12 flex flex-col justify-top h-full">

        <p className="text-[#b1bbbcf7] font-medium ">Revolutionize Yours</p>
        <h1 className="text-4xl sm:text-5xl font-medium text-[#121313]">
          Creative Projects with <br /> the Ultimate AI-powered <br />Pattern
        </h1>

        <div className="">
          <Link to="" smooth={true} duration={500} delay={300} className="flex flex-row md:mt-[-2.25rem] md:ml-[10.75rem] justify-left items-center max-w-[630px]">
            <button className="text-white group md:border-2 md::mt-3 mt-2 px-3 md:py-1 flex items-center bg-black hover:text-[#eff3f3bc] font-medium rounded-full duration-700  max-w-[630px] z-10">
              START GENERATING
            </button>
          </Link >
          <p className="text-[#b1bbbcf7] text-sm font-medium  md:mt-[-3.50rem] md:ml-[23.25rem]  py-4 max-w-[630px]">
            The Next generation <br /> <span className="text-black">Production</span> for Designers
          </p>
          <div className="flex justify-center items-center mr-8 ">
            <div className="flex flex-row md:h-128 md:mr-20 h-[31rem] ">
               
               {/* First image */}
              <img
                src="/assets/first.jpg"
                alt="First Image"
                className=" relative my-2 mx-2 w-full md:w-auto "
              />
              <span className="absolute mt-3 ml-[1rem] bg-transparent-500 text-white rounded-full border-2 border-white py-2 px-4 text-xs font-bold">
                01
              </span>
              <p className="absolute mt-[16.5rem] ml-[1rem] text-center text-white font-small text-2xl  bg-transparent-500 p-2">
                Learn from best mentors
              </p>
              <Link to="" smooth={true} className="absolute justify-left mt-[20rem] ml-[1.5rem] items-center max-w-[630px]">
                <button className="text-white group px-5 py-1 flex items-center border-2 bg-gray-400 border-white font-medium rounded-full z-10">
                  START LEARNING<HiArrowDownRight className=" ml-2 mt-1" />
                </button>
              </Link >
               
               {/* Second image */}
              <img
                src="/assets/second.jpg"
                alt="Second Image"
                className="hidden md:block relative my-2 mx-2 md:w-auto"
              />
              <span className="absolute mt-3 ml-[22rem] bg-transparent-500 text-white rounded-full border-2 border-white py-2 px-4 text-xs font-bold">
                02
              </span>
              <a href="#" className="absolute mt-[12rem] ml-[22rem] text-left border-b-[1px] w-[300px] text-white font-small text-x bg-transparent-500 p-1">
                Free Edit <HiArrowDownRight className="absolute ml-[16.5rem] text-small mt-[-1.5rem]" />
              </a>
              <a href="#" className="absolute mt-[15rem] ml-[22rem] text-left border-b-[1px] w-[300px] text-white font-small text-x bg-transparent-500 p-1">
                Interactive <HiArrowDownRight className="absolute ml-[16.5rem] text-small mt-[-1.5rem]" />
              </a>
              <a href="#" className="absolute mt-[18rem] ml-[22rem] text-left border-b-[1px] w-[300px] text-white font-small text-x bg-transparent-500 p-1">
                Easy Interface <HiArrowDownRight className="absolute ml-[16.5rem] text-small mt-[-1.5rem]" />
              </a>
              <a href="#" className="absolute mt-[21rem] ml-[22rem] text-left border-b-[1px] w-[300px] text-white font-small text-x bg-transparent-500 p-1">
                Compare to other <HiArrowDownRight className="absolute ml-[16.5rem] text-small mt-[-1.5rem]" />
              </a>
               {/* Third image */}
              <img
                src="/assets/third.jpg"
                alt="Third Image"
                className="hidden md:block realtive my-2 mx-2 md:w-auto"
              />
              <span className="absolute mt-3 ml-[43rem] bg-transparent-500 text-white rounded-full border-2 border-white py-2 px-4 text-xs font-bold">
                03
              </span>
              <p className="absolute mt-[17.5rem] ml-[44rem] text-center text-white font-medium text-7xl  bg-transparent-500 p-2">
                +20K
              </p>
              <p className="absolute mt-[18.5rem] ml-[57rem] text-left text-white font-normal text-2xl  bg-transparent-500  whitespace-nowrap">
                Glass pattern generated this <br /> week in the first release <HiOutlineChevronDoubleDown className="absolute ml-[21rem] text-small mt-[-3.5rem]" />
              </p>
            </div>
          </div>
        </div>
        <div className="" />
      </div>

    </div>

  );
}

export default Home;