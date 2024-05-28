import React from "react";
import f from "../../assets/f.png";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { MdMinimize } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex py-1 px-8 space-x-7 cursor-pointer  ">
          <img src={f} className="h-4" />
          <p>
            <u>M</u>enu{" "}
          </p>
          <p>
            <u>E</u>dit
          </p>
          <p>
            {" "}
            <u>F</u>avorites{" "}
          </p>
          <p>
            {" "}
            Extr<u>a</u>s
          </p>
          <p>
            {" "}
            S<u>y</u>stem{" "}
          </p>
          <p>
            {" "}
            <u>H</u>elp{" "}
          </p>
        </div>
        <div className="flex justify-end bg-b px-2 mb-1 mr-3 py-2 space-x-4 cursor-pointer rounded-br-3xl ">
          <MdMinimize className="hover:text-blue-300 text-white  " />

          <RiCheckboxMultipleBlankLine className=" hover:text-blue-300 text-white" />
          <RxCross2 className="hover:bg-red-600  text-white rounded-br-lg " />
        </div>
      </div>
      <div className="border-solid bg-gold h-1  "></div>
    </>
  );
};

export default Nav;
