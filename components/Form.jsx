'use client';

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { useState } from "react";

const Form = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "92f72487-d659-4d4c-bb94-ec0e95381349");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={onSubmit}>
      <div className="relative flex items-center">
        <Input type="name" id="name" name="name" placeholder="Name" required />
        <User className="absolute right-6" size={20} />
      </div>

      <div className="relative flex items-center">
        <Input type="email" id="email" name="email" placeholder="Email" required />
        <MailIcon className="absolute right-6" size={20} />
      </div>

      <div className="relative flex items-center">
        <Textarea name="message" placeholder="Type your message here..." required />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>

      <Button className="flex items-center max-w-[166px]">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>

      <span>{result}</span>
    </form>
  );
};

export default Form;
