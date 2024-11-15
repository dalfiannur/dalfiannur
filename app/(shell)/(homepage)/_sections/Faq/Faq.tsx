import { MdQuestionAnswer } from "react-icons/md";
import { Accordion } from "../../_components/Accordion";
import data from "./data.json";
import { FaChevronRight, FaQuestion } from "react-icons/fa6";

export const Faq = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div>
          <h3 className="font-bold font-baloo text-4xl text-center text-primary">
            Frequently Asked Questions
          </h3>
          <p className="mt-4 font-fredoka text-xl text-center text-gray-600">
            Our FAQ section covers common questions to help you understand my
            services, workflow, and technical expertise.
          </p>
        </div>
        <div className="mt-16 flex gap-32">
          <div className="flex-1 flex flex-col gap-4">
            {data.map((item, index) => (
              <Accordion key={index} label={item.question}>
                <p className="font-fredoka text-lg text-gray-600">
                  {item.answer}
                </p>
              </Accordion>
            ))}
          </div>
          <div className="flex-1 max-w-xl aspect-square h-fit bg-primary-light/5 rounded-2xl flex flex-col items-center justify-center">
            <MdQuestionAnswer size={192} className="text-primary-light" />
            <div className="mt-8">
              <h4 className="text-center text-3xl font-baloo font-bold text-primary">
                Ask your question
              </h4>
              <p className="mt-2 text-center text-xl font-fredoka text-gray-600">
                Feel free to ask questions on any time!
              </p>
            </div>
            <button className="mt-16 w-fit bg-primary-light hover:bg-primary text-white px-8 py-4 font-baloo rounded-full text-xl font-semibold flex items-center gap-4">
              Ask Question
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
