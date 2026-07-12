import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  gitHubUrl: string;
  liveUrl?: string;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  gitHubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <article className="group relative flex h-full flex-col justify-between border border-primary p-6 transition-[transform, box-shadow] duration-300 ease-out hover:-translate-y-1 hover:translate-x-2 hover:[box-shadow:-6px_6px_0_0_var(--primary)]">
      <div>
        <h3 className="mb-2 text-sm font-bold text-foreground">{title}</h3>
        <p className="mb-6 text-xs leading-relaxed text-muted">{description}</p>
      </div>

      <div>
        <div className="mb-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-muted/10 bg-background px-2.5 py-1 font-mono text-xs text-muted transition-colors duration-200 group-hover:border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 border-t border-primary/20 pt-4">
          <a
            href={gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-muted transition-colors duration-200 hover:text-primary"
          >
            code_
          </a>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-muted transition-colors duration-200 hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" /> live_demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
