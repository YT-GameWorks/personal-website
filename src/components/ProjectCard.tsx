import React from "react";
import { Tag, Icon, Button } from "@vechaiui/react";
import { AiOutlineStar } from "react-icons/ai";
import { GiBinoculars } from "react-icons/gi";
import {
  SiTypescript,
  SiCsharp,
  SiJava,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import { BsArchive, BsCardText } from "react-icons/bs";
import { VscRepoForked } from "react-icons/vsc";

function ProjectCard({
  name,
  isArchived,
  isForked,
  language,
  description,
  size,
  updatedAt,
  watchers,
  stars,
  url,
}: {
  name: string;
  isArchived: boolean;
  isForked: boolean;
  language: string;
  description: string;
  size: number;
  updatedAt: string;
  watchers: number;
  stars: number;
  url: string;
}) {
  const d = new Date(updatedAt);

  return (
    <div className='grid grid-cols-1 md:w-96 h-44 scale-100 border-gray-800 border shadow-lg rounded-lg -ml-5 my-5 overflow-hidden transition-all hover:shadow-2xl hover:scale-105'>
      <section className='mt-2 ml-2'>
        <div className='flex flex-row'>
          <Icon
            as={
              language === "TypeScript"
                ? SiTypescript
                : language === "JavaScript"
                ? SiJavascript
                : language === "Java"
                ? SiJava
                : language === "Css"
                ? SiCss3
                : language === "C#"
                ? SiCsharp
                : BsCardText
            }
            label={language}
            className={`mt-1 mr-1 ${
              language === "TypeScript"
                ? "text-blue-600"
                : language === "JavaScript"
                ? "text-yellow-300"
                : language === "Java"
                ? "text-red-500"
                : language === "Css"
                ? "text-blue-400"
                : language === "C#"
                ? "text-purple-600"
                : "text-gray-600"
            }`}
          />
          <h1 className='text-white title-font font-medium'>{name}</h1>
          {isArchived && isForked ? (
            <div>
              <Tag variant='light' color='orange' className='ml-3'>
                <Icon
                  as={BsArchive}
                  label='bs-archive'
                  className='h-4 w-4 mr-1'
                />
                <Tag.Label>Archived</Tag.Label>
              </Tag>
              <Tag variant='light' color='primary' className='ml-3'>
                <Icon
                  as={VscRepoForked}
                  label='vsc-repo-forked'
                  className='h-4 w-4 mr-1'
                />
                <Tag.Label>Forked</Tag.Label>
              </Tag>
            </div>
          ) : isArchived || isForked ? (
            <Tag
              variant='light'
              color={isArchived ? "orange" : "primary"}
              className='ml-3'
            >
              <Icon
                as={isArchived ? BsArchive : VscRepoForked}
                label={isArchived ? "vs-archive" : "vsc-repo-forked"}
                className='h-4 w-4 mr-1'
              />

              <Tag.Label>{isArchived ? "Archived" : "Forked"}</Tag.Label>
            </Tag>
          ) : (
            ""
          )}
        </div>
        <h3 className='leading-relaxed text-left'>
          Last Updated: {d.toDateString()}
        </h3>
      </section>
      <section>
        <p className='text-left text-muted text-sm ml-2 mt-2 mb-2'>
          {description ? description : <em>No Description provided</em>}
        </p>
      </section>
      <section className='ml-2 mb-2 flex'>
        <Button
          variant='light'
          color='primary'
          onClick={(e) => {
            e.preventDefault();
            window.location.href = url;
          }}
          className='mr-2'
        >
          View Repository
        </Button>
        <div className='text-muted text-left'>
          <h3>
            <Icon
              as={AiOutlineStar}
              label='ai-outline-star'
              className='text-yellow-400'
            />
            : {stars} • {""}
            <Icon
              as={GiBinoculars}
              label='gi-binoculars'
              className='text-blue-400'
            />
            : {watchers} • {""}
            {size} KB
          </h3>
        </div>
      </section>
    </div>
  );
}

export default ProjectCard;
