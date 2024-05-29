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

        <div className="bg-[url(./assets/bg1.png)] h-9 px-5 bg-no-repeat">
          <div className="flex justify-end px-2.5 py-1 space-x-1.5 cursor-pointer ">
            <MdMinimize className="hover:text-blue-900 text-white " />

            <RiCheckboxMultipleBlankLine className=" hover:text-blue-300 text-white" />
            <RxCross2 className="hover:bg-red-600  text-white " />
          </div>
        </div>
      </div>
      <div className="border-solid bg-gold h-1  "></div>
    </>
  );
};

export default Nav;
