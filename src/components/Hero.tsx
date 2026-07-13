import heroImage from "../assets/profile.webp";
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
      <div className="absolute top-0 right-0 border border-primary h-24 w-2" />
      <div className="relative z-10">
        <h3 className="mb-2 md:text-3xl lg:text-4xl">
          <span className="text-foreground">
            <span className="text-primary">
              Backend Developer, Currently Specializing in Asking AI Nicely
            </span>
          </span>
        </h3>
        <p className="text-muted font-mono text-sm mb-4">
          - works on my machine. don't ask why.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <img
          src={heroImage}
          alt="Profile Picture"
          className="w-60 md:w-70 lg:w-80 object-cover mt-4 relative"
        />
      </div>

      <div className="border border-primary p-4 font-mono text-sm max-w-md mb-6 mx-auto relative z-10">
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
