import { Languages, Server, Terminal, Wrench } from "lucide-react";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  const skillsData = [
    {
      icon: <Terminal className="h-4 w-4" />,
      title: "frontend",
      skills: ["React", "Tailwind CSS"],
    },
    {
      icon: <Server className="h-4 w-4" />,
      title: "backend",
      skills: ["PostgreSQL", "Node.js"],
    },
    {
      icon: <Wrench className="h-4 w-4" />,
      title: "tools",
      skills: ["Git", "VSCode"],
    },
    {
      icon: <Languages className="h-4 w-4" />,
      title: "languages",
      skills: ["TypeScript", "Python", "Java"],
    },
  ];

  return (
    <section>
      <div className="flex items-center gap-2">
        <Terminal />
        <h4 className="text-foreground">skills </h4>
        <hr className="border-primary border-t-2 ml-4 flex-1" />
      </div>
      <div className="grid grid-cols-2 mt-6 gap-4">
        {skillsData.map((skillData, index) => (
          <SkillCard
            key={index}
            icon={skillData.icon}
            title={skillData.title}
            skills={skillData.skills}
          />
        ))}
      </div>
    </section>
  );
};
