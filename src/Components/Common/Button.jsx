import React from "react";

const Button = ({children}) => {
  return (
   
      <button className="bg-[#f83c86] hover:bg-[#f83c86] text-white p-2 w-32 rounded-3xl">
       {children}
      </button>
   
  );
};

export default Button;
