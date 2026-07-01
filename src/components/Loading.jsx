import React from "react";

const Loading = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-[#0F172B] overflow-hidden select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex gap-3 mb-6">
          {["J", "A", "B", "E", "R"].map((letter, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <span
                className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 tracking-wider animate-bounce shadow-sm filter drop-shadow-[0_5px_10px_rgba(254,154,0,0.3)]"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: "1s",
                }}
              >
                {letter}
              </span>
              <span
                className="absolute -bottom-2 w-4 h-1 bg-[#FE9A00]/40 rounded-full blur-sm scale-x-75 animate-pulse"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: "1s",
                }}
              ></span>
            </div>
          ))}
        </div>

        <div className="w-32 h-[3px] bg-slate-800 rounded-full overflow-hidden relative border border-slate-700/30 shadow-[0_0_10px_rgba(254,154,0,0.1)]">
          <div className="h-full bg-gradient-to-r from-[#FE9A00] to-amber-400 rounded-full w-full absolute top-0 left-0 -translate-x-full animate-[loading-bar_1.8s_infinite_ease-in-out]"></div>
        </div>
        <p className="text-xs text-slate-400/80 tracking-[0.3em] uppercase mt-5 font-semibold text-center animate-pulse">
          Crafting Digital <span className="text-[#FE9A00]">Experiences</span>
        </p>
      </div>
    </div>
  );
};

export default Loading;
