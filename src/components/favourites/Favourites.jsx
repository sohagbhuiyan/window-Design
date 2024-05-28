import React, { useState } from "react";
import { FaFolder, FaFolderOpen, FaStar } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFillCircleFill } from "react-icons/bs";
import rpic from "../../assets/pic.png"
const favorites = [
  { id: 1, text: "ZMMPRJSTOCK - Project Stock Report API" },
  { id: 2, text: "ZMMPOPRJ - Project PO Details Report" },
  { id: 3, text: "/UI2/FLP - SAP Fiori Launchpad" },
];
const Favourites = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };
  return (
    // <div className="flex justify-between">

 
    <div className=" ml-6  border-2 ">
      <div className="flex items-center border-2  bg-bg1  px-8 ">
        <IoMdArrowDropdown className="cursor-pointer" onClick={toggleFolder} />
        {isOpen ? (
          <FaFolderOpen className="text-yellow-500 mr-2" />
        ) : (
          <FaFolder className="text-yellow-500 mr-2" />
        )}
        <span
          className="font-medium text-blue-800 cursor-pointer"
        >
          Favorites
        </span>
      </div>

      {isOpen && (
        <ul className="px-6">
          {favorites.map((fav) => (
            <li key={fav.id} className="flex  items-center mb-1">
              <BsFillCircleFill className="  ml-9 h-1" />
              <FaStar className="text-yellow-500  h-5" />
              <span className="px-2 h-5 text-blue-800 ">{fav.text}</span>
            </li>
          ))}
        </ul>
      )}
    {/* </div> */}
    {/* <img src={rpic} alt="" /> */}
    </div>
  );
};

export default Favourites;
