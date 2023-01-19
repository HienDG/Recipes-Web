import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

import * as Ui from "./components/ui/index";
import Layout from "./components/Layout";

import NotFoundPage from "./pages/NotFoundPage";

const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));
const SearchResult = lazy(() => import("./pages/SearchResult"));
const Collections = lazy(() => import("./pages/Collections"));
const Bookmarks = lazy(() => import("./pages/Bookmarks"));
const Preview = lazy(() => import("./pages/Preview"));
const CollectionPreview = lazy(() => import("./pages/CollectionPreview"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Ui.Suspense>
            <Home />
          </Ui.Suspense>
        ),
      },
      {
        path: "/menu",
        element: (
          <Ui.Suspense>
            <Menu />
          </Ui.Suspense>
        ),
      },
      {
        path: "/results",
        element: (
          <Ui.Suspense>
            <SearchResult />
          </Ui.Suspense>
        ),
      },
      {
        path: "/collections",
        element: (
          <Ui.Suspense>
            <Collections />
          </Ui.Suspense>
        ),
      },
      {
        path: "/saves",
        element: (
          <Ui.Suspense>
            <Bookmarks />
          </Ui.Suspense>
        ),
      },
      {
        path: "/results/:id",
        element: (
          <Ui.Suspense>
            <Preview />
          </Ui.Suspense>
        ),
      },
      {
        path: "/collections/:id",
        element: (
          <Ui.Suspense>
            <CollectionPreview />
          </Ui.Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const App = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default App;
