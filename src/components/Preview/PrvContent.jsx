import fracty from "fracty";
import styled from "styled-components";

import { AiOutlinePrinter } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

import { NUTRITION } from "../utils";

const Item = styled.li`
  margin-left: 0.8125rem;
  margin-bottom: 1rem;
  &::before {
    content: "";
    margin-left: -0.8125rem;
    margin-top: 0.75rem;
    width: 0.3125rem;
    height: 0.3125rem;
    background: #e7ab46;
    position: absolute;
    border-radius: 50%;
  }
`;

const Sale = styled.div`
  margin-bottom: -10px;
  margin-top: -30px;
  opacity: 100;
  transition: 500ms all;
`;

const Relative = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: -16px;
  background: #fff;
  padding: 0 16px;
`;

const Advert = styled.div`
  position: relative;
  height: 24px;
  bottom: -48px;
  text-align: center;
  width: 100%;
  color: #595959;
  font: 400 12px/16px "Lato", sans-serif;

  @media only screen and (max-width: 767px) {
    bottom: -60px;
  }
`;

const PrvContent = ({ recipe, scrollTo }) => {
  const ingredients = recipe.ingredients ? [...recipe.ingredients] : [];

  return (
    <div className="grid-in-content my-[1.5rem]">
      <div className="w-full my-[30px] h-[500px] overflow-hidden">
        <div>
          <div className="flex items-center justify-center h-[500px] bg-[#ccc]">
            <img
              src={recipe.image_url}
              alt={recipe.title}
              className="object-center object-cover h-full w-full"
            />
          </div>
        </div>
      </div>

      <div aria-label="time-serving">
        <div className="my-[3rem] p-6 bg-[#f5f6ea]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
            <div className="text-lg leading-7">
              <div className="font-bold">Prep Time:</div>
              <div>10 mins</div>
            </div>
            <div className="text-lg leading-7">
              <div className="font-bold">Cook Time:</div>
              <div>{recipe.cooking_time} mins</div>
            </div>
            <div className="text-lg leading-7">
              <div className="font-bold">Total Time:</div>
              <div>{recipe.cooking_time + 10} mins</div>
            </div>
            <div className="text-lg leading-7">
              <div className="font-bold">Servings:</div>
              <div>{recipe.servings}</div>
            </div>
            <div className="text-lg leading-7">
              <div className="font-bold">Yield:</div>
              <div>{recipe.servings} servings</div>
            </div>
          </div>
          <div className="border-[0,0,0,.15] border-t-2 border-solid text-lg leading-7 mt-6 pt-6">
            <button
              className="p-2 font-light hover:font-bold"
              onClick={scrollTo}
              data-tag="nutrition"
            >
              Jump to Nutrition Facts
            </button>
          </div>
        </div>
      </div>

      <div aria-label="ingredients" className="flex flex-col gap-4 md:flex-row md:gap-1">
        <div className="flex-1 pr-4 text-lg leading-7">
          <div>
            <h2 className="text-[2.25rem] mb-8 capitalize font-bold py-4">ingredients</h2>
          </div>
          <ul>
            {ingredients.map((ingredient, i) => (
              <Item key={ingredient.description + i}>
                <p className="">
                  <span title="quantity" className={`${ingredient.quantity ? "mr-[5px]" : ""}`}>
                    {ingredient.quantity ? fracty(ingredient.quantity).toString() : ""}
                  </span>
                  <span title="unit" className={`${ingredient.unit ? "mr-[5px]" : ""}`}>
                    {ingredient.unit}
                  </span>
                  <span title="description">{ingredient.description}</span>
                </p>
              </Item>
            ))}
          </ul>
        </div>
        <div className="mt-5 md:max-w-[15rem] max-w-full border-2 border-solid border-[#e6e6e6] rounded-[4px] min-h-[9.5rem] h-full flex-1">
          <div>
            <div className="m-0">
              <Sale className="block p-0 text-center">
                <Relative>
                  <div className="mr-2">
                    <MdLocationOn className="fill-[#E7AB47] text-[1.5rem]" />
                  </div>
                  <h3 className="text-lg font-bold">Local Offers</h3>
                </Relative>
                <div className="flex items-center justify-center gap-2 mt-6">
                  <p>00000</p>
                  <button className="hover:text-[#d54125]">Change</button>
                </div>
              </Sale>
              <div className="mx-auto mt-6 text-center transition-all">
                <div className="text-[14px] px-4 leading-5">
                  Oops! We cannot find any ingredients on sale near you. Do we have the correct zip
                  code?
                </div>
              </div>
            </div>
          </div>
          <Advert>ADVERTISEMENT</Advert>
        </div>
      </div>
      <div aria-label="directions" className="my-[3rem]">
        <h2 className="text-[2.25rem]  leading-[2.75rem] mb-8 font-bold">Directions</h2>
        <ol>
          {[...Array(4)].map((_, index) => (
            <li key={index} className="mb-8 text-lg">
              <p className="font-extrabold capitalize">step {index + 1}:</p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </li>
          ))}
        </ol>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-[#d54215] font-bold leading-5 uppercase text-white hover:bg-[#b53811] py-[14px] px-8">
          i make it
        </button>
        <button className="font-bold leading-5 border-[0.1875rem] hover:bg-[#d54215] border-[#d54215] border-solid flex items-center justify-center uppercase gap-2 group/print">
          <p className="group-hover/print:text-white">print</p>
          <AiOutlinePrinter className="fill-[#d54215] text-2xl group-hover/print:fill-white" />
        </button>
      </div>

      <div
        title="nutrition"
        className="border-t-[1px] border-solid border-[rgba(0,0,0,.15)] font-sans"
        id="nutrition"
      >
        <div className="mb-6">
          <h2 className="mt-[3rem] mb-4 text-[2.25rem] leading-[2.75rem] font-bold capitalize">
            Nutrition Facts
            <span className="ml-2 text-lg leading-[1.75rem] font-normal mt-2 inline-block lowercase">
              (per serving)
            </span>
          </h2>
          <div className="w-full">
            <div className="flex flex-wrap gap-3 text-lg md:gap-6">
              <div className="flex-1 w-full">
                <span className="block p-[2px] font-bold">585</span>
                <span className="p-[2px] block">Calories</span>
              </div>
              <div className="flex-1 w-full">
                <span className="block p-[2px] font-bold">41g</span>
                <span className="p-[2px] block">Fat</span>
              </div>
              <div className="flex-1 w-full">
                <span className="block p-[2px] font-bold">1g</span>
                <span className="p-[2px] block">Carbs</span>
              </div>
              <div className="flex-1 w-full">
                <span className="block p-[2px] font-bold">52g</span>
                <span className="p-[2px] block">Protein</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3">
            <div className="bg-white">
              <div className="lg:p-6 md:p-4 p-2 mt-6 mb-[3rem] border-[1px] border-solid border-[rgba(0,0,0,.15)]">
                <div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">Nutrition Facts</h2>
                    <p className="text-lg">Servings Per Recipe: {recipe.servings}</p>
                    <p className="text-lg">Calories: 585</p>
                  </div>
                  <div className="text-lg leading-7 before:mt-6 before:block">
                    <div className="text-lg leading-7 text-right border-y border-[rgba(0,0,0,.15)] border-solid border-collapse">
                      <p className="py-2">% Daily Value *</p>
                    </div>
                    <ul className="text-base border-collapse">
                      {NUTRITION.map((item) => (
                        <li
                          key={item.label}
                          className="border-y border-[rgba(0,0,0,.15)] border-solid border-collapse"
                        >
                          <p className="inline-block w-[75%] py-2 ">
                            <span className="mr-2 font-bold">{item.label}:</span>
                            {item.quantity}
                          </p>
                          <p className="inline-block w-[25%] text-right py-2">{item.percent}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4  text-base text-[rgba(0,0,0,.65)]">
                      <p className="mb-4">
                        * Percent Daily Values are based on a 2,000 calorie diet. Your daily values
                        may be higher or lower depending on your calorie needs.
                      </p>
                      <p className="mb-4">
                        ** Nutrient information is not available for all ingredients. Amount is
                        based on available nutrient data.
                      </p>
                      <p className="mb-4">
                        (-) Information is not currently available for this nutrient. If you are
                        following a medically restrictive diet, please consult your doctor or
                        registered dietitian before preparing this recipe for personal consumption.
                      </p>
                      <p className="mb-4">
                        Powered by the ESHA Research Database © 2018, ESHA Research, Inc. All Rights
                        Reserved
                      </p>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrvContent;
