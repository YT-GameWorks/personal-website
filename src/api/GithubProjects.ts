import axios from "axios";
import { GithubProject } from "../interfaces/GithubProject";

export function GetGithubProjects(username) {
  axios
    .get(`https://api.github.com/users/${username}/repos`)
    .then(({ data }) => {
      const GithubProjects: GithubProject[] | any = data;

      return GithubProjects;
    })
    .catch((e) => {
      console.log(`Failed to fetch github projects because: ${e}`);
    });
}
