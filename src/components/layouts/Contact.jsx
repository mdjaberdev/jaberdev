import React, { useRef } from "react";
import Container from "../Container";
import Flex from "../Flex";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import Button from "../Button";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y315zst",
        "template_2u72gov",
        form.current,
        "y7o7ZXi1gyIaKWOLJ",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.error("FAILED...", error.text);
        },
      );
  };

  return (
    <section className="py-24 bg-[#0F172B]/95 w-full" id="contact">
      <Container className="w-full px-4 lg:w-[1140px] mx-auto">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl">
          <h3 className="text-2xl lg:text-3xl font-semibold text-white">
            Get In Touch!
          </h3>
          <p className="text-[#90A1B9] text-sm lg:text-base pt-6">
            I am currently available for freelance work or full-time
            opportunities. If you have a project that needs some creative touch,
            feel free to contact me.
          </p>
        </div>

        {/* Form + Contact Info */}
        <div className="mt-12 flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left - Form */}
          <div className="lg:w-2/3 bg-[#0F172B] p-6 rounded-lg shadow-lg">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col lg:flex-row gap-4 mb-5">
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Name :"
                  className="w-full border border-[#1E2939] p-3 text-[#90A1B9] rounded-md focus:border-[#FE9A00] outline-none"
                />
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Email :"
                  className="w-full border border-[#1E2939] p-3 text-[#90A1B9] rounded-md focus:border-[#FE9A00] outline-none"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject :"
                className="w-full border border-[#1E2939] p-3 text-[#90A1B9] rounded-md focus:border-[#FE9A00] outline-none mb-5"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message :"
                className="w-full border border-[#1E2939] p-3 text-[#90A1B9] rounded-md focus:border-[#FE9A00] outline-none"
              />
              <Button
                btnText="Send Message"
                type="submit"
                className="mt-5 w-full lg:w-auto"
              />
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="lg:w-1/3 flex flex-col gap-6 pt-6 lg:pt-0">
            <Flex className="gap-4 items-start">
              <LuPhone className="text-white text-2xl mt-1" />
              <div>
                <p className="text-white font-medium text-lg pb-1">Phone</p>
                <p className="text-[#90A1B9] text-sm">+880 1811956107</p>
              </div>
            </Flex>

            <Flex className="gap-4 items-start">
              <MdOutlineMail className="text-white text-2xl mt-1" />
              <div>
                <p className="text-white font-medium text-lg pb-1">Email</p>
                <p className="text-[#90A1B9] text-sm">mdjaber.dev@gmail.com</p>
              </div>
            </Flex>

            <Flex className="gap-4 items-start">
              <SlLocationPin className="text-white text-2xl mt-1" />
              <div>
                <p className="text-white font-medium text-lg pb-1">Location</p>
                <p className="text-[#90A1B9] text-sm">Dhaka, Bangladesh</p>
              </div>
            </Flex>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
