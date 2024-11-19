"use client";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import { FaCalendar, FaPencil, FaTags, FaUser } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";

export function Content() {
  return (
    <div>
      <div className="relative h-[calc(100vh-396px)]">
        <Image
          src={faker.image.url()}
          fill
          alt={faker.book.title()}
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
          <h1 className="font-baloo text-5xl font-bold text-accent">
            {faker.book.title()}
          </h1>
        </div>
      </div>
      <div>
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-16">
            <div className="col-span-2 pr-20 border-r py-10">
              <div className="pb-10 border-b">
                <h2 className="font-baloo font-bold text-2xl text-accent">
                  Introduction
                </h2>
                <p className="font-fredoka text-subtle">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-10">
                <div>
                  <h3 className="font-baloo font-bold text-3xl text-accent">
                    Where does it come from?
                  </h3>
                  <p className="mt-4 font-fredoka text-subtle">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32. The standard chunk of Lorem Ipsum used since the
                    1500s is reproduced below for those interested. Sections
                    1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                    Cicero are also reproduced in their exact original form,
                    accompanied by English versions from the 1914 translation by
                    H. Rackham.
                  </p>
                </div>
                <div>
                  <h3 className="font-baloo font-bold text-3xl text-accent">
                    Why do we use it?
                  </h3>
                  <p className="mt-4 font-fredoka text-subtle">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                </div>
                <div>
                  <h3 className="font-baloo font-bold text-3xl text-accent">
                    Where can I get some?
                  </h3>
                  <p className="mt-4 font-fredoka text-subtle">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-10">
              <div className="grid grid-rows-2 grid-flow-col gap-x-4 gap-y-8 font-fredoka">
                <div className="mt-2 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
                  <div className="block md:hidden">
                    <FaUser />
                  </div>
                  <div className="font-fredoka text-highlight font-semibold text-xs tracking-widest">
                    Author
                  </div>
                  <div className="font-fredoka font-bold text-white">
                    Dikry Alfiannur
                  </div>
                </div>
                <div className="mt-2 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
                  <div className="block md:hidden">
                    <FaCalendar />
                  </div>
                  <div className="font-fredoka text-highlight font-semibold text-xs tracking-widest">
                    Publication Date
                  </div>
                  <div className="font-fredoka font-bold text-white">
                    20, Oct 2024
                  </div>
                </div>

                <div className="mt-2 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
                  <div className="block md:hidden">
                    <MdCategory />
                  </div>
                  <div className="font-fredoka text-highlight font-semibold text-xs tracking-widest">
                    Category
                  </div>
                  <div className="font-fredoka font-bold text-white">
                    Front-End Development
                  </div>
                </div>
                <div className="mt-2 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
                  <div className="block md:hidden">
                    <FaTags />
                  </div>
                  <div className="font-fredoka text-highlight font-semibold text-xs tracking-widest">
                    Tags
                  </div>
                  <ul className="flex flex-wrap items-center gap-4 font-fredoka font-bold text-white">
                    <li>#Javascript</li>
                    <li>#React</li>
                    <li>#Tailwind</li>
                  </ul>
                </div>
              </div>

              <div className="mt-16">
                <h3 className="font-baloo font-bold text-xl text-center text-accent">
                  Table of Contents
                </h3>
                <ul className="mt-4 bg-primary-lighten rounded-2xl p-8 list-disc list-inside text-subtle shadow">
                  <li>Introduction</li>
                  <li>Where does it come from?</li>
                  <li>Where does it come from?</li>
                  <li>Where does it come from?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
