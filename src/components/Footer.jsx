import { Link } from "react-router-dom";

import icon from "../assets/images.png";

const footerNav = [
  "About Us",
  "Editorial Process",
  "Privacy Policy",
  "Terms of Use",
  "Careers",
  "Content Licensing",
  "Anti-Racism Pledge",
  "Product Vetting",
  "Advertise",
  "Contact",
];

const Footer = () => {
  // return (
  //   <footer className="mt-[1.25rem] leading-[1.266rem] bg-[#292929] text-[15px] py-[2.625rem] px-[0.875rem]">
  //     <div className="flex items-center justify-center">
  //       <div className="container mx-auto">
  //         <div className="text-[15px] text-white">
  //           <ul className="flex flex-wrap items-center justify-center gap-4">
  //             {footerNav.map((item) => (
  //               <li key={item}>{item}</li>
  //             ))}
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </footer>
  // );

  return (
    <footer className="p-5 bg-[#f2f2f2] md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          to="/"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 gap-4"
        >
          <img src={icon} alt="icon" className="w-[5rem] h-[5rem] rounded-[50%] bg-[#f0f0f0]" />
          Recipes
        </Link>
        <p className="my-6 text-gray-500 ">
          Lorem ipsum is placeholder text commonly used in the graphic
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 ">
          {footerNav.map((item) => (
            <li key={item}>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <span className="text-sm text-gray-500 sm:text-center ">
          © 2021-2022{" "}
          <Link to="/" className="hover:underline">
            Recipes
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
