import { ExternalLink, Mail, Terminal } from "lucide-react";
import { ShapeDotGrid5, ShapeDots, ShapeSquareFilled } from "./Shapes";

const contacts = [
  {
    label: "email",
    value: "dominiquefrancis42@gmail.com",
    href: "mailto:dominiquefrancis42@gmail.com",
  },
  {
    label: "github",
    value: "github/gymboiefrncs",
    href: "https://github.com/gymboiefrncs",
  },
];

export const Contacts = () => {
  return (
    <section className="relative">
      <ShapeDotGrid5 className="h-16 w-16 text-primary absolute top-0 right-78 opacity-40 -z-10" />
      <ShapeDots className="h-5 w-3 text-primary absolute top-20 left-75 opacity-60 -z-10" />
      <ShapeSquareFilled className="h-2.5 w-2.5 text-primary absolute top-40 right-4 opacity-40 -z-10" />
      <div className="flex items-center gap-2 relative z-10">
        <Terminal />
        <h4 className="text-foreground">contacts</h4>
        <hr className="border-primary border-t-2 ml-4 flex-1" />
      </div>
      <div className="border border-primary p-6 mt-4">
        <span className="text-xs text-muted font-mono">
          <span className="text-foreground font-semibold">$ domxzmir</span>{" "}
          --contact
        </span>
        <div className="flex flex-col gap-2 mt-4 font-mono text-xs">
          {contacts.map((c, i) => {
            const isEmail = c.label === "email";
            return (
              <a
                key={i}
                href={c.href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className="flex gap-3 text-foreground hover:text-primary transition-colors duration-200"
              >
                <span className="text-muted">{c.label}:</span>
                <span>{c.value}</span>
                {isEmail ? (
                  <Mail className="h-3 w-3 text-muted ml-auto" />
                ) : (
                  <ExternalLink className="h-3 w-3 text-muted ml-auto" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
