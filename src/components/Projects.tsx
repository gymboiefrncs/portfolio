import { ArrowRight, Terminal } from "lucide-react";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projectsData = [
    {
      title: "RESTful API Engine",
      description:
        "High-performance backend API service constructed using Go and PostgreSQL featuring strict token validation systems.",
      tags: ["Go", "PostgreSQL", "JWT", "Docker"],
      gitHubUrl: "https://github.com",
    },
    {
      title: "Realtime Task Pipeline",
      description:
        "Event-driven message routing queue management app processing stream tasks asynchronously without system delays.",
      tags: ["Node.js", "Redis", "TypeScript"],
      gitHubUrl: "https://github.com",
      liveUrl: "https://google.com",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      gitHubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ];
  return (
    <section>
      <div className="flex items-center gap-2">
        <Terminal />
        <h5 className="text-foreground">projects </h5>
        <hr className="border-primary border-t-2 ml-2 flex-1" />
        <button className="flex items-center gap-1 shrink-0">
          <span className="text-sm text-muted">view all</span>
          <ArrowRight className="h-3 w-3 text-muted" />
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            gitHubUrl={project.gitHubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
};
