import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import * as Ui from "./components/ui/index";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));
const SearchResult = lazy(() => import("./pages/SearchResult"));
const Collections = lazy(() => import("./pages/Collections"));
const Bookmarks = lazy(() => import("./pages/Bookmarks"));
const Preview = lazy(() => import("./pages/Preview"));
const CollectionPreview = lazy(() => import("./pages/CollectionPreview"));

const App = () => {
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

        <Route
          path="/saves"
          element={
            <Ui.Suspense>
              <Bookmarks />
            </Ui.Suspense>
          }
        />
        <Route
          path="/results/:id"
          element={
            <Ui.Suspense>
              <Preview />
            </Ui.Suspense>
          }
        />
        <Route
          path="/collections/:id"
          element={
            <Ui.Suspense>
              <CollectionPreview />
            </Ui.Suspense>
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
