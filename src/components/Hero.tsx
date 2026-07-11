import heroImage from "../assets/hero.png";

export const Hero = () => {
  return (
    <section>
      <div>
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
          className="w-60 border object-cover mt-4 rounded-xl"
        />
      </div>
      <div className=" border border-primary rounded-md p-4 font-mono text-sm max-w-md my-6">
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
