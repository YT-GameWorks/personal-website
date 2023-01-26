import { BiCodeCurly } from "react-icons/bi";
import { ImStack } from "react-icons/im";
import { MdOutlineFilterFrames } from "react-icons/md";
import TechCard from "../components/TechCard";

export const languageCards = [
  {
    id: 1,
    name: "Java",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    description:
      "Java is a type safe compiled language that I use for Discord Bots and Backends.",
  },
  {
    id: 2,
    name: "Javascript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "Javascript is a dynamic language that I use for functionality on the web.",
  },
  {
    id: 3,
    name: "C#",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    description:
      "C# (pronounced C-Sharp) is very similar to java but runs on CLR and I use it for game development.",
  },
  {
    id: 4,
    name: "Typescript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description:
      "Typescript is a statically typed superset of javascript that I prefer over vanilla js.",
  },
  {
    id: 5,
    name: "Rust",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
    description:
      "Rust is a fast, memory-safe and friendly alternative to C++ and I use it for software development.",
  },
  {
    id: 6,
    name: "C++.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    description:
      "C++ is a widely used systems language and I use it for software development.",
  },
  {
    id: 7,
    name: "Go",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
    description:
      "Go is a new language from google and I use it for backend programming",
  },
];

export const StackCards = [
  {
    id: 1,
    name: "MERN",
    image: "https://dummyimage.com/64x64/fff/000.png&text=+MERN",
    description:
      "MERN consists of MongoDB, Express, React, Node. I use it for Full-Stack apps and it is my main stack.",
  },
  {
    id: 2,
    name: "MEAN",
    image: "https://dummyimage.com/64x64/fff/000.png&text=+MEAN",
    description:
      "MEAN consists of MongoDB, Express, Angular, Node. I don't use it as much but I have experience using it.",
  },
  {
    id: 3,
    name: "MEVN",
    image: "https://dummyimage.com/64x64/fff/000.png&text=+MEVN",
    description:
      "MEVN consists of MongoDB, Express, Vue, Node. It is my least preferred stack and I also have the least experience in it.",
  },
  {
    id: 4,
    name: "MENTN",
    image: "https://dummyimage.com/64x64/fff/000.png&text=+MENTN",
    description:
      "MENTN stack consists of MongoDB, Express, Next.js, TailwindCSS, Node. It is my preferred stack when making static websites.",
  },
];

export const FrameworkCards = [
  {
    id: 1,
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description:
      "Next.js is a react framework for SEO static websites. I use it when making static sites including this one!",
  },
  {
    id: 2,
    name: "Express",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description:
      "Express is a fast and opinionated backend framework. It is my choice for backend when making full-stack apps.",
  },
  {
    id: 3,
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "React is a component based UI library from Facebook that is my primary tool when making FrontEnds.",
  },
  {
    id: 4,
    name: "Angular",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    description:
      "Angular is a framework from google for building websites. I don't use it as much because of it's bulk however.",
  },
  {
    id: 5,
    name: "Vue",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    description:
      "Vue is a open-source component based UI library. I don't use it at all because of unfamiliarity.",
  },

  {
    id: 6,
    name: "Svelte",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
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
