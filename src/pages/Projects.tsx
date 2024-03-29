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
import { closestMatch } from "closest-match";
import "animate.css";

interface ProjectsProps {}

interface ProjectsState {
  Projects: GithubProject[] | null;
  search: string;
  isLoading: boolean;
  skeletonCards: Array<number>;
  filteredNames: Array<string>;
  projectNames: Array<string>;
  filteredProjects: GithubProject[] | null;
}

export default class Projects extends Component<ProjectsProps, ProjectsState> {
  state = {
    Projects: [],
    isLoading: true,
    search: "",
    skeletonCards: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    ],
    filteredNames: [],
    projectNames: [],
    filteredProjects: null,
  };

  async componentDidMount() {
    document.title = "Game Glide | Projects";

    const GithubProjects: GithubProject[] = await GetGithubProjects(
      "YT-GameWorks"
    );
    this.setState({ Projects: GithubProjects, isLoading: false });
    this.state.Projects.forEach((project: GithubProject) => {
      this.state.projectNames.push(project.name);
    });
  }

  render() {
    return (
      <div className='overflow-x-hidden'>
        <VechaiProvider theme={theme} colorScheme='cool'>
          <Navbar />
          <section className='text-gray-400 body-font'>
            <div className='container px-0 md:px-5 pb-24 md:mx-auto'>
              <div className='flex flex-col text-center w-full'>
                <h1 className='text-2xl font-medium title-font mb-4 text-white tracking-widest md:animate__animated md:animate__fadeIn'>
                  PROJECTS
                </h1>
                <p className='lg:w-2/3 mx-auto leading-relaxed text-base md:animate__animated md:animate__fadeIn md:animate_delay-2s'>
                  Here you can find latest github projects made by me, there
                  might be a new one every now and then!
                </p>
                <div className='flex flex-row items-center animate__animated animate__fadeIn animate_delay-3s'>
                  <Input
                    placeholder='Project Name'
                    variant='solid'
                    color='blue'
                    size='lg'
                    className='ml-auto w-60 md:w-80 mt-4'
                    onChange={(e) => {
                      if (e.target.value === "") {
                        this.setState({
                          search: "",
                          filteredNames: null,
                          filteredProjects: null,
                        });
                      } else {
                        this.setState({ search: e.target.value });

                        const FilteredNames: string[] = closestMatch(
                          this.state.search,
                          this.state.projectNames,
                          true
                        ) as string[];

                        this.setState({ filteredNames: FilteredNames });

                        const FilteredProjects: GithubProject[] = [];

                        this.state.Projects.forEach(
                          (project: GithubProject) => {
                            if (
                              FilteredNames.some((el) => project.name === el)
                            ) {
                              FilteredProjects.push(project);
                            } else {
                              return;
                            }
                          }
                        );

                        this.setState({
                          filteredProjects:
                            FilteredProjects === [] ? null : FilteredProjects,
                        });
                      }
                    }}
                  />
                  <IconButton
                    variant='ghost'
                    color='primary'
                    size='xl'
                    className='mr-auto ml-5 mt-3'
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
                    <Icon as={RiRefreshLine} label='BiRefresh' />
                  </IconButton>
                </div>
                <div className=' ml-8 mr-4 md:ml-10'>
                  <ul className={CardStyles.cards}>
                    {this.state.isLoading ? (
                      <div
                        className='grid gap-8 items-start p-8 -ml-14'
                        style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
                      >
                        {this.state.skeletonCards.map((card) => (
                          <div className='w-96 p-4 border border-gray-700 rounded-lg shadow-2xl'>
                            <div className='flex space-x-3'>
                              <div className='flex-none w-12 h-12 bg-gray-700 rounded-full animate-pulse' />
                              <div className='w-full space-y-2'>
                                <div className='w-3/4 h-4 bg-gray-700 rounded animate-pulse' />
                                <div className='w-full h-4 bg-gray-700 rounded animate-pulse' />
                                <div className='w-5/6 h-4 bg-gray-700 rounded animate-pulse' />
                                <div className='w-5/6 h-4 bg-gray-700 rounded animate-pulse' />
                                <div className='w-5/6 h-4 bg-gray-700 rounded animate-pulse' />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : this.state.filteredProjects != null ? (
                      this.state.filteredProjects.map((project) => (
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
                    ) : (
                      this.state.Projects.map((project) => (
                        <li
                          id={project.id.toString()}
                          className='animate__animated animate__fadeIn animate_delay-4s'
                        >
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
          <Footer />
        </VechaiProvider>
      </div>
    );
  }
}
