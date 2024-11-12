export const WorkShowcase = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto flex gap-32 items-center">
        <div className="flex-1 max-w-xl">
          <h3 className="font-baloo font-bold text-4xl">
            Explore My Work Showcase
          </h3>
          <p className="mt-8 font-fredoka text-xl">
            Take a closer look at the projects I've crafted, where creativity
            meets functionality. From sleek, interactive websites to dynamic web
            applications, explore the work that reflects my passion for design
            and development.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-8">
          <div className="w-full aspect-square rounded-xl bg-gray-200" />
          <div className="w-full aspect-square rounded-xl bg-gray-200" />
          <div className="w-full aspect-square rounded-xl bg-gray-200" />
          <div className="w-full aspect-square flex flex-col justify-center gap-8">
            <p className="text-xl font-fredoka">
              Discover the projects I've built and the innovations I've brought
              to life. Explore a collection of my work that highlights my skills
              in design, development, and problem-solving. Dive in and see how I
              turn ideas into impactful digital experiences!
            </p>
            <button className="bg-gray-200 w-fit rounded-full font-baloo px-8 py-4 font-bold text-xl">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
