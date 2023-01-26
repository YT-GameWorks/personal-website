import React, { useEffect } from "react";
import { VechaiProvider, cx, Icon } from "@vechaiui/react";
import * as Tabs from "@radix-ui/react-tabs";
import { theme } from "../themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { tabs } from "../other/TechnologiesContent";
import CardStyles from "../styles/Card.module.css";

function Technologies() {
  useEffect(() => {
    document.title = "Game Glide | Technologies";
  });

  return (
    <div className='overflow-scroll overflow-x-hidden overflow-y-hidden'>
      <VechaiProvider theme={theme} colorScheme='cool'>
        <Navbar />
        <div className='body-font text-center w-full mb-10'>
          <h1 className='text-2xl font-medium title-font mb-4 text-white tracking-widest '>
            TECHNOLOGIES
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500'>
            Here you can find all the technologies I know and the ones in which
            I'm most experienced! Keep your eyes out! There might be a new one
            every now and then!
          </p>
        </div>
        <div
          className='dark container rounded-3xl w-auto md:w-full h-full mx-2 md:m-auto animate__animated animate__fadeIn animated_delay-2s'
          style={{
            backgroundColor: "rgba(11, 15, 26, 100)",
          }}
        >
          <div className='flex flex-wrap items-center justify-center text-center p-8 space-x-4'>
            <Tabs.Root
              className='flex flex-col items-center justify-center'
              defaultValue='tab1'
            >
              <Tabs.List
                aria-label='tabs example'
                className={cx(
                  "flex flex-row justify-start",
                  "border-b border-neutral-200 dark:border-neutral-700"
                )}
              >
                {tabs.map((tab) => (
                  <Tabs.Trigger
                    key={tab.value}
                    value={tab.value}
                    className={cx(
                      "items-center justify-center px-3 py-2 -mb-px text-sm text-center whitespace-nowrap cursor-base focus:outline-none",
                      "text-neutral-900 bg-transparent border-b-2 border-transparent",
                      "hover:border-neutral-300",
                      "selected:border-primary-500",
                      "animate__animated animate__fadeIn animated_delay-3s",
                      // dark
                      "dark:text-neutral-100",
                      "dark:hover:border-neutral-600",
                      "dark:selected:border-primary-500"
                    )}
                  >
                    <Icon
                      as={tab.icon}
                      label={tab.label}
                      className='w-4 h-4 mr-2'
                    />
                    <span>{tab.name}</span>
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
              {tabs.map((tab) => (
                <Tabs.Content
                  key={tab.value}
                  value={tab.value}
                  className={`sm:${CardStyles.cards} p-4 flex-grow-1 animate__animated animate__fadeIn animated_delay-4s'`}
                >
                  {tab.content}
                </Tabs.Content>
              ))}
            </Tabs.Root>
          </div>
        </div>
        <div className='mt-28'>
          <Footer />
        </div>
      </VechaiProvider>
    </div>
  );
}

export default Technologies;
