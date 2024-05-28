import React, { useState } from "react";
import { FaFolder, FaFolderOpen, FaStar } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { BsFillCircleFill } from "react-icons/bs";
import rpic from "../../assets/pic.png";
import UseToggle from "./UseToggle";
const sapmenu = [
  { id: 1, text: "Connector for Multi-Bank Connectivity" },
  { id: 2, text: "Office" },
  { id: 3, text: "Cross-Application Components" },
  { id: 4, text: "Logistics" },
  { id: 5, text: "Accounting" },
  { id: 6, text: "Human Resource" },
  { id: 7, text: "Information System" },
  { id: 8, text: "Tools" },
  { id: 9, text: "WebClient UI Framework" },
];

const favorites = [
  { id: 1, text: "ZMMPRJSTOCK - Project Stock Report API" },
  { id: 2, text: "ZMMPOPRJ - Project PO Details Report" },
  { id: 3, text: "/UI2/FLP - SAP Fiori Launchpad" },
];
const Favourites = () => {
  const [isFavoritesOpen, toggleFavorites] = UseToggle();
  const [isSapMenuOpen, toggleSapMenuOpen] = UseToggle();

  return (
    <div className="flex justify-between">
      <div className=" ml-6 w-3/4 ">
        <div className="flex items-center border-2  bg-bg1  px-9 ">
          <IoMdArrowDropdown
            className="cursor-pointer"
            onClick={toggleFavorites}
          />
          {isFavoritesOpen ? (
            <FaFolderOpen className="text-yellow-500 mr-2" />
          ) : (
            <FaFolder className="text-yellow-500 mr-2" />
          )}
          <span className="font-medium text-sky-600 cursor-pointer">
            Favorites
          </span>
        </div>

        {isFavoritesOpen && (
          <ul className="px-6 border-2">
            {favorites.map((fav) => (
              <li key={fav.id} className="flex  items-center mb-1">
                <BsFillCircleFill className="  ml-9 h-1" />
                <FaStar className="text-yellow-500  h-5" />
                <span className="px-2 h-5 text-sky-600 font-medium">{fav.text}</span>
              </li>
            ))}
          </ul>
        )}
        <div className=" border-2">
          <div className="flex items-center border-2  bg-bg1  px-9">
            <IoMdArrowDropdown
              className="cursor-pointer "
              onClick={toggleSapMenuOpen}
            />
            {isSapMenuOpen ? (
              <FaFolderOpen className="text-yellow-500  mr-2" />
            ) : (
              <FaFolder className="text-yellow-500 mr-2" />
            )}
            <span className="font-medium cursor-pointer">SAP Menu</span>
          </div>
          {isSapMenuOpen && (
            <ul className="border-2 ">
              {sapmenu.map((sap) => (
                <li className="flex ml-14 items-center px-2 cursor-pointer">
                  <IoMdArrowDropright />{" "}
                  <FaFolder className="text-yellow-500 " />
                  <span className="px-2 font-medium">{sap.text}</span>{" "}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <img src={rpic} alt="" className=" w-full" />
    </div>
  );
};

export default Favourites;
