import React from "react";
import bg from "../assets/bg.png";
import logo from "../assets/logo.svg";
import group from "../assets/group.png";

function Header() {
  return (
    <header className="w-full overflow-x-hidden flex flex-col justify-start min-h-screen">
      <nav className="px-6 lg:px-[90px] pr-[40px] flex justify-between items-center h-[156px] bg-white w-full max-w-[1440px] mx-auto">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
        <ul className="hidden md:flex gap-10 lg:gap-[100px]">
          <li>
            <a
              href="#"
              className="text-[16px] font-[600] text-[#FA4A0C] font-[montserrat]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[16px] font-[600] text-[#252B42] font-[montserrat]"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[16px] font-[600] text-[#252B42] font-[montserrat]"
            >
              Faq
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[16px] font-[600] text-[#252B42] font-[montserrat]"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div
        className="w-full bg-cover bg-center h-[616px] flex flex-col items-center justify-center text-[#F6F6F6] gap-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col gap-3 text-center px-4">
          <p className="text-[24px] font-[700] font-[montserrat]">Food app</p>
          <h1 className="font-[poppins] text-[38px] md:text-[48px] lg:text-[58px] font-[700] max-w-5xl mx-auto">
            Why stay hungry when<br />
            you can order from Bella Onojie
          </h1>
          <p className="font-[montserrat] font-[500] text-[20px] md:text-[24px]">
            Download the bella onoje’s food app now on
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-[#FA4A0C] w-[200px] md:w-[236px] h-[60px] md:h-[68px] rounded-[30px] font-[montserrat] font-[700] text-[20px]">
            Playstore
          </button>
          <button className="bg-transparent border border-white w-[200px] md:w-[236px] h-[60px] md:h-[68px] rounded-[30px] font-[montserrat] font-[700] text-[20px]">
            App store
          </button>
        </div>
      </div>

        <img
          src={group}
          alt="Group illustration"
          className="mx-auto max-w-full h-auto absolute left-[26%] border-b-2 border-[#E4E4E4] pb-[140px] px-[160px] top-[80%]"
        />
      
    </header>
  );
}

export default Header;
