import React from "react";

const Button = ({children}) => {
  return (
   
      <button className="bg-blue-950 text-white p-2 w-32 rounded-3xl">
       {children}
      </button>
   
  );
};

export default Button;
