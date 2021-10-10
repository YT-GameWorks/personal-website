import React from "react";
import { Button, Icon } from "@vechaiui/react";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Game Glide</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2021 Game Glide —
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @GlideGame
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Button
            variant="light"
            color="primary"
            size="md"
            className="mr-4"
            leftIcon={<Icon as={AiOutlineTwitter} label="twitter" />}
          ></Button>
          <Button
            variant="light"
            color="primary"
            size="md"
            className="mr-4"
            leftIcon={<Icon as={AiOutlineGithub} label="github" />}
          ></Button>
          <Button
            variant="light"
            color="primary"
            size="md"
            className="mr-4"
            leftIcon={<Icon as={FaStackOverflow} label="stackOverflow" />}
          ></Button>
          <Button
            variant="light"
            color="primary"
            size="md"
            className="mr-4"
            leftIcon={<Icon as={AiOutlineYoutube} label="youtube" />}
          ></Button>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
