import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export const useContactForm = (serviceId, templateId, publicKey) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const userName = formData.get("user_name").trim();
    const userEmail = formData.get("user_email").trim();
    const subject = formData.get("subject").trim();
    const message = formData.get("message").trim();

    if (!userName || !userEmail || !subject || !message) {
      toast.error("Please fill out all fields properly!");
      return;
    }

    if (userName.length < 3) {
      toast.error("Name must be at least 3 characters long.");
      return;
    }

    if (message.length < 10) {
      toast.error("Message should be at least 10 characters long.");
      return;
    }

    setLoading(true);

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      () => {
        toast.success("Message sent successfully!");
        formRef.current.reset();
        setLoading(false);
      },
      (error) => {
        toast.error("Something went wrong. Please try again.");
        console.error("FAILED...", error.text);
        setLoading(false);
      },
    );
  };

  return { formRef, loading, handleSubmit };
};
