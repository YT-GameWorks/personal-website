import axios from "axios";
import { GithubProject } from "../interfaces/GithubProject";

export async function GetGithubProjects(username) {
  let GithubProjects: GithubProject[] | undefined = undefined;

  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );

  GithubProjects = (await response.json()) as unknown as GithubProject[];

  return GithubProjects;
}
