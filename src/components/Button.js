import React from "react";

function Button({ text, fad, type }) {
  return (
    <button
      className={`bg-black p-[0.8rem] text-[0.8rem] lg:text-[1rem] lg:p-[1rem] rounded-md text-white ${fad}`}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
