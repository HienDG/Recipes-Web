import { Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect, lazy, useContext } from "react";

import { SearchContext } from "./context";

import * as Ui from "./components/ui/index";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));
const SearchResult = lazy(() => import("./pages/SearchResult"));
const Collections = lazy(() => import("./pages/Collections"));

const App = () => {
  const searchCtx = useContext(SearchContext);
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, searchCtx.query]);

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <Ui.Suspense>
              <Home />
            </Ui.Suspense>
          }
        />
        <Route
          path="/menu"
          element={
            <Ui.Suspense>
              <Menu />
            </Ui.Suspense>
          }
        />
        <Route
          path="/results"
          element={
            <Ui.Suspense>
              <SearchResult />
            </Ui.Suspense>
          }
        />
        <Route
          path="/collections"
          element={
            <Ui.Suspense>
              <Collections />
            </Ui.Suspense>
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
