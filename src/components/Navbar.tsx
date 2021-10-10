import React from "react";
import { Button, Icon, cx } from "@vechaiui/react";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineProject,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineYoutube,
  AiOutlineWechat,
} from "react-icons/ai";
import { ImStack } from "react-icons/im";
import { FaStackOverflow } from "react-icons/fa";

function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl underline">Game Glide</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Button
            variant="ghost"
            color="secondary"
            leftIcon={<Icon as={AiOutlineHome} label="home" className="mr-1" />}
          >
            Home
          </Button>
          <Button
            variant="ghost"
            color="secondary"
            leftIcon={
              <Icon as={AiOutlinePhone} label="contact" className="mr-1" />
            }
          >
            Contact
          </Button>
          <Button
            variant="ghost"
            color="secondary"
            leftIcon={
              <Icon as={AiOutlineProject} label="projects" className="mr-1" />
            }
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            color="secondary"
            leftIcon={
              <Icon as={ImStack} label="technologies" className="mr-1" />
            }
          >
            Technologies
          </Button>
          <Tooltip.Root delayDuration={0}>
            <Tooltip.Trigger>
              <Button
                variant="ghost"
                color="secondary"
                leftIcon={
                  <Icon as={AiOutlineWechat} label="blogs" className="mr-1" />
                }
                disabled
              >
                Blogs
              </Button>
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
      </div>
    </header>
  );
}

export default Navbar;
