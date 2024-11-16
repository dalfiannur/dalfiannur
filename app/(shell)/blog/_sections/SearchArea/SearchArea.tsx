import { FaSearch } from "react-icons/fa";

export const SearchArea = () => {
  return (
    <div>
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-2/3">
          <h1 className="text-center text-5xl font-baloo font-bold text-primary">
            What are you looking for?
          </h1>
          <div className="font-fredoka text-xl text-center mt-4 text-gray-600">
            <p>You can perform basic text searching for words and phrases.</p>
            <p>
              Select the category below to get results from that particular
              category.
            </p>
          </div>
          <div className="mt-16 flex items-center border focus-within:border-primary-light focus-within:text-primary-light rounded-full px-2">
            <div className="px-4">
              <FaSearch size={20} />
            </div>
            <input
              placeholder="Search..."
              className="flex-1 py-6 focus:outline-none font-fredoka text-primary text-lg"
            />
            <div className="flex gap-2 items-center">
              <div className="border-l px-8 font-fredoka text-primary">
                Category
              </div>
              <button className="bg-primary-light text-white rounded-full px-8 py-4 w-48 font-baloo font-medium text-xl">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
