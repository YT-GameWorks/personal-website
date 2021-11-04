import React from "react";
import { VechaiProvider, cx, Icon } from "@vechaiui/react";
import * as Tabs from "@radix-ui/react-tabs";
import { theme } from "../themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { tabs } from "../other/Technologies";

function Technologies() {
  return (
    <div
      className="overflow-scroll overflow-x-hidden overflow-y-hidden"
      style={{ backgroundColor: "#111827" }}
    >
      <Navbar />
      <VechaiProvider theme={theme} colorScheme="cool">
        <div
          className="dark container rounded-3xl w-full h-full ml-10"
          style={{
            backgroundColor: "rgba(11, 15, 26, 100)",
          }}
        >
          <div className="flex flex-wrap items-center justify-center text-center p-8 space-x-4">
            <Tabs.Root
              className="flex flex-col items-center justify-center"
              defaultValue="tab1"
            >
              <Tabs.List
                aria-label="tabs example"
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
                      "flex items-center justify-center px-3 py-2 -mb-px text-sm text-center whitespace-nowrap cursor-base focus:outline-none",
                      "text-neutral-900 bg-transparent border-b-2 border-transparent",
                      "hover:border-neutral-300",
                      "selected:border-primary-500",
                      // dark
                      "dark:text-neutral-100",
                      "dark:hover:border-neutral-600",
                      "dark:selected:border-primary-500"
                    )}
                  >
                    <Icon
                      as={tab.icon}
                      label={tab.label}
                      className="w-4 h-4 mr-2"
                    />
                    <span>{tab.name}</span>
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
              {tabs.map((tab) => (
                <Tabs.Content
                  key={tab.value}
                  value={tab.value}
                  className="p-4 flex-grow-1"
                >
                  {tab.content}
                </Tabs.Content>
              ))}
            </Tabs.Root>
          </div>
        </div>
      </VechaiProvider>
      <Footer />
    </div>
  );
}

export default Technologies;
