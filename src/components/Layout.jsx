import { memo, useContext, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

import { MdArrowRight } from "react-icons/md";

import { SearchContext } from "../context";

import { useLoading } from "../hooks";

import { Navbar, Footer, Sidebar } from "./index";
import { LoadingSpinner } from "./ui";

const Wrapper = styled.main`
  padding-top: 73px;
  background-color: #f0f0f0;
`;

const BreadCrumb = ({ path }) => {
  const containerRef = useRef(null);

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
    <div className="bg-white shadow-md" ref={containerRef}>
      <section
        className="container md:flex hidden mx-auto md:w-[1200px] px-5 max-w-full text-[1.25rem] gap-3 py-6"
        hidden={isHidden}
      >
        {location.map((item, i) => (
          <Link key={i} to={item.path} className="flex flex-row items-center">
            <p className="first-letter:uppercase font-semibold">{item.location}</p>
            <MdArrowRight />
          </Link>
        ))}
      </section>
    </div>
  );
};

const Layout = ({ children }) => {
  const searchCtx = useContext(SearchContext);
  const location = useLocation();
  const isLoading = useLoading(1.5, location.pathname, searchCtx.query);

  const path =
    location.pathname.length === 1 ? [...location.pathname] : location.pathname.split("/");

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, searchCtx.query]);

  return (
    <>
      <Navbar />
      <Wrapper>
        <BreadCrumb path={path} />
        {isLoading ? <LoadingSpinner /> : <div className="mt-[30px]">{children}</div>}
      </Wrapper>
      <Sidebar />
      <Footer />
    </>
  );
};

export default memo(Layout);
