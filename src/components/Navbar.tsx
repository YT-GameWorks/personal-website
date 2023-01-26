import Img from "next/image";
import React from "react";
import { Button, Icon, cx, IconButton, Divider } from "@vechaiui/react";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineYoutube,
  AiOutlineWechat,
} from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { FaStackOverflow } from "react-icons/fa";
import { pages } from "../other/NavbarContent";
import "animate.css";

function Navbar() {
  const Router = useRouter();

  const LinkToPage = (e, href) => {
    e.preventDefault();
    Router.push(href);
  };

  const renderBurgerMenuButtons = pages.map((page) => {
    return (
      <Menu.Item>
        <button
          className={cx(
            "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none z-dropdown"
          )}
          onClick={(e) => {
            LinkToPage(e, page.href);
          }}
        >
          <Icon
            as={page.icon}
            label='icon'
            className={cx("w-4 h-4 mr-2 text-neutral-500")}
          />
          <span className='flex-1 mr-2'>{page.name}</span>
        </button>
      </Menu.Item>
    );
  });

  const renderMobileBurgerMenu = () => {
    return (
      <div className='flex flex-wrap w-full space-x-4'>
        <Menu as='div' className='relative inline-block'>
          <Menu.Button as={IconButton} variant='solid'>
            <GoThreeBars />
          </Menu.Button>
          <Transition
            as={React.Fragment}
            enter='transition ease-in-out duration-150'
            enterFrom='transform opacity-0 scale-90'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-out duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-90'
          >
            <Menu.Items
              className={cx(
                "absolute right-5 z-dropdown w-56 min-w-max mt-2 origin-top-left rounded-md shadow-sm outline-none",
                "bg-white border border-gray-200",
                "dark:bg-neutral-800 dark:border-gray-700"
              )}
            >
              <div className='px-1 py-1'>{renderBurgerMenuButtons}</div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    );
  };

  const renderNavButtons = pages.map((page) => {
    return (
      <li key={page.id}>
        <Button
          variant='ghost'
          color='secondary'
          leftIcon={<Icon as={page.icon} label={page.name} className='mr-1' />}
          onClick={(e) => LinkToPage(e, page.href)}
        >
          {page.name}
        </Button>
      </li>
    );
  });

  return (
    <header className='text-gray-400 bg-gray-900 body-font animate__animated animate__fadeInDownBig'>
      <div className='container flex flex-wrap p-5 flex-row items-start md:items-center'>
        <a className='flex title-font font-medium items-center text-white mb-4 sm:mb-0'>
          <Img src='/static/Logo.svg' alt='Logo' height='64' width='64' />
          <span className='ml-3 text-xl underline'>Game Glide</span>
        </a>
        <div className='items-end ml-auto py-3 z-dropdown md:hidden'>
          {renderMobileBurgerMenu()}
        </div>
        <nav className='hidden flex-nowrap md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 md:flex md:flex-wrap md:items-end md:text-base md:justify-center'>
          <ul className='flex flex-row'>{renderNavButtons}</ul>
          <Tooltip.Root delayDuration={0.5}>
            <Tooltip.Trigger>
              <Button
                variant='ghost'
                color='secondary'
                leftIcon={
                  <Icon as={AiOutlineWechat} label='blogs' className='mr-1' />
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
          <div className='mr-auto invisible'>spacer</div>
          <IconButton
            variant='light'
            color='primary'
            size='md'
            className='mr-4'
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://twitter.com/GlideGame";
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
              window.location.href = "https://github.com/YT-GameWorks";
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
              window.location.href =
                "https://stackoverflow.com/users/14283093/yt-gameworks";
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
            className=''
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.youtube.com/channel/UCUpFpOBQnjKgQB3xEZ9xkww";
            }}
          >
            <Icon as={AiOutlineYoutube} label='youtube' className='w-4 h-4' />
          </IconButton>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
