import { Terminal } from "lucide-react";
import { ProjectCard } from "./Card";

export const Projects = () => {
  return (
    <section>
      <div className="flex items-center gap-2">
        <Terminal />
        <h4 className="text-foreground">projects </h4>
        <hr className="border-primary border-t-2 ml-4 flex-1" />
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6">
        <ProjectCard
          title="RESTful API Engine"
          description="High-performance backend API service constructed using Go and PostgreSQL featuring strict token validation systems."
          tags={["Go", "PostgreSQL", "JWT", "Docker"]}
          gitHubUrl="https://github.com"
        />
        <ProjectCard
          title="Realtime Task Pipeline"
          description="Event-driven message routing queue management app processing stream tasks asynchronously without system delays."
          tags={["Node.js", "Redis", "TypeScript"]}
          gitHubUrl="https://github.com"
          liveUrl="https://google.com"
        />
      </div>
    </section>
  );
};
