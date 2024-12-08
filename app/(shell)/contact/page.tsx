"use client";
import { MdDeveloperMode } from "react-icons/md";

export default function Page() {
  return (
    <div className="py-40 container mx-auto">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="bg-main rounded-full p-4">
          <MdDeveloperMode className="text-highlight" size={128} />
        </div>
        <h2 className="text-highlight font-fredoka text-4xl font-bold tracking-widest">
          Under Development
        </h2>
      </div>
    </div>
  );
}
