import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchCircle, IoPersonCircle } from "react-icons/io5";
import { FaCamera, FaPlus } from "react-icons/fa";
import { CiMicrophoneOn, CiBellOn, CiHeart } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { WiStars } from "react-icons/wi";

export default function Home() {
  const navigate = useNavigate();
  // const viewhandler=(linked_route)=>{
  //    navigate(`/${linked_route}`)
  // }
  return (
    <div className="overflow-hidden">
      <div className=" mx-auto justify-center text-center text-3xl ">
        <div className="font-bold text-black-600">
          <div className="flex flex-row">
            <img className="hi" src="/images/home_header1.jpeg" />
            <div className="m-0 bg-black/90 border-none p-4 flex w-full h-100 items-center text-gray-200">
              <CiBellOn />
              <CiHeart />
              <IoPersonCircle />
            </div>
          </div>
          <div className="p-3 bg-black/90 w-screen h-16 text-sm flex flex-row items-center text-gray-200">
            <IoSearchCircle className="w-9 h-9 m-1" />
            <input
              type="text"
              placeholder="Search your style"
              className="m-2 border-white bg-black rounded-3xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white/50 w-8/9 h-3/4"
            />
            <FaCamera className="m-1 ml-5 w-8 h-8" />
            <CiMicrophoneOn className="m-1 w-8 h-8" />
          </div>
          <img className="w-full h-70" src="/images/home_header_2.jpeg" />
        </div>
        <div className="justify-center bg-yellow-100/50">
          <div>
            <img className="w-full h-70" src="/images/home_body.jpeg" />
          </div>
          <div className="justify-center p-2 px-2 text-sm font-bold flex items-center">
            <button
              className="p-4 mx-4 bg-pink-500/60 rounded-full border-2 border-black flex items-center"
              onClick={() => navigate("/list")}
            >
              <FaPlus className="p-1 w-6 h-6" />
              VIEW MORE
            </button>
            <button
              className="p-4 mx-4 bg-pink-500/60 rounded-full border-2 border-black flex items-center"
              onClick={() => navigate("/style")}
            >
              <BsStars className="p-1 w-9 h-7" />
              STYLE
            </button>
          </div>
        </div>
        <div className="justify-center">
          <img className="w-full h-30" src="/images/home_footer.jpeg" />
        </div>
      </div>
    </div>
  );
}
