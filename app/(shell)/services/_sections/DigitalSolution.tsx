import Image from "next/image";
import data from "../data.json";

export const DigitalSolution = () => {
  return (
    <div className="container mx-auto">
      <div className="py-40">
        <h2 className="font-baloo font-bold text-5xl text-center text-accent">
          Discover Your Digital Solutions
        </h2>
        <div className="mt-4 text-subtle">
          <p className="text-center font-fredoka">
            With the digital world at our fingertips, I help transform your
            vision into a vibrant reality.
          </p>
          <p className="text-center font-fredoka">
            Together, we’ll explore the possibilities and build something
            exceptional.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-5 gap-8">
          {data.services.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="aspect-[3/2] rounded-2xl flex flex-col items-center justify-center gap-4 bg-gradient-to-t from-primary-lighten to-primary shadow shadow-accent"
            >
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt="item.title"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="font-baloo font-semibold text-xl text-accent">
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
