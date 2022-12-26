import styled from "styled-components";

import { AiFillWarning } from "react-icons/ai";

const Error = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 96px 0;
  svg {
    fill: red;
    font-size: 4rem;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.75rem;
  }
`;

const ErrorMessage = () => {
  return (
    <div>
      <Error>
        <div>
          <AiFillWarning />
        </div>
        <p>No recipes found for your query. Please try again!</p>
      </Error>
    </div>
  );
};

export default ErrorMessage;
