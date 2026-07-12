import { Terminal } from "lucide-react";
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
    title: "domxz",
    description:
      "Code snippet sharing platform with user authentication, real-time updates, and group-based access control for collaborative coding.",
    tags: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Express",
      "PostgreSQL",
      "Render",
      "Vercel",
    ],
    gitHubUrl: "https://github.com/gymboiefrncs/domx.git",
    liveUrl: "https://www.domxz.me/",
  },
  {
    title: "Scaffool",
    description:
      "Scaffoldding tool for me to quickly generate boilerplate for my projects",
    tags: ["Tyepscript", "Node JS"],
    gitHubUrl: "https://github.com/gymboiefrncs/scaffool.git",
  },
];

export const Projects = () => {
  return (
    <section className="relative scroll-mt-20" id="projects">
      <ShapeBracket className="h-5 w-5 text-primary absolute -top-2 left-0 opacity-40  -z-10" />
      <ShapeBracket className="h-5 w-5 text-primary absolute bottom-10 left-0 opacity-40  -z-10" />

      <ShapeSquare className="h-16 w-16 text-muted absolute top-16 right-75 opacity-20 -z-10" />

      <ShapeSquareFilled className="h-2.5 w-2.5 text-primary absolute top-20 left-4 opacity-40 -z-10" />
      <ShapeSquareFilled className="h-2.5 w-2.5 text-primary absolute top-30 right-4 opacity-40 -z-10" />
      <ShapeSquareFilled className="h-2.5 w-2.5 text-primary absolute bottom-50 right-4 opacity-40 -z-10" />
      <ShapeSquareFilled className="h-2.5 w-2.5 text-primary absolute bottom-60 left-4 opacity-40 -z-10" />

      <ShapeDotGrid5 className="h-16 w-16 text-primary absolute top-73 sm:top-83 left-70 sm:left-96 md:left-40 opacity-50 -z-10" />

      <ShapeBlob className="h-20 w-20 text-primary absolute top-30 md:top-10 right-20 opacity-40 -z-10" />
      <ShapeBlob className="h-20 w-20 text-primary absolute bottom-45 md:bottom-20 right-75 md:right-20 opacity-40 -z-10" />

      <ShapeDiamond className="h-16 w-16 text-primary absolute bottom-0 left-75 sm:left-90 md:left-96 opacity-30 -z-10" />

      <div className="flex items-center gap-2 relative z-10">
        <Terminal />
        <h5 className="text-foreground">projects </h5>
        <div className="flex justify-between w-full">
          <hr className="border-primary border-t-2 ml-8 w-10" />
          <hr className="border-primary border-t-2 w-56" />
          <hr className="border-primary border-t-2 w-60" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
