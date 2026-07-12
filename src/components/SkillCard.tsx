interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export const SkillCard = ({ title, skills, icon }: SkillCardProps) => {
  return (
    <article className="group relative flex h-full flex-col justify-between border border-primary p-4 transition-[transform, box-shadow] duration-300 ease-out hover:-translate-y-1 hover:translate-x-2 hover:[box-shadow:-6px_6px_0_0_var(--primary)]">
      <div>
        <div className="flex gap-2 items-center">
          {icon}
          <h5 className="text-sm font-bold text-foreground">{title}</h5>
        </div>
        <hr className="border-primary/30 my-2" />
        <ul className="mt-2 space-y-1">
          {skills.map((skill, index) => (
            <li key={index} className="text-muted text-xs">
              {"> "}
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
