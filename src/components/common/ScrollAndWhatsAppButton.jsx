import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import { FaWhatsapp } from "react-icons/fa";

const ScrollAndWhatsAppButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalScroll > 0) {
        const progress = Math.min(
          100,
          Math.max(0, (currentScroll / totalScroll) * 100),
        );
        setScrollProgress(progress);
      }

      setIsVisible(currentScroll > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!lenis) return;

    const onLenisScroll = (e) => {
      setScrollProgress(e.progress * 100);
      setIsVisible(e.scroll > 300);
    };

    lenis.on("scroll", onLenisScroll);
    return () => lenis.off("scroll", onLenisScroll);
  }, [lenis]);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const whatsappNumber = "8801811956107";
  const message = "Hello Jaber! I visited your website and want to connect.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-center gap-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{ "--progress": `${scrollProgress}%` }}
          className="w-12 h-12 rounded-full p-[2.5px] transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl hover:shadow-[#FE9A00]/25 group focus:outline-none flex items-center justify-center cursor-pointer bg-[conic-gradient(#FE9A00_var(--progress),rgba(51,65,85,0.4)_0deg)]"
        >
          <div className="w-full h-full rounded-full bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-md flex items-center justify-center text-white transition-colors duration-300 group-hover:bg-slate-900">
            <ArrowUp className="w-5 h-5 text-slate-200 group-hover:text-[#FE9A00] transition-all duration-300 group-hover:-translate-y-0.5" />
          </div>
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] h-12 w-12 md:h-14 md:w-14 flex items-center justify-center rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 active:scale-95 group relative border border-white/10"
        title="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping duration-[1500ms] -z-10"></span>
        <span className="absolute inset-0 scale-105 rounded-full bg-[#25D366]/20 animate-pulse -z-10"></span>

        <FaWhatsapp className="text-white text-2xl md:text-3xl transition-transform duration-500 group-hover:rotate-[360px]" />

        <span className="absolute right-16 bg-white dark:bg-slate-950/90 text-slate-900 dark:text-white text-xs font-semibold px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0 border border-slate-200 dark:border-slate-800/80 shadow-2xl backdrop-blur-md tracking-wide">
          Let's Chat! 💬
        </span>
      </a>
    </div>
  );
};

export default ScrollAndWhatsAppButton;
