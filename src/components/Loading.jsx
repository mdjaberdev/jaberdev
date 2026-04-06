import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="w-12 h-12 border-4 border-[#FE9A00] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-500 text-sm tracking-wider">Loading...</p>
    </div>
  );
};

export default Loading;
