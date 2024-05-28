import React, { useState } from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

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
const SapMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="pl-6">
      <div className="flex items-center border-2  bg-bg1  px-9">
        <IoMdArrowDropdown className="cursor-pointer " onClick={toggleBar} />
        {isOpen ? (
          <FaFolderOpen className="text-yellow-500  mr-2" />
        ) : (
          <FaFolder className="text-yellow-500 mr-2" />
        )}
        <span className="font-medium cursor-pointer" >SAP Menu</span>
      </div>
      {isOpen && (
        <ul className="border-2 ">{sapmenu.map(sap=>(
            <li className="flex ml-14 items-center px-2 cursor-pointer">
                < IoMdArrowDropright /> <FaFolder className="text-yellow-500 " />
              <span className="px-2 font-medium">{sap.text}
                </span>  </li>
        ))
            
            }

        </ul>
      )}
    </div>
  );
};

export default SapMenu;
