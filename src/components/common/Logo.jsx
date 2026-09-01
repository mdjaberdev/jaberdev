import React from "react";

const Logo = () => {
  return (
    <h3 className="group relative inline-block text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white uppercase tracking-wider transition-colors duration-300 cursor-pointer">
      Jab
      <span className="inline-block text-[#FE9A00] transition-transform duration-500 ease-out group-hover:rotate-360 animate-bounce">
        e
      </span>
      r
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#FE9A00] transition-all duration-300 ease-out group-hover:w-full rounded-full" />
    </h3>
  );
};

export default Logo;
