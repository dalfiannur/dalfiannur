import {
  FaChevronLeft,
  FaChevronRight,
  FaFilter,
  FaList,
} from "react-icons/fa6";
import { SearchArea } from "./_sections/SearchArea";
import Link from "next/link";

export default function Page() {
  return (
    <div className="py-20">
      <SearchArea />
      <div className="mt-20">
        <div className="container mx-auto">
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <div key={index} className="flex">
                <div className="bg-gradient-to-t from-gray-200 to-transparent rounded-br-lg text-vertical-mixed rotate-180 h-fit px-2 py-4 font-baloo">
                  Lorem Ipsum
                </div>
                <div className="flex-1">
                  <Link href="/blog/slug-1">
                    <div className="bg-gray-100 aspect-[3/2] rounded-tr-lg rounded-b-lg" />
                  </Link>
                  <div className="mt-4">
                    <div className="flex justify-between">
                      <Link href="/blog/slug-1">
                        <h2 className="font-baloo font-medium text-xl">
                          What is Lorem Ipsum?
                        </h2>
                      </Link>
                      <div className="font-fredoka">8 Min Read</div>
                    </div>
                    <p className="mt-2 font-fredoka">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex items-center justify-center gap-20">
            <button className="bg-gray-100 px-8 py-2 rounded-full flex gap-4 items-center font-baloo text-xl">
              <FaChevronLeft size={14} />
              Prev
            </button>
            <button className="bg-gray-200 px-8 py-2 rounded-full flex gap-4 items-center font-baloo text-xl">
              Next <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
