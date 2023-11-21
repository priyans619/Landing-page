import React, { useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import { FaBars, FaTimes,} from 'react-icons/fa';
import { Link } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (

    <div className="fixed md:mr-[17.25rem] md:mt-2 right-0 h-[120px] flex flex-row justify-between items-end font-medium md:px-20 bg-[rgb(250,249,249)] text-gray-300 border-[#1b1b1b] z-20">
      
      <a href="#" className="fixed md:mb-[4rem] md:ml-[-53rem] top-1 left-8 lg:ml-8 text-black font-bold text-2xl bg-transparent-500 p-1  ">
        AlPatrn
      </a>

      {/* Menu */}
      <ul className="mr-5">
        <li className="hover:text-[#090a0af7] hover:scale-110 duration-700"><Link to="" smooth={true} duration={500}>Home page</Link></li>
        <li className="hover:text-[#090a0af7] hover:scale-110 duration-700"><Link to="" smooth={true} duration={500}>Generator</Link></li>
        <li className="hover:text-[#090a0af7] hover:scale-110 duration-700"><Link to="" smooth={true} duration={500}>Pricing-plan</Link></li>
        <li className="hover:text-[#090a0af7] hover:scale-110 duration-700"><Link to="" smooth={true} duration={500}>Blog - News</Link></li>

      </ul>
      <ul className=" ml-10">
        <li className="hover:text-[#090a0af7] hover:scale-110 duration-700"><Link to="" smooth={true} duration={500}>About us</Link></li>
        <li className="hover:text-[#090a0af7] hover:scale-110 duration-700"><Link to="" smooth={true} duration={500}>Features</Link></li>
        <li className="hover:text-[#090a0af7] hover:scale-110 duration-700"><Link to="" smooth={true} duration={500}>Collection-2023</Link></li>
        <li className="hover:text-[#090a0af7] hover:scale-110 duration-700"><Link to="" smooth={true} duration={500}>Careers</Link></li>
      </ul>

      <div className='fixed mb-[4.25rem] ml-[26.25rem] '>
        <Link to="" smooth={true} duration={500} delay={300} className=" ml-5 justify-left items-center max-w-[630px]">
          <button className="text-black group border-8 px-5 py-1 flex items-center bg-white font-medium rounded-full z-10">
            Menu <AiFillCaretDown className="ml-2 mt-1" />
          </button>
        </Link >
      </div>




      {/* Hamburger classis Button */}
      <div onClick={handleClick} className="md:hidden  mb-20 mr-6 z-10 cursor-pointe text-gray-500
           duration-700 text-[24px]">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu for smaller screen so the navbar will be hidden and popup menu wil come,after responsive hamburger button will  be used*/}
      {/* <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-black opacity-95 flex flex-col justify-center items-center gap-y-6 text-2xl"}>
        <li className="hover:text-[#858282f7] hover:scale-110 duration-700"><Link onClick={handleClick} to="" smooth={true} duration={500}>Home Page</Link></li>
        <li className="hover:text-[#858282f7] hover:scale-110 duration-700"><Link onClick={handleClick} to="" smooth={true} duration={500}>Generator</Link></li>
        <li className="hover:text-[#858282f7] hover:scale-110 duration-700"><Link onClick={handleClick} to="" smooth={true} duration={500}>Pricing-Plan</Link></li>
        <li className="hover:text-[#858282f7] hover:scale-110 duration-700"><Link onClick={handleClick} to="" smooth={true} duration={500}>Blog-News</Link></li>
        <li className="hover:text-[#858282f7] hover:scale-110 duration-700"><Link onClick={handleClick} to="" smooth={true} duration={500}>About-Us</Link></li>
        <li className="hover:text-[#858282f7] hover:scale-110 duration-700"><Link onClick={handleClick} to="" smooth={true} duration={500}>Features</Link></li>
        <li className="hover:text-[#858282f7] hover:scale-110 duration-700"><Link onClick={handleClick} to="" smooth={true} duration={500}>Collection-2023</Link></li>
        <li className="hover:text-[#858282f7] hover:scale-110 duration-700"><Link onClick={handleClick} to="" smooth={true} duration={500}>Careers</Link></li>
      </ul> */}

    </div>

  );
}

export default Navbar;