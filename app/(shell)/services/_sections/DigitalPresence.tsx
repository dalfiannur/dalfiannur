import { SectionDivider } from "~/app/components/SectionDivider"
import { Accordion } from "../_components/Accordion"
import { MdWidgets } from "react-icons/md"

export const DigitalPresence = () => {
  return (
    <div className="relative overflow-hidden">
      <SectionDivider />
      <div className="relative z-1 container mx-auto">
        <div className="py-20">
          <h2 className="font-baloo font-bold text-5xl text-center text-accent">
            Elevate Your Digital Presence
          </h2>
          <div className="mt-4 text-subtle">
            <p className="font-fredoka text-center">
              My services open the door to a vibrant digital world. From engaging
              designs to flawless development and optimization, we’re here to make
              your digital dreams a reality.
            </p>
            <p className="font-fredoka text-center">
              Discover the journey to online excellence with me.
            </p>
          </div>
          <div className="mt-16 flex flex-col items-center gap-8">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={index}
                className="w-full rounded-2xl p-8 max-w-screen-xl bg-gradient-to-b from-primary-lighten to-primary shadow shadow-accent"
              >
                <div className="flex items-center gap-8">
                  <div className="w-32 h-32 bg-accent rounded-2xl" />
                  <div className="flex-1">
                    <h3 className="font-baloo font-bold text-2xl text-accent">
                      Web Design
                    </h3>
                    <p className="mt-2 font-fredoka text-subtle">
                      Blend creativity with strategy to build visually stunning,
                      user-centered websites. Focusing on intuitive navigation,
                      responsive layouts, and modern aesthetics, we craft
                      designs that not only captivate visitors but also drive
                      engagement and align with your brand's identity.
                    </p>
                  </div>
                  <button className="w-48 py-3 px-6 font-baloo font-bold text-white bg-highlight rounded-full text-xl">
                    Contact Me
                  </button>
                </div>
                <div className="mt-8">
                  <Accordion label="Key Features">
                    <div>
                      <div className="border-t border-mute flex items-center">
                        <div className="flex items-center gap-4 px-8 py-4 border-r border-mute text-white">
                          <MdWidgets />
                          <div>Web Design</div>
                        </div>
                        <div className="flex-1 px-8 py-2 text-white">
                          We create unique, bespoke designs that reflect your
                          brand's personality and values.
                        </div>
                      </div>
                      <div className="border-t border-mute flex items-center">
                        <div className="flex items-center gap-4 px-8 py-4 border-r border-mute text-white">
                          <MdWidgets />
                          <div>Web Design</div>
                        </div>
                        <div className="flex-1 px-8 py-2 text-white">
                          We create unique, bespoke designs that reflect your
                          brand's personality and values.
                        </div>
                      </div>
                      <div className="border-t border-mute flex items-center">
                        <div className="flex items-center gap-4 px-8 py-4 border-r border-mute text-white">
                          <MdWidgets />
                          <div>Web Design</div>
                        </div>
                        <div className="flex-1 px-8 py-2 text-white">
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
      </div>
    </div>
  )
}
