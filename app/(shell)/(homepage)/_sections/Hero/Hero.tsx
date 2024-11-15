import Image from "next/image";

export const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-96px)]">
      <div className="container mx-auto flex gap-32 py-8">
        <div className="flex-1">
          <div className="w-full aspect-[8/3] relative">
            <Image
              src="/images/hero-2.jpg"
              fill
              alt="Hero Image 2"
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="mt-8">
            <div className="text-xs bg-primary-pale/60 text-primary px-4 py-2 w-fit rounded-full">
              Tech World
            </div>
            <h1 className="mt-8 font-bold text-5xl font-baloo text-primary">
              Welcome to My Digital Playground: Exploring Creativity, Code, and
              Innovation
            </h1>
            <p className="mt-8 font-fredoka text-xl text-gray-500">
              Hi there! I'm a Frontend Developer passionate about building
              engaging digital experiences. Here, you'll find my projects,
              insights on the latest tech trends, and a glimpse into my journey
              in web development. Let's explore the world of code, creativity,
              and everything in between!
            </p>
            <button className="mt-8 bg-primary-light hover:bg-primary px-8 py-4 rounded-full font-baloo font-bold text-xl text-white">
              Contact Me
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-gray-200 w-full h-full relative">
            <Image
              src="/images/hero-1.jpg"
              fill
              alt="Hero Image 1"
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
