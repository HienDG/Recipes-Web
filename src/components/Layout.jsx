import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

import { MdArrowRight } from "react-icons/md";

import { Navbar, Footer, Sidebar } from "./index";

const Wrapper = styled.main`
  padding-top: 74px;
`;

const BreadCrumb = ({ path }) => {
  const locate = useLocation();

  const isHidden = locate.pathname === "/saves" || locate.pathname === "shopping-list";

  const arr = [];
  const location = [...path].map((item, i) => {
    arr.push(item);
    if (item === "/" || item === "") return { location: "home", path: "/" };
    const replaceStr = item.includes("%20") ? item.replaceAll("%20", " ") : item;
    let temp = arr[i - 1] + "/" + replaceStr;
    arr[i] = temp;

    return { location: replaceStr, path: arr[i] };
  });
  return (
    <div
      className="container md:flex hidden mx-auto md:w-[72rem] max-w-[95%] my-4 text-[1.25rem] gap-3"
      hidden={isHidden}
    >
      {location.map((item, i) => (
        <Link key={i} to={item.path} className="flex flex-row items-center">
          <p className="first-letter:uppercase">{item.location}</p>
          <MdArrowRight />
        </Link>
      ))}
    </div>
  );
};

const Layout = ({ children }) => {
  const location = useLocation();
  const path =
    location.pathname.length === 1 ? [...location.pathname] : location.pathname.split("/");

  return (
    <div>
      <Navbar />
      <Wrapper>
        <BreadCrumb path={path} />
        <div>{children}</div>
      </Wrapper>
      <div className="w-full max-w-full p-[4rem]" />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Layout;
