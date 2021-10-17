import React from "react";
import { VechaiProvider, Input } from "@vechaiui/react";
import { theme } from "../themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Projects() {
  return (
    <div>
      <Navbar />
      <VechaiProvider theme={theme} colorScheme="cool">
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 pb-24 mx-auto">
            <div className="flex flex-col text-center w-full">
              <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">
                PROJECTS
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Here you can find latest github projects made by me, They update
                as I create them so look out, there might be a new one every now
                and then!
              </p>
              <Input
                placeholder="project name"
                variant="solid"
                color="blue"
                size="lg"
                className="w-80 mt-4"
                style={{ marginLeft: "30rem" }}
              />
            </div>
          </div>
        </section>
      </VechaiProvider>
      <Footer />
    </div>
  );
}

export default Projects;
