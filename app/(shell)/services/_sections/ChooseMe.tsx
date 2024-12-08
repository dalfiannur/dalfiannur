import { SectionDivider } from "~/app/components/SectionDivider";
import data from "../data.json";

export const ChooseMe = () => {
  return (
    <div className="relative overflow-hidden">
      <SectionDivider />
      <div className="relative z-1 container mx-auto">
        <div className="py-20">
          <h2 className="font-baloo font-bold text-5xl text-center text-accent">
            Why Choose Me?
          </h2>
          <div className="mt-4 text-subtle font-fredoka text-center">
            <p>
              When you choose me for your web development needs, you gain access
              to a range of benefits that make your project a success.
            </p>
            <p>Here&apos;s why working with me is the right choice</p>
          </div>
          <div className="mt-16 flex justify-center">
            <div className="grid grid-cols-2 gap-8 max-w-screen-xl">
              {data.skills.map((skill, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-8 bg-gradient-to-t from-primary-lighten to-primary shadow shadow-accent"
                >
                  <h3 className="font-baloo font-bold text-2xl text-accent">
                    {skill.title}
                  </h3>
                  <p className="mt-2 font-fredoka text-subtle">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
