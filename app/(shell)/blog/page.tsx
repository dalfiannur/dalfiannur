import {
  FaChevronLeft,
  FaChevronRight,
  FaFilter,
  FaList,
} from "react-icons/fa6";
import { SearchArea } from "./_sections/SearchArea";
import Link from "next/link";
import Image from "next/image";
import { faker } from "@faker-js/faker/locale/id_ID";
import { SectionDivider } from "~/app/components/SectionDivider";

export default async function Page() {
  const data = [
    {
      id: 1,
      title: faker.book.title(),
      thumbnail: faker.image.url(),
      description: faker.lorem.paragraph(),
      category: {
        name: faker.book.genre(),
      },
    },
  ];

  return (
    <div className="py-20">
      <SearchArea />
      <div className="mt-20 relative overflow-hidden">
        <SectionDivider />
        <div className="relative z-1 container mx-auto">
          <div className="flex justify-end items-center gap-16">
            <div className="flex items-center gap-4">
              Category
              <FaList />
            </div>
            <div className="flex items-center gap-4">
              Order by <FaFilter />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-16">
            {data.map((item) => (
              <div key={item.id} className="flex">
                <div className="bg-gradient-to-t from-accent/20 text-subtle font-semibold to-transparent rounded-br-lg text-vertical-mixed rotate-180 h-fit px-2 py-4 font-baloo">
                  {item.category.name}
                </div>
                <div className="flex-1">
                  <Link href="/blog/slug-1">
                    <div className="aspect-[3/2] rounded-tr-lg rounded-b-lg relative overflow-hidden">
                      <Image
                        src={item.thumbnail}
                        fill
                        alt={item.title}
                        className="object-cover"
                      />
                    </div>
                  </Link>
                  <div className="mt-4">
                    <div className="flex justify-between">
                      <Link href="/blog/slug-1">
                        <h2 className="font-baloo font-bold text-xl text-accent">
                          {item.title}
                        </h2>
                      </Link>
                      <div className="font-fredoka font-semibold text-subtle/60">
                        8 Min Read
                      </div>
                    </div>
                    <p className="mt-2 font-fredoka text-subtle">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex items-center justify-center gap-20">
            <button className="bg-highlight text-white font-semibold px-8 py-2 rounded-full flex gap-4 items-center font-baloo text-xl">
              <FaChevronLeft size={14} />
              Prev
            </button>
            <button className="bg-highlight text-white font-semibold px-8 py-2 rounded-full flex gap-4 items-center font-baloo text-xl">
              Next <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
