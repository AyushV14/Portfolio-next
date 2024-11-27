'use client';

import { useState } from "react";
import { MailIcon, CheckCircleIcon, CopyIcon, HomeIcon } from "lucide-react"; // Importing CopyIcon for the button
import Form from "@/components/Form";

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false); // State to track if the email is copied

  const handleCopyEmail = () => {
    // Copy the email to clipboard
    navigator.clipboard.writeText("vikharankarayush14@gmail.com")
      .then(() => {
        // Set isCopied to true to show the checkmark
        setIsCopied(true);
        // Reset the checkmark after 2 seconds
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustrations */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Lets Work Together.</h1>
            <p className="subtitle max-w-[400px]">Your project deserves the best. Let's work together to achieve amazing results.</p>
          </div>
          {/* illustrations */}
          <div className="hidden xl:flex w-full bg-contact_illust_light dark:bg-contact_illust_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* Info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>vikharankarayush14@gmail.com</div>
              {/* Show the "Copy" button if not copied, and the checkmark if copied */}
              {!isCopied ? (
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center text-primary border border-primary rounded px-2 py-1 text-sm"
                >
                  <CopyIcon size={16} className="" />

                </button>
              ) : (
                <CheckCircleIcon size={18} className="text-green-500" />
              )}
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Mumbai Maharashtra , India</div>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>+91-7208521535</div>
            </div>
          </div>
          <Form/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
