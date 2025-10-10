"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { LinkedinIcon, TwitterIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-16 rounded-2xl bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-900/30 dark:via-green-900/30 dark:to-teal-900/30 m-2 sm:m-10 flex flex-col items-center text-dark dark:text-light">
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Exclusive Deals | New Arrivals | Golf Tips
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Subscribe to get exclusive deals on premium golf equipment and stay updated on new arrivals. Join our community of golf enthusiasts!
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-white dark:bg-dark/50 p-1 sm:p-2 rounded mx04"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent pl-2 sm:pl-0 text-dark dark:text-light focus:border-dark dark:focus:border-light focus:ring-0 border-0 border-b border-dark/20 dark:border-light/20 mr-2 pb-1"
        />

        <input
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white cursor-pointer font-medium rounded px-3 sm:px-5 py-1 transition-colors"
        />
      </form>
      <div className="flex items-center mt-8">
        <a
          href="https://linkedin.com"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Follow us on LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="https://x.com"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Follow us on X"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>

      <div className="w-full  mt-16 md:mt-24 relative font-medium border-t border-solid border-dark/20 dark:border-light/20 py-6 px-8 flex  flex-col md:flex-row items-center justify-center">
        <span className="text-center">
          &copy;2025 GolfShop. All rights reserved. | Your Premier Golf Equipment Destination
        </span>
      </div>
    </footer>
  );
};

export default Footer;
