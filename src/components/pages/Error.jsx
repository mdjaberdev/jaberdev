import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiArrowLeft } from "react-icons/fi";

const Error = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0B0F19] text-white overflow-hidden px-4">
      {/* Background  */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Ambient Glowing Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FE9A00]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-xl w-full text-center">
        {/* Large 404  */}
        <h1 className="text-8xl sm:text-9xl font-black tracking-widest text-white relative inline-block">
          4<span className="text-[#FE9A00] inline-block animate-bounce">0</span>
          4
        </h1>

        {/* Badge  */}
        <div className="mt-4">
          <span className="text-[#FE9A00] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase px-4 py-1.5 bg-[#FE9A00]/10 border border-[#FE9A00]/20 rounded-full inline-block">
            Page Not Found
          </span>
        </div>

        {/* Text Message */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-6 tracking-tight">
          Oops! You've drifted into space.
        </h2>
        <p className="text-slate-400 mt-3 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved. Let's
          get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#FE9A00] hover:bg-amber-600 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#FE9A00]/20 hover:scale-105 active:scale-95"
          >
            <FiHome className="text-lg" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 border border-slate-800 hover:border-[#FE9A00] text-slate-300 hover:text-white font-bold rounded-xl bg-slate-900/60 hover:bg-[#FE9A00]/10 transition-all duration-300"
          >
            <FiArrowLeft className="text-lg" />
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default Error;
