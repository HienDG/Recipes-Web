import { Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

import Layout from "./components/Layout";
import { Home, Menu } from "./pages";

const App = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </Layout>
  );
};

export default App;
