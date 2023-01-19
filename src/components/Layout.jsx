import { memo, useContext, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { useLocation, Link, useMatch, Outlet } from "react-router-dom";

import { MdArrowRight } from "react-icons/md";

import { SearchContext } from "../context";

import { useLoading } from "../hooks";

import { Navbar, Footer, Sidebar } from "./index";
import { LoadingSpinner } from "./ui";

const Wrapper = styled.main`
  padding-top: 73px;
  background-color: #f0f0f0;
  min-height: 100vh;
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
        className="container md:flex hidden mx-auto md:w-[1200px] px-5 max-w-full text-[1.25rem] gap-3 py-2"
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
        <div className={`mt-[30px] ${isLoading ? "h-screen" : "h-full"} min-h-screen`}>
          <Outlet />
        </div>
      </Wrapper>
      {isLoading ? (
        <div className="fixed bg-white top-[73px] h-screen left-0 right-0 z-50">
          <LoadingSpinner />
        </div>
      ) : null}
      <Sidebar />
      <Footer />
    </>
  );
};

export default memo(Layout);
