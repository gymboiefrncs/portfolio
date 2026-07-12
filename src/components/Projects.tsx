import { ArrowRight, Terminal } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import {
  ShapeBlob,
  ShapeBracket,
  ShapeDiamond,
  ShapeDotGrid5,
  ShapeSquare,
  ShapeSquareFilled,
} from "./Shapes";

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

export const Projects = () => {
  return (
    <section className="relative">
      <ShapeBracket className="h-5 w-5 text-primary absolute -top-2 left-0 opacity-40  -z-10" />
      <ShapeBracket className="h-5 w-5 text-primary absolute bottom-10 left-0 opacity-40  -z-10" />

      <ShapeSquare className="h-16 w-16 text-muted absolute top-16 right-75 opacity-20 -z-10" />

      <ShapeSquareFilled className="h-2.5 w-2.5 text-primary absolute top-20 left-4 opacity-40 -z-10" />
      <ShapeSquareFilled className="h-2.5 w-2.5 text-primary absolute top-30 right-4 opacity-40 -z-10" />
      <ShapeSquareFilled className="h-2.5 w-2.5 text-primary absolute bottom-50 right-4 opacity-40 -z-10" />
      <ShapeSquareFilled className="h-2.5 w-2.5 text-primary absolute bottom-60 left-4 opacity-40 -z-10" />

      <ShapeDotGrid5 className="h-16 w-16 text-primary absolute top-73 left-70 opacity-70 -z-10" />

      <ShapeBlob className="h-20 w-20 text-primary absolute top-30 right-20 opacity-40 -z-10" />
      <ShapeBlob className="h-20 w-20 text-primary absolute bottom-45 right-75 opacity-40 -z-10" />

      <ShapeDiamond className="h-16 w-16 text-primary absolute bottom-0 left-75 opacity-30 -z-10" />

      <div className="flex items-center gap-2 relative z-10">
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
