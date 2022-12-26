import background from "../../assets/hero/Christmas-GettyImages.png";

const HrMiddle = ({ handleNav, title }) => {
  return (
    <section className="text-gray-600 body-font" title="Middle">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col gap-4">
        <img
          className=" w-full mb-10 object-cover object-center rounded"
          alt="hero"
          src={background}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Christmas Main Dishes
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <div className="flex justify-center">
            <button
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              onClick={handleNav.bind(null, title)}
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HrMiddle;
