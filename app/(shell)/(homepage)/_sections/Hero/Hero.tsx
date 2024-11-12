export const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-96px)]">
      <div className="container mx-auto flex gap-8 py-8">
        <div className="flex-1">
          <div className="bg-gray-200 w-full aspect-[8/3] rounded-2xl" />
          <div className="mt-8">
            <div className="text-xs bg-gray-100 px-4 py-2 w-fit rounded-full">
              Hero Section
            </div>
            <h1 className="mt-8 font-bold text-5xl font-baloo">
              Welcome to My Digital Playground: Exploring Creativity, Code, and
              Innovation
            </h1>
            <p className="mt-8 font-fredoka text-xl">
              Hi there! I'm a Frontend Developer passionate about building
              engaging digital experiences. Here, you'll find my projects,
              insights on the latest tech trends, and a glimpse into my journey
              in web development. Let's explore the world of code, creativity,
              and everything in between!
            </p>
            <button className="mt-8 bg-gray-200 px-8 py-4 rounded-full font-baloo font-bold text-xl">
              Contact Me
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-gray-200 w-full h-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
};
