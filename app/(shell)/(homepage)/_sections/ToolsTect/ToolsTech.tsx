import Image from "next/image";
import data from "./data.json";

export const ToolsTech = () => {
  return (
    <div className="py-20 bg-primary-light/5">
      <div className="container mx-auto">
        <div>
          <h3 className="font-baloo font-bold text-4xl text-center text-primary">
            Tools &amp; Technologies I Use
          </h3>
          <p className="mt-4 font-fredoka text-xl text-center text-gray-600">
            I work with a diverse set of tools and technologies to bring
            efficiency, scalability, and creativity to every project. My
            expertise spans front-end and back-end development, ensuring each
            solution is built with modern practices and a user-first approach.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-3 bg-primary-pale/10 rounded-3xl overflow-hidden">
          {data.map((item, index) => (
            <div
              key={index}
              className="aspect-square flex flex-col justify-center items-center p-8"
            >
              <div className="flex gap-4 justify-center flex-wrap">
                {item.items.map((icon, iIcon) => (
                  <div
                    key={iIcon}
                    className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center"
                  >
                    <Image
                      src={icon.image}
                      alt={icon.title}
                      width={40}
                      height={40}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="font-bold text-2xl font-baloo text-center text-primary">
                  {item.title}
                </h4>
                <p className="mt-4 font-fredoka text-center text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
