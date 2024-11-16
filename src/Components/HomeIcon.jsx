import React from 'react'
import { CiPhone } from "react-icons/ci";
import { IoChatbubbles } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";

const HomeIcon = () => {
  return (
    <div className="fixed z-[999] top-[28rem]  right-[4%]">
    <div className="bg-[#ff0505] rounded-full p-3 mt-2">
      <CiPhone className="text-2xl text-white cursor-pointer" />
    </div>
    <div className="bg-[#00b816] rounded-full p-3 mt-2">
      <FaWhatsapp className="text-2xl text-white cursor-pointer" />
    </div>
    <div className="bg-[#ff32e8] rounded-full p-3 mt-2">
      <IoChatbubbles className="text-2xl text-white cursor-pointer" />
    </div>
  </div>
  )
}

export default HomeIcon
