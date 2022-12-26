import { BsFacebook, BsTwitter, BsFillChatFill } from "react-icons/bs";

import { RatingStar } from "../ui";

const HrBanner = ({ collection, length }) => {
  return (
    <div className="bg-[#f0f0f0]">
      <div className="container px-5 py-24 mx-auto w-[1200px] max-w-full">
        <div className="flex flex-wrap mx-auto lg:w-4/5">
          <img
            alt={collection.id}
            className="object-cover object-center w-full rounded h-[400px] lg:w-1/2"
            src={collection.image_url}
          />
          <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
            <h2 className="text-sm tracking-widest text-gray-500 title-font">
              Public by Hien Dang
            </h2>
            <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
              {collection.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <RatingStar />
                <span className="ml-3 text-gray-600">4 Reviews</span>
              </span>
              <span className="flex gap-2 py-2 pl-3 ml-3 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <BsFacebook />
                </a>
                <a className="text-gray-500">
                  <BsTwitter />
                </a>
                <a className="text-gray-500">
                  <BsFillChatFill />
                </a>
              </span>
            </div>
            <p className="mb-6 text-lg font-bold">{length} Recipes</p>
            <p className="text-xl leading-relaxed first-letter:uppercase">
              {collection.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrBanner;
