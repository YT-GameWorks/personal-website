import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineProject,
} from "react-icons/ai";
import { ImStack } from "react-icons/im";

export const pages = [
  {
    id: 1,
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    id: 2,
    name: "Contact",
    href: "/Contact",
    icon: AiOutlinePhone,
  },
  {
    id: 3,
    name: "Projects",
    href: "/Projects",
    icon: AiOutlineProject,
  },
  {
    id: 4,
    name: "Technologies",
    href: "/Technologies",
    icon: ImStack,
  },
];
