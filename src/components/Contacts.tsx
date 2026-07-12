import { Terminal } from "lucide-react";
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
    <section className="relative scroll-mt-20" id="contacts">
      <ShapeDotGrid5 className="h-16 w-16 text-primary absolute top-0 right-78 opacity-40 -z-10" />
      <ShapeDots className="h-5 w-3 text-primary absolute top-20 left-75 opacity-60 -z-10" />
      <ShapeSquareFilled className="h-2.5 w-2.5 text-primary absolute top-40 right-4 opacity-40 -z-10" />
      <div className="flex items-center gap-2 relative z-10">
        <Terminal />
        <h4 className="text-foreground">contacts</h4>
        <hr className="border-primary border-t-2 ml-64 flex-1" />
      </div>
      <div className="border border-primary p-6 mt-4 max-w-lg mx-auto">
        <span className=" text-muted font-mono">
          <span className="text-foreground font-semibold md:text-md">
            $ domxzmir
          </span>{" "}
          --contact
        </span>
        <div className="flex flex-col gap-1 mt-4 font-mono text-xs md:text-sm">
          {contacts.map((c, i) => {
            return (
              <a
                key={i}
                href={c.href}
                target={"_blank"}
                rel={"noopener noreferrer"}
                className="group flex gap-3 text-foreground"
              >
                <span className="text-muted">{c.label}:</span>
                <span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    [
                  </span>
                  {c.value}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    ]
                  </span>
                </span>
              </a>
            );
          })}
          <div className="h-4 w-2 bg-white animate-[blink_1.5s_step-end_infinite] mt-2" />
        </div>
      </div>
    </section>
  );
};
