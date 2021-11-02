import React from "react";
import { Owner } from "../interfaces/GithubProject";

function ProjectCard({
  name,
  isArchived,
  isForked,
  language,
  owner,
  description,
  size,
  updatedAt,
  watchers,
  url,
}: {
  name: string;
  isArchived: boolean;
  isForked: boolean;
  language: string;
  owner: Owner;
  description: string;
  size: number;
  updatedAt: string;
  watchers: number;
  url: string;
}) {
  return (
    <div className="container px-5 py-24 mx-auto">
      <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">
        {name}
      </h1>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/2 w-full">
          <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
            <p className="leading-relaxed mb-6">{description}</p>
            <a className="inline-flex items-center">
              <img
                alt="testimonial"
                src="https://dummyimage.com/106x106"
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-white">
                  {owner.login}
                </span>
                <span className="text-gray-500 text-sm">{language}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
