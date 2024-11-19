import { SectionDivider } from "~/app/components/SectionDivider"

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
            <p>
              Here's why working with me is the right choice
            </p>
          </div>
          <div className="mt-16 flex justify-center">
            <div className="grid grid-cols-2 gap-8 max-w-screen-xl">
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <div key={index} className="rounded-2xl p-8 bg-gradient-to-t from-primary-lighten to-primary shadow shadow-accent">
                  <div className="flex items-center gap-8">
                    <div className="w-20 h-20 bg-gray-200 rounded-full" />
                    <div className="flex-1">
                      <h3 className="font-baloo font-bold text-2xl text-accent">
                        Web Design
                      </h3>
                      <p className="font-fredoka text-subtle">
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
  )
}
