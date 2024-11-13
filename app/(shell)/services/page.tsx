import { FaPlug } from "react-icons/fa6";
import { Accordion } from "./_components/Accordion";
import { MdWidgets } from "react-icons/md";

export default function Page() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="py-20">
          <h2 className="font-baloo font-bold text-5xl text-center">
            Discover Your Digital Solutions
          </h2>
          <p className="mt-4 text-center font-fredoka">
            With the digital world at our fingertips, I help transform your
            vision into a vibrant reality.
          </p>
          <p className="text-center font-fredoka">
            Together, we’ll explore the possibilities and build something
            exceptional.
          </p>
          <div className="mt-16 grid grid-cols-5 gap-8">
            <div className="border aspect-[3/2] rounded-2xl flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gray-200" />
              <h3 className="font-baloo font-semibold text-xl">Web Design</h3>
            </div>
            <div className="border aspect-[3/2] rounded-2xl flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gray-200" />
              <h3 className="font-baloo font-semibold text-xl">
                Web Development
              </h3>
            </div>
            <div className="border aspect-[3/2] rounded-2xl flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gray-200" />
              <h3 className="font-baloo font-semibold text-xl">
                Mobile Development
              </h3>
            </div>
            <div className="border aspect-[3/2] rounded-2xl flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gray-200" />
              <h3 className="font-baloo font-semibold text-xl">
                Database Management
              </h3>
            </div>
            <div className="border aspect-[3/2] rounded-2xl flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gray-200" />
              <h3 className="font-baloo font-semibold text-xl">
                SEO Optimization
              </h3>
            </div>
          </div>
        </div>

        <div className="py-20">
          <h2 className="font-baloo font-bold text-5xl text-center">
            Elevate Your Digital Presence
          </h2>
          <p className="mt-4 font-fredoka text-center">
            My services open the door to a vibrant digital world. From engaging
            designs to flawless development and optimization, we’re here to make
            your digital dreams a reality.
          </p>
          <p className="font-fredoka text-center">
            Discover the journey to online excellence with me.
          </p>
          <div className="mt-16 flex flex-col items-center gap-8">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={index}
                className="w-full border rounded-2xl p-8 max-w-screen-xl"
              >
                <div className="flex items-center gap-8">
                  <div className="w-32 h-32 bg-gray-200 rounded-2xl" />
                  <div className="flex-1">
                    <h3 className="font-baloo font-bold text-2xl">
                      Web Design
                    </h3>
                    <p className="mt-2 font-fredoka">
                      Blend creativity with strategy to build visually stunning,
                      user-centered websites. Focusing on intuitive navigation,
                      responsive layouts, and modern aesthetics, we craft
                      designs that not only captivate visitors but also drive
                      engagement and align with your brand's identity.
                    </p>
                  </div>
                  <button className="w-48 py-4 px-8 font-baloo font-semibold bg-gray-200 rounded-full">
                    Contact Me
                  </button>
                </div>
                <div className="mt-8">
                  <Accordion label="Key Features">
                    <div>
                      <div className="border-t flex">
                        <div className="flex items-center gap-4 px-8 py-4 border-r">
                          <MdWidgets />
                          <div>Web Design</div>
                        </div>
                        <div className="flex-1 px-8 py-2">
                          We create unique, bespoke designs that reflect your
                          brand's personality and values.
                        </div>
                      </div>
                      <div className="border-t flex">
                        <div className="flex items-center gap-4 px-8 py-4 border-r">
                          <MdWidgets />
                          <div>Web Design</div>
                        </div>
                        <div className="flex-1 px-8 py-2">
                          We create unique, bespoke designs that reflect your
                          brand's personality and values.
                        </div>
                      </div>
                      <div className="border-t flex">
                        <div className="flex items-center gap-4 px-8 py-4 border-r">
                          <MdWidgets />
                          <div>Web Design</div>
                        </div>
                        <div className="flex-1 px-8 py-2">
                          We create unique, bespoke designs that reflect your
                          brand's personality and values.
                        </div>
                      </div>
                    </div>
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-20">
          <h2 className="font-baloo font-bold text-5xl text-center">
            Why Choose Me?
          </h2>
          <p className="mt-4 font-fredoka text-center">
            When you choose me for your web development needs, you gain access
            to a range of benefits that make your project a success.
          </p>
          <p className="font-fredoka text-center">
            Here's why working with me is the right choice
          </p>
          <div className="mt-16 flex justify-center">
            <div className="grid grid-cols-2 gap-8 max-w-screen-xl">
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <div key={index} className="border rounded-2xl p-8">
                  <div className="flex items-center gap-8">
                    <div className="w-20 h-20 bg-gray-200 rounded-full" />
                    <div className="flex-1">
                      <h3 className="font-baloo font-bold text-2xl">
                        Web Design
                      </h3>
                      <p className="font-fredoka">
                        Blend creativity with strategy to build visually
                        stunning, user-centered websites.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
