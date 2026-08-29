import React from "react";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import Button from "../common/Button";
import { Toaster } from "react-hot-toast";
import Container from "../common/Container";
import { useContactForm } from "../common/useContactForm";

const Contact = () => {
  const { formRef, loading, handleSubmit } = useContactForm(
    "service_22n2f6a",
    "template_4dlh5cf",
    "96VcsuELGflgAzir_",
  );

  return (
    <section
      className="py-20 bg-white dark:bg-[#0F172B] w-full border-t border-slate-200 dark:border-slate-800/50 relative overflow-hidden transition-colors duration-300"
      id="contact"
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[450px] h-[450px] bg-[#FE9A00]/5 blur-[160px] rounded-full pointer-events-none"></div>

      <Container className="w-full px-4 xl:w-[1140px] mx-auto relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-[#FE9A00] text-sm font-bold tracking-wider uppercase mb-2 block">
            Contact
          </span>
          <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch!
          </h3>
          <div className="h-1 w-12 bg-[#FE9A00] mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 dark:text-[#90A1B9] text-[15px] lg:text-[16px] mt-4 leading-relaxed">
            I'm currently available for freelance and full-time opportunities.
            If you're looking for a Frontend Developer to build responsive,
            modern, and high-performance web applications, feel free to get in
            touch.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="w-full lg:w-2/3 bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800/80 p-6 md:p-8 rounded-2xl shadow-xl backdrop-blur-sm">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="w-full">
                  <input
                    type="text"
                    name="user_name"
                    required
                    minLength={3}
                    maxLength={50}
                    pattern="^[A-Za-z\s.'\-]+$"
                    title="Name should only contain letters and spaces."
                    placeholder="Name"
                    className="w-full border border-slate-300 dark:border-slate-800/80 bg-white dark:bg-slate-950/40 p-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#90A1B9]/40 rounded-xl focus:border-[#FE9A00]/60 focus:ring-1 focus:ring-[#FE9A00]/30 outline-none transition-all duration-300"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    name="user_email"
                    required
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address."
                    placeholder="Email"
                    className="w-full border border-slate-300 dark:border-slate-800/80 bg-white dark:bg-slate-950/40 p-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#90A1B9]/40 rounded-xl focus:border-[#FE9A00]/60 focus:ring-1 focus:ring-[#FE9A00]/30 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="w-full">
                <input
                  type="text"
                  name="subject"
                  required
                  minLength={5}
                  maxLength={100}
                  placeholder="Subject"
                  className="w-full border border-slate-300 dark:border-slate-800/80 bg-white dark:bg-slate-950/40 p-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#90A1B9]/40 rounded-xl focus:border-[#FE9A00]/60 focus:ring-1 focus:ring-[#FE9A00]/30 outline-none transition-all duration-300"
                />
              </div>

              <div className="w-full">
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={1000}
                  rows="5"
                  placeholder="Message"
                  className="w-full border border-slate-300 dark:border-slate-800/80 bg-white dark:bg-slate-950/40 p-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#90A1B9]/40 rounded-xl focus:border-[#FE9A00]/60 focus:ring-1 focus:ring-[#FE9A00]/30 outline-none transition-all duration-300 resize-none"
                />
              </div>

              <div className="pt-2">
                <Button
                  btnText={loading ? "Sending..." : "Send Message"}
                  type="submit"
                  disabled={loading}
                  className={`w-full lg:w-auto px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-md ${
                    loading
                      ? "opacity-50 cursor-not-allowed bg-slate-200 dark:bg-slate-800"
                      : "bg-[#FE9A00] text-white hover:bg-amber-500 hover:shadow-[0_0_20px_rgba(254,154,0,0.3)]"
                  }`}
                />
              </div>
            </form>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <div className="group flex gap-4 items-center p-5 bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800/60 rounded-2xl transition-all duration-300 hover:border-[#FE9A00]/20">
              <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700/50 flex items-center justify-center text-slate-600 dark:text-slate-400 text-xl transition-all duration-300 group-hover:bg-[#FE9A00] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(254,154,0,0.3)]">
                <LuPhone />
              </div>
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold">
                  Phone
                </p>
                <a
                  href="tel:+8801811956107"
                  className="text-slate-900 dark:text-white text-[15px] font-medium hover:text-[#FE9A00] transition-colors duration-200 mt-0.5 inline-block"
                >
                  +880 1811956107
                </a>
              </div>
            </div>

            <div className="group flex gap-4 items-center p-5 bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800/60 rounded-2xl transition-all duration-300 hover:border-[#FE9A00]/20">
              <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700/50 flex items-center justify-center text-slate-600 dark:text-slate-400 text-xl transition-all duration-300 group-hover:bg-[#FE9A00] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(254,154,0,0.3)]">
                <MdOutlineMail />
              </div>
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold">
                  Email
                </p>
                <a
                  href="mailto:mdjaber.dev@gmail.com"
                  className="text-slate-900 dark:text-white text-[15px] font-medium hover:text-[#FE9A00] transition-colors duration-200 mt-0.5 inline-block"
                >
                  mdjaber.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="group flex gap-4 items-center p-5 bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800/60 rounded-2xl transition-all duration-300 hover:border-[#FE9A00]/20">
              <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700/50 flex items-center justify-center text-slate-600 dark:text-slate-400 text-xl transition-all duration-300 group-hover:bg-[#FE9A00] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(254,154,0,0.3)]">
                <SlLocationPin />
              </div>
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold">
                  Location
                </p>
                <p className="text-slate-900 dark:text-white text-[15px] font-medium mt-0.5">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
