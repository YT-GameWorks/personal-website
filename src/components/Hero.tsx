import React from "react";
import Img from "next/image";
import Logo from "../public/Logo.svg";
import Typewriter from "typewriter-effect";
import { Button, Icon } from "@vechaiui/react";
import { useRouter } from "next/router";
import { BsArrowRight } from "react-icons/bs";
import "animate.css";

function Hero() {
  const router = useRouter();

  return (
    <section className="dark text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <Img
          src={Logo}
          alt="Logo"
          height="152"
          width="152"
          className="mb-5 animate__animated animate__fadeIn animate__delay-2s"
        />
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center mt-10">
          <h1 className="title-font sm:text-4xl text-3xl mb-10 font-medium text-white animate__animated animate__fadeIn animate__delay-2s">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hey! I'm Game Glide!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Web Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Game Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Discord Bot Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Software Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Totally Professional Developer")
                  .start();
              }}
            />
          </h1>
          <p className="mb-8 leading-relaxed animate__animated animate__fadeIn animate__delay-3s">
            Hello there, I'm Game Glide! I'm a self-taught Developer with 5
            years of experience. I know a variety of different technologies
            including web development, game development, software development
            and discord bots. I'm generally pretty goofy and tend to make
            mistakes but I'm always ready to learn!
          </p>
          <div className="flex text-gray-300 animate__animated animate__fadeIn animate__pulse animate__delay-4s">
            <Button
              variant="solid"
              color="primary"
              size="xl"
              className="mr-3"
              onClick={(e) => {
                e.preventDefault();
                router.push("/Contact");
              }}
            >
              Contact
            </Button>
            <Button
              color="primary"
              size="xl"
              rightIcon={
                <Icon as={BsArrowRight} label="portfolio" className="ml-2" />
              }
              onClick={(e) => {
                e.preventDefault();
                router.push("/Projects");
              }}
            >
              Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
