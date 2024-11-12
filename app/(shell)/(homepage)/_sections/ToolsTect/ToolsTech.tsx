import data from "./data.json";

export const ToolsTech = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div>
          <h3 className="font-baloo font-bold text-4xl text-center">
            Tools &amp; Technologies I Use
          </h3>
          <p className="mt-4 font-fredoka text-xl text-center">
            I work with a diverse set of tools and technologies to bring
            efficiency, scalability, and creativity to every project. My
            expertise spans front-end and back-end development, ensuring each
            solution is built with modern practices and a user-first approach.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-3 bg-gray-200 rounded-3xl overflow-hidden">
          {data.map((item, index) => (
            <div
              key={index}
              className="aspect-square flex flex-col justify-center items-center p-8"
            >
              <div className="flex gap-4 justify-center flex-wrap">
                <div className="w-20 h-20 rounded-full bg-gray-50" />
                <div className="w-20 h-20 rounded-full bg-gray-50" />
                <div className="w-20 h-20 rounded-full bg-gray-50" />
                <div className="w-20 h-20 rounded-full bg-gray-50" />
                <div className="w-20 h-20 rounded-full bg-gray-50" />
                <div className="w-20 h-20 rounded-full bg-gray-50" />
                <div className="w-20 h-20 rounded-full bg-gray-50" />
                <div className="w-20 h-20 rounded-full bg-gray-50" />
                <div className="w-20 h-20 rounded-full bg-gray-50" />
              </div>
              <div className="mt-8">
                <h4 className="font-bold text-2xl font-baloo text-center">
                  {item.title}
                </h4>
                <p className="mt-4 font-fredoka text-center">
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
