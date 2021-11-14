import { BiCodeCurly } from "react-icons/bi";
import { ImStack } from "react-icons/im";
import { MdOutlineFilterFrames } from "react-icons/md";
import TechCard from "../components/TechCard";

export const languageCards = [
  {
    id: 1,
    name: "Java",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.oracle.com%2Fa%2Focom%2Fimg%2Fobic-java-cup.svg&imgrefurl=https%3A%2F%2Fwww.oracle.com%2Ftechnetwork%2Fjava%2Fjavase%2Fsystem-configurations-135212.html&tbnid=NQe8uj38BuyzrM&vet=12ahUKEwixirnW59DzAhW5nEsFHefyBtMQMygFegUIARDVAQ..i&docid=gpEJeCSKB5Op8M&w=800&h=800&q=java%20images&ved=2ahUKEwixirnW59DzAhW5nEsFHefyBtMQMygFegUIARDVAQ",
    description:
      "Java is a type safe compiled language that I use for Discord Bots and Backends.",
  },
  {
    id: 2,
    name: "Javascript",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
    description:
      "Javascript is a dynamic language that I use for functionality on the web.",
  },
  {
    id: 3,
    name: "C#",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
    description:
      "C# (pronounced C-Sharp) is very similar to java but runs on CLR and I use it for game development.",
  },
  {
    id: 4,
    name: "Typescript",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
    description:
      "Typescript is a statically typed superset of javascript that I prefer over vanilla js.",
  },
  {
    id: 5,
    name: "Rust",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
    description:
      "Rust is a fast, memory-safe and friendly alternative to C++ and I use it for software development.",
  },
  {
    id: 6,
    name: "C++.",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
    description:
      "C++ is a widely used systems language and I use it for software development.",
  },
  {
    id: 7,
    name: "Go",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
    description:
      "Go is a new language from google and I use it for backend programming",
  },
];

export const StackCards = [
  {
    id: 1,
    name: "MERN",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.oracle.com%2Fa%2Focom%2Fimg%2Fobic-java-cup.svg&imgrefurl=https%3A%2F%2Fwww.oracle.com%2Ftechnetwork%2Fjava%2Fjavase%2Fsystem-configurations-135212.html&tbnid=NQe8uj38BuyzrM&vet=12ahUKEwixirnW59DzAhW5nEsFHefyBtMQMygFegUIARDVAQ..i&docid=gpEJeCSKB5Op8M&w=800&h=800&q=java%20images&ved=2ahUKEwixirnW59DzAhW5nEsFHefyBtMQMygFegUIARDVAQ",
    description:
      "MERN consists of MongoDB, Express, React, Node. I use it for Full-Stack apps and it is my main stack.",
  },
  {
    id: 2,
    name: "MEAN",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
    description:
      "MEAN consists of MongoDB, Express, Angular, Node. I don't use it as much but I have experience using it.",
  },
  {
    id: 3,
    name: "MEVN",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
    description:
      "MEVN consists of MongoDB, Express, Vue, Node. It is my least preferred stack and I also have the least experience in it.",
  },
  {
    id: 4,
    name: "MENTN",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
    description:
      "MENTN stack consists of MongoDB, Express, Next.js, TailwindCSS, Node. It is my preferred stack when making static websites.",
  },
];

export const FrameworkCards = [
  {
    id: 1,
    name: "Next.js",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.oracle.com%2Fa%2Focom%2Fimg%2Fobic-java-cup.svg&imgrefurl=https%3A%2F%2Fwww.oracle.com%2Ftechnetwork%2Fjava%2Fjavase%2Fsystem-configurations-135212.html&tbnid=NQe8uj38BuyzrM&vet=12ahUKEwixirnW59DzAhW5nEsFHefyBtMQMygFegUIARDVAQ..i&docid=gpEJeCSKB5Op8M&w=800&h=800&q=java%20images&ved=2ahUKEwixirnW59DzAhW5nEsFHefyBtMQMygFegUIARDVAQ",
    description:
      "Next.js is a react framework for SEO static websites. I use it when making static sites including this one!",
  },
  {
    id: 2,
    name: "Express",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
    description:
      "Express is a fast and opinionated backend framework. It is my choice for backend when making full-stack apps.",
  },
  {
    id: 3,
    name: "React",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
    description:
      "React is a component based UI library from Facebook that is my primary tool when making FrontEnds.",
  },
  {
    id: 4,
    name: "Angular",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
    description:
      "Angular is a framework from google for building websites. I don't use it as much because of it's bulk however.",
  },
  {
    id: 5,
    name: "Vue",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
    description:
      "Vue is a open-source component based UI library. I don't use it at all because of unfamiliarity.",
  },
  {
    id: 6,
    name: "Discord.js",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
    description:
      "My discord framework of choice when making Discord bots in javascript or typescript because It is fast and easy to use!",
  },
  {
    id: 7,
    name: "Javacord",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
    description:
      "I always use JavaCord when making Discord bots in java as it is multi-threaded, fast and very easy to use.",
  },
  {
    id: 8,
    name: "Svelte",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F2048px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&tbnid=nOPaJS0cYJ8KRM&vet=12ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ..i&docid=GB1wmVpYYA5T0M&w=2048&h=2048&q=javascript%20images&ved=2ahUKEwjB7vGJ6NDzAhWNXn0KHTsBBB4QMygAegUIARCwAQ",
    description: (
      <p>
        Svelte is a new UI <b>compiler</b> that is gaining popularity. I'm very
        new to it and thus don't use it as much.
      </p>
    ),
  },
];

export const tabs = [
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
    content: <TechCard data={StackCards} />,
    icon: ImStack,
    label: "im-stack",
  },
  {
    value: "tab3",
    name: "Frameworks",
    content: <TechCard data={FrameworkCards} />,
    icon: MdOutlineFilterFrames,
    label: "md-outline-filter-frames",
  },
];
