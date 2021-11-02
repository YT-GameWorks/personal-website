import React, { Component } from "react";
import { VechaiProvider, Input, IconButton, Icon } from "@vechaiui/react";
import { RiRefreshLine } from "react-icons/ri";
import { theme } from "../themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { GetGithubProjects } from "../api/GithubProjects";
import { GithubProject } from "../interfaces/GithubProject";
import CardStyles from "../styles/Card.module.css";

export default class Projects extends Component {
  state: { projects: GithubProject[] } = {
    projects: [],
  };

  async componentDidMount() {
    const GithubProjects = await GetGithubProjects("YT-GameWorks");
    this.setState({ projects: GithubProjects });

    console.log(this.state);
  }

  render() {
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
                  Here you can find latest github projects made by me, They
                  update as I create them so look out, there might be a new one
                  every now and then!
                </p>
                <div className="flex flex-row">
                  <Input
                    placeholder="project name"
                    variant="solid"
                    color="blue"
                    size="lg"
                    className="w-80 mt-4"
                    style={{ marginLeft: "30rem" }}
                  />
                  <IconButton
                    variant="ghost"
                    color="primary"
                    size="xl"
                    className="ml-5 mt-3"
                    onClick={() =>
                      this.state.projects.forEach((project) => {
                        console.log(`This is project: ${project.id}`);
                      })
                    }
                  >
                    <Icon as={RiRefreshLine} label="BiRefresh" />
                  </IconButton>
                </div>
                <div className="dark container rounded-3xl w-full h-full ml-10">
                  <ul className={CardStyles.card}>
                    {this.state.projects.map((project) => (
                      <li id={project.id.toString()}>
                        <ProjectCard
                          name={project.name}
                          isArchived={project.archived}
                          isForked={project.fork}
                          language={project.language}
                          owner={project.owner}
                          description={project.description}
                          size={project.size}
                          updatedAt={project.updated_at}
                          watchers={project.watchers}
                          url={project.url}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </VechaiProvider>
        <Footer />
      </div>
    );
  }
}
