import { Link } from "react-router-dom";

import logo from "../assets/logo/logo.png";

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
  return (
    <footer className="p-5 bg-white md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          to="/"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 gap-4"
        >
          <img src={logo} alt="icon" className="w-[5rem] h-[5rem] rounded-[50%] bg-[#f0f0f0]" />
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
