import Img from "next/image";
import Logo from "../public/Logo.svg";
import React from "react";
import { Button as IconButton, Icon, cx } from "@vechaiui/react";
import { useRouter } from "next/router";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineYoutube,
  AiOutlineWechat,
} from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";
import { pages } from "../other/NavbarContent";
import "animate.css";

function Navbar() {
  const Router = useRouter();

  const LinkToPage = (e, href) => {
    e.preventDefault();
    Router.push(href);
  };

  const renderNavButtons = pages.map((page) => {
    return (
      <li key={page.id}>
        <IconButton
          variant="ghost"
          color="secondary"
          leftIcon={<Icon as={page.icon} label={page.name} className="mr-1" />}
          onClick={(e) => LinkToPage(e, page.href)}
        >
          {page.name}
        </IconButton>
      </li>
    );
  });

  return (
    <header className="text-gray-400 bg-gray-900 body-font animate__animated animate__fadeInDownBig">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Img src={Logo} alt="Logo" height="64" width="64" />
          <span className="ml-3 text-xl underline">Game Glide</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <ul className="flex flex-row">{renderNavButtons}</ul>
          <Tooltip.Root delayDuration={0}>
            <Tooltip.Trigger>
              <IconButton
                variant="ghost"
                color="secondary"
                leftIcon={
                  <Icon as={AiOutlineWechat} label="blogs" className="mr-1" />
                }
                disabled
              >
                Blogs
              </IconButton>
            </Tooltip.Trigger>
            <Tooltip.Content
              sideOffset={5}
              className={cx(
                "px-2 py-1.5 text-sm leading-4 font-normal shadow-sm rounded-md pointer-events-none break-words",
                "border border-neutral-200 bg-white text-neutral-900",
                "dark:bg-neutral-700 dark:border-neutral-600 dark:text-neutral-100"
              )}
            >
              Coming Soon!
            </Tooltip.Content>
          </Tooltip.Root>
        </nav>
        <IconButton
          variant="light"
          color="primary"
          size="md"
          className="mr-4"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://twitter.com/GlideGame";
          }}
        >
          <Icon as={AiOutlineTwitter} label="twitter" className="w-4 h-4" />
        </IconButton>
        <IconButton
          variant="light"
          color="primary"
          size="md"
          className="mr-4"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://github.com/YT-GameWorks";
          }}
        >
          <Icon as={AiOutlineGithub} label="github" className="w-4 h-4" />
        </IconButton>
        <IconButton
          variant="light"
          color="primary"
          size="md"
          className="mr-4"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://stackoverflow.com/users/14283093/yt-gameworks";
          }}
        >
          <Icon
            as={FaStackOverflow}
            label="stackOverflow"
            className="w-4 h-4"
          />
        </IconButton>
        <IconButton
          variant="light"
          color="primary"
          size="md"
          className="mr-4"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://www.youtube.com/channel/UCUpFpOBQnjKgQB3xEZ9xkww";
          }}
        >
          <Icon as={AiOutlineYoutube} label="youtube" className="w-4 h-4" />
        </IconButton>
      </div>
    </header>
  );
}

export default Navbar;
