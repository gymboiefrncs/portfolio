import heroImage from "../assets/hero.png";
import {
  ShapeBracket,
  ShapeSquareFilled,
  ShapeSquare,
  ShapeDots,
  ShapeDotGrid3,
} from "./Shapes";

export const Hero = () => {
  return (
    <section className="relative scroll-mt-20" id="home">
      <ShapeBracket className="h-5 w-5 text-primary absolute -top-2 left-0 opacity-40  -z-10" />
      <ShapeSquare className="h-16 w-16 text-muted absolute top-16 left-75 opacity-20 -z-10" />
      <ShapeSquareFilled className="h-2.5 w-2.5 text-primary absolute bottom-6 left-4 opacity-40 -z-10" />
      <ShapeDots className="h-5 w-5 text-primary absolute top-58 right-8 opacity-40 -z-10" />
      <ShapeDotGrid3 className="h-16 w-16 text-primary absolute top-58 left-8 opacity-70 -z-10" />
      <div className="relative z-10">
        <h3 className="mb-4">
          <span className="text-foreground">
            Aspiring <span className="text-primary">Developer</span> ready to{" "}
            <span className="text-primary">
              build impactful digital solutions
            </span>
            .
          </span>
        </h3>
        <h6 className="text-muted">
          I'm a third-year Computer Science student specializing in backend
          development.
        </h6>
      </div>

      <div className="flex justify-center items-center">
        <img
          src={heroImage}
          alt="Profile Picture"
          className="w-60 border object-cover mt-4 rounded-xl relative z-10"
        />
      </div>

      <div className="border border-primary rounded-md p-4 font-mono text-sm max-w-md my-6 relative z-10">
        <p className="text-muted italic">
          "There are 10 types of people in the world: those who understand
          binary, and those who don't."
        </p>
        <span className="block text-right text-xs text-primary mt-2">
          - Unknown Programmer Folklore
        </span>
      </div>
    </section>
  );
};
