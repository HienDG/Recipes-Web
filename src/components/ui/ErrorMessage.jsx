import styled from "styled-components";

import { AiFillWarning } from "react-icons/ai";

const Error = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
