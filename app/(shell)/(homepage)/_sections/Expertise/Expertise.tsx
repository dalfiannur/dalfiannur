"use client";

import { useMemo, useState } from "react";
import data from "./data.json";

const titles = data.map((d) => d.title);

export const Expertise = () => {
  const [selected, setSelected] = useState(0);
  const selectedData = useMemo(() => data[selected], [selected]);

  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl text-center font-bold font-baloo">
            My Expertise
          </h2>
          <p className="mt-4 text-xl text-center font-fredoka max-w-6xl">
            With a passion for crafting seamless digital experiences, I
            specialize in transforming ideas into intuitive, high-performing
            interfaces that captivate and engage users.
          </p>
        </div>
        <div className="mt-16 flex gap-16">
          <ul className="flex-1 flex flex-col gap-4 font-baloo">
            {titles.map((title, index) => (
              <li key={index} className="border-b pb-4">
                <button
                  className="flex gap-8 items-center"
                  onClick={() => setSelected(index)}
                >
                  <div className="bg-gray-100 rounded-xl w-16 h-16" />
                  <h3 className="font-bold text-xl">{title}</h3>
                </button>
              </li>
            ))}
          </ul>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-72 h-72 bg-gray-100" />
            <div className="mt-16">
              <h3 className="font-baloo text-xl font-bold">
                {selectedData.title}
              </h3>
              <p className="mt-4 font-fredoka text-lg">
                {selectedData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
