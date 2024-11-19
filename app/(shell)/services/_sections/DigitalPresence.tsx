import { SectionDivider } from "~/app/components/SectionDivider"
import { Accordion } from "../_components/Accordion"
import { MdWidgets } from "react-icons/md"
import { services } from '../data.json';
import Image from "next/image";

const getFeatures = (features: {title: string, description: string}[]) => {
  const titles = features.map((f) => f.title)
  const descriptions = features.map((f) => f.description)
  return { titles, descriptions }
}

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
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full rounded-2xl p-8 max-w-screen-xl bg-gradient-to-b from-primary-lighten to-primary shadow shadow-accent"
              >
                <div className="flex items-center gap-8">
                  <div className="w-32 h-32 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <Image src={service.icon} alt={service.title} width={64} height={64} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-baloo font-bold text-2xl text-accent">
                      {service.title}
                    </h3>
                    <p className="mt-2 font-fredoka text-subtle">
                     {service.description}
                    </p>
                  </div>
                  <button className="w-48 py-3 px-6 font-baloo font-bold text-white bg-highlight rounded-full text-xl">
                    Contact Me
                  </button>
                </div>
                <div className="mt-8">
                  <Accordion label="Key Features">
                    <div className="flex">
                      <div className="w-min">
                        {getFeatures(service.features).titles.map((title, key) => (
                          <div
                            key={key}
                            className="flex items-center gap-4 px-8 py-4 border-r border-t border-mute text-white text-nowrap"
                          >
                            <MdWidgets />
                            {title}
                          </div>
                        ))}
                      </div>
                      <div className="flex-1">
                        {getFeatures(service.features).descriptions.map((description, key) => (
                          <div
                            key={key}
                            className="flex-1 px-8 py-4 text-white border-t border-mute"
                          >
                            {description}
                          </div>
                        ))}
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
