import React from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import per from "../../assets/per.png";
import dari from "../../assets/d.png";
import file from "../../assets/file.png";
import box from "../../assets/box.png";
import tree from "../../assets/tree.png";
import strp from "../../assets/strp.png";
import strd from "../../assets/strd.png";
import pen from "../../assets/pen.png";
import dualcon from "../../assets/dualcon.png";
import doc from "../../assets/doc.png";
const NavB3 = () => {
  return (
    <div className="flex items-center bg-bg2 ml-6  border-l-2 py-1 px-4 space-x-2">
      <img src={per} alt="" className="h-5" />
      <img src={file} alt="" className="h-4" />
      <img src={dari} className="h-4 ml-2 mt-1.5" />
      <img src={box} alt="" className="h-5" />
      <img src={dari} className="h-4 ml-2 mt-1.5" />
      <img src={tree} alt="" className="h-4" />
      <p>Other menu</p>
      <img src={dari} className="h-4 ml-2 mt-1.5" />
      <img src={strp} alt="" className="h-5" />
      <img src={strd} alt="" className="h-5" />
      <img src={pen} alt="" className="h-4" />.
      <BiSolidDownArrow className="h-3" />
      <BiSolidUpArrow className="h-3" />
      <img src={dari} className="h-4" />
      <img src={per} alt="" className="h-5" />
      <p>Create role</p>
      <img src={dari} className="h-4 ml-2 mt-1.5" />
      <img src={dualcon} alt="" className="h-5" />
      <p className="opacity-40">Assign users</p>
      <img src={doc} alt="" className="h-5" />
      <p className="opacity-40">Documentation</p>
    </div>
  );
};

export default NavB3;
