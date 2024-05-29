import React from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { BsFillFloppyFill } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import dari from "../../assets/d.png";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import up from "../../assets/u.png";
import cr from "../../assets/c.png";
import p from "../../assets/p.png";
import h from "../../assets/H.png";
import hh from "../../assets/hh.png";
import gru from "../../assets/2gu.png";
import g from "../../assets/g.png";
import gd from "../../assets/gd.png";
import gdd from "../../assets/gdd.png";
import bs from "../../assets/bs.png";
import ba from "../../assets/ba.png";
import qs from "../../assets/qs.png";
import cp from "../../assets/cp.png";
import UseToggle from "../favourites/UseToggle";

const NavB2 = () => {
  const [arrowOpen, toggleArrowOpen] = UseToggle();

  return (
    <div>
      <div className=" flex ml-12 mt-1  ">
        <HiBadgeCheck className="text-3xl text-green-600 h-6 " />
        <div className="flex ml-2 border-2 cursor-pointer">
          <input className=" outline-none " />
          <BiSolidDownArrow className="h-3 mt-1" />
        </div>
        <div className="flex  ml-2 items-center space-x-2  text-gray-500 cursor-pointer">
          <MdOutlineKeyboardDoubleArrowLeft onClick={toggleArrowOpen} />
        </div>
        {arrowOpen ? (
          <MdKeyboardDoubleArrowRight
            onClick={toggleArrowOpen}
            className="cursor-pointer mt-1.5"
          />
        ) : (
          <MdOutlineKeyboardDoubleArrowLeft className="hidden mt-1.5" />
        )}
        {!arrowOpen && (
          <>
            <BsFillFloppyFill className="mt-1.5 opacity-60" />
            <img src={dari} className="h-4 ml-2 mt-1.5" />
            <div className="flex ml-2 items-center space-x-2 cursor-pointer">
              <img src={up} className="h-6" />
              <img src={cr} className="h-6" />
            </div>
            <img src={dari} className="h-4 ml-2 mt-1.5" />
            <div className="flex ml-2 items-center space-x-2 cursor-pointer">
              <img src={p} className="h-6" />
              <img src={h} className="h-5" />
              <img src={hh} className="h-5" />
            </div>
            <img src={dari} className="h-4 ml-2 mt-1.5" />
            <div className="flex ml-2 items-center space-x-2 cursor-pointer">
              <img src={gru} className="h-5" />
              <img src={g} className="h-5" />
              <img src={gd} className="h-5" />
              <img src={gdd} className="h-5" />
            </div>
            <img src={dari} className="h-4 ml-2 mt-1.5" />
            <div className="flex ml-2 items-center space-x-2 cursor-pointer">
              <img src={bs} className="h-5" />
              <img src={ba} className="h-5" />
            </div>
            <img src={dari} className="h-4 ml-2 mt-1.5" />
            <div className="flex ml-2 items-center space-x-2 cursor-pointer">
              <img src={qs} className="h-5" />
              <img src={cp} className="h-5" />
            </div>
          </>
        )}
      </div>
      <div className="border-b-2 mt-1"></div>
      <div className="  mt-1 ml-6 bg-bg border-t-2 border-x-2">
        <p className="text-2xl font-semibold py-1 px-4">
          {" "}
          <b>
            <i>SAP Easy Access</i>
          </b>
        </p>
      </div>
    </div>
  );
};

export default NavB2;
