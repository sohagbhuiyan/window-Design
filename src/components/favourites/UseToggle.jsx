import React, { useState } from "react";

const UseToggle = (initalState = false) => {
  const [isOpen, setIsOpen] = useState(initalState);
  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };
  return [isOpen, toggle];
};

export default UseToggle;
