/* NOTE: this is really hard to do in function components, so we're using class components. */

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

interface ProjectsProps {}

interface ProjectsState {
  Projects: GithubProject[] | null;
  isLoading: boolean;
  skeletonCards: Array<number>;
}

export default class Projects extends Component<ProjectsProps, ProjectsState> {
  state = {
    Projects: [],
    isLoading: true,
    skeletonCards: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    ],
  };

  async componentDidMount() {
    const GithubProjects = await GetGithubProjects("YT-GameWorks");
    this.setState({ Projects: GithubProjects, isLoading: false });
  }

  render() {
    return (
      <div className="overflow-x-hidden">
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
                    onClick={async () => {
                      this.setState({ Projects: null, isLoading: true });
                      const GithubProjects = await GetGithubProjects(
                        "YT-GameWorks"
                      );
                      this.setState({
                        Projects: GithubProjects,
                        isLoading: false,
                      });
                    }}
                  >
                    <Icon as={RiRefreshLine} label="BiRefresh" />
                  </IconButton>
                </div>
                <div className="ml-10">
                  <ul className={CardStyles.cards}>
                    {this.state.isLoading ? (
                      <div
                        className="grid gap-8 items-start p-8 -ml-14"
                        style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
                      >
                        {this.state.skeletonCards.map((card) => (
                          <div className="w-96 p-4 border border-gray-700 rounded-lg shadow-2xl">
                            <div className="flex space-x-3">
                              <div className="flex-none w-12 h-12 bg-gray-700 rounded-full animate-pulse" />
                              <div className="w-full space-y-2">
                                <div className="w-3/4 h-4 bg-gray-700 rounded animate-pulse" />
                                <div className="w-full h-4 bg-gray-700 rounded animate-pulse" />
                                <div className="w-5/6 h-4 bg-gray-700 rounded animate-pulse" />
                                <div className="w-5/6 h-4 bg-gray-700 rounded animate-pulse" />
                                <div className="w-5/6 h-4 bg-gray-700 rounded animate-pulse" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      this.state.Projects.map((project) => (
                        <li id={project.id.toString()}>
                          <ProjectCard
                            name={project.name}
                            isArchived={project.archived}
                            isForked={project.fork}
                            language={project.language}
                            description={project.description}
                            size={project.size}
                            updatedAt={project.updated_at}
                            watchers={project.watchers}
                            stars={project.stargazers_count}
                            url={project.html_url}
                          />
                        </li>
                      ))
                    )}
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
