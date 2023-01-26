import React from "react";
import Img from "next/image";
import { Icon, IconButton } from "@vechaiui/react";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";

function Footer() {
  return (
    <footer className='md:fixed md:bottom-0 md:w-full md:h-24 text-gray-400 bg-gray-900 body-font'>
      <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <a className='flex title-font font-medium items-center md:justify-start justify-center text-white'>
          <Img src='/static/Logo.svg' alt='Logo' height='32' width='32' />
          <span className='ml-3 text-xl'>Game Glide</span>
        </a>
        <p className='text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4'>
          © 2023 Game Glide —
          <a
            href='https://twitter.com/GlideGame'
            className='text-indigo-500 ml-1'
            target='_blank'
          >
            @GlideGame
          </a>
        </p>
        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <IconButton
            variant='light'
            color='primary'
            size='md'
            className='mr-4'
            onClick={(e) => {
              e.preventDefault();
              window.open("https://twitter.com/GlideGame", "_blank");
            }}
          >
            <Icon as={AiOutlineTwitter} label='twitter' className='w-4 h-4' />
          </IconButton>
          <IconButton
            variant='light'
            color='primary'
            size='md'
            className='mr-4'
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/YT-GameWorks", "_blank");
            }}
          >
            <Icon as={AiOutlineGithub} label='github' className='w-4 h-4' />
          </IconButton>
          <IconButton
            variant='light'
            color='primary'
            size='md'
            className='mr-4'
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://stackoverflow.com/users/14283093/yt-gameworks",
                "_blank"
              );
            }}
          >
            <Icon
              as={FaStackOverflow}
              label='stackOverflow'
              className='w-4 h-4'
            />
          </IconButton>
          <IconButton
            variant='light'
            color='primary'
            size='md'
            className='mr-4'
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.youtube.com/channel/UCUpFpOBQnjKgQB3xEZ9xkww",
                "_blank"
              );
            }}
          >
            <Icon as={AiOutlineYoutube} label='youtube' className='w-4 h-4' />
          </IconButton>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
