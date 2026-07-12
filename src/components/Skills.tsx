import { Languages, Server, Terminal, Wrench } from "lucide-react";
import { SkillCard } from "./SkillCard";
import { ShapeDiamondFilled, ShapeSquareOutline } from "./Shapes";
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

export const Skills = () => {
  return (
    <section className="relative scroll-mt-20" id="skills">
      <ShapeDiamondFilled className="h-16 w-16 text-primary absolute top-3 right-78 opacity-30 -z-10" />
      <ShapeSquareOutline className="h-16 w-16 text-primary absolute bottom-10 left-30 opacity-20 -z-10" />
      <div className="flex items-center gap-2 relative z-10">
        <Terminal />
        <h4 className="text-foreground">skills </h4>
        <div className="flex justify-between w-full">
          <hr className="border-primary border-t-2 ml-4 w-40" />
          <hr className="border-primary border-t-2 ml-4 w-60" />
        </div>
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
