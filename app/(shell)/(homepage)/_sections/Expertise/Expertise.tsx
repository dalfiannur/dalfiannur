"use client";

import { useMemo, useState } from "react";
import data from "./data.json";

const titles = data.map((d) => d.title);

export const Expertise = () => {
  const [selected, setSelected] = useState(0);
  const selectedData = useMemo(() => data[selected], [selected]);

  return (
    <div className="py-20 bg-primary-light/5">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl text-center font-bold font-baloo text-primary">
            My Expertise
          </h2>
          <p className="mt-4 text-xl text-center font-fredoka max-w-6xl text-gray-600">
            With a passion for crafting seamless digital experiences, I
            specialize in transforming ideas into intuitive, high-performing
            interfaces that captivate and engage users.
          </p>
        </div>
        <div className="mt-16 flex gap-16">
          <ul className="flex-1 flex flex-col gap-4 font-baloo">
            {titles.map((title, index) => (
              <li
                key={index}
                className="border-b border-gray-200 text-gray-950 hover:text-primary"
              >
                <button
                  className="flex gap-8 pb-4 items-center w-full"
                  onClick={() => setSelected(index)}
                >
                  <div className="bg-primary-pale/30 rounded-xl w-16 h-16" />
                  <h3 className="font-bold text-xl">{title}</h3>
                </button>
              </li>
            ))}
          </ul>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-72 h-72 bg-primary" />
            <div className="mt-16">
              <h3 className="font-baloo text-xl font-bold text-primary">
                {selectedData.title}
              </h3>
              <p className="mt-4 font-fredoka text-lg text-gray-600">
                {selectedData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
