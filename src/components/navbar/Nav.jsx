import React from "react";
import f from "../../assets/f.png";
const Nav = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex py-2 px-8 space-x-7 cursor-pointer  ">
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
        <div className="flex justify-end bg-b px-4 space-x-4 cursor-pointer ">
          <button className="hover:bg-green-400 text-2xl text-white  ">
            -
          </button>
          <button className="text-2xl hover:bg-gray-600 text-white">□</button>
          <button className="hover:bg-red-600 text-2xl text-white ">×</button>
        </div>
      </div>
      <div className="border-solid bg-gold h-1  "></div>
    </>
  );
};

export default Nav;
