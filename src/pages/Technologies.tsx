import React from "react";
import { VechaiProvider, cx, Icon } from "@vechaiui/react";
import * as Tabs from "@radix-ui/react-tabs";
import { theme } from "../themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiCodeCurly } from "react-icons/bi";
import { ImStack } from "react-icons/im";
import { MdOutlineFilterFrames } from "react-icons/md";
import TechCard from "../components/TechCard";

function Technologies() {
  const languageCards = [
    {
      id: 1,
      name: "Java",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.oracle.com%2Fa%2Focom%2Fimg%2Fobic-java-cup.svg&imgrefurl=https%3A%2F%2Fwww.oracle.com%2Ftechnetwork%2Fjava%2Fjavase%2Fsystem-configurations-135212.html&tbnid=NQe8uj38BuyzrM&vet=12ahUKEwixirnW59DzAhW5nEsFHefyBtMQMygFegUIARDVAQ..i&docid=gpEJeCSKB5Op8M&w=800&h=800&q=java%20images&ved=2ahUKEwixirnW59DzAhW5nEsFHefyBtMQMygFegUIARDVAQ",
      description:
        "Java is a multi-paradigm virtual machine language that run on any machine. I use java mainly for Discord Bots and Backend",
    },
    {
      id: 2,
      name: "Javascript",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
      description:
        "Javascript is a language for the web. I use javascript for making websites and various other web apps",
    },
    {
      id: 3,
      name: "C#",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
      description:
        "Javascript is a language for the web. I use javascript for making websites and various other web apps",
    },
    {
      id: 4,
      name: "Typescript",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
      description: "Typescript is a statically typed superset of javascript.",
    },
    {
      id: 5,
      name: "Lorem ipsum.",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  consectetur adipiscing elit",
    },
    {
      id: 6,
      name: "Lorem ipsum.",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  consectetur adipiscing elit",
    },
    {
      id: 7,
      name: "Lorem ipsum.",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  consectetur adipiscing elit",
    },
  ];

  const tabs = [
    {
      value: "tab1",
      name: "Languages",
      content: <TechCard data={languageCards} />,
      icon: BiCodeCurly,
      label: "bi-code-curly",
    },
    {
      value: "tab2",
      name: "Stacks",
      content: "Stacks",
      icon: ImStack,
      label: "im-stack",
    },
    {
      value: "tab3",
      name: "Frameworks",
      content: "Frameworks",
      icon: MdOutlineFilterFrames,
      label: "md-outline-filter-frames",
    },
  ];

  return (
    <div>
      <Navbar />
      <VechaiProvider theme={theme} colorScheme="cool">
        <div
          className="dark container rounded-3xl w-full ml-10 overflow-scroll overflow-x-hidden"
          style={{
            backgroundColor: "rgba(11, 15, 26, 100)",
            height: "27rem",
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
