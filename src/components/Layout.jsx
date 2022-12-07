import styled from "styled-components";

import Navbar from "./Navbar";
import Recipes from "./Recipes";

const Wrapper = styled.main`
  padding-top: 66px;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <div>{children}</div>
      </Wrapper>
    </div>
  );
};

export default Layout;
