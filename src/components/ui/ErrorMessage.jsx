import styled from "styled-components";

import { AiFillWarning } from "react-icons/ai";
import { Link } from "react-router-dom";

const Error = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 96px 24px;
  svg {
    fill: red;
    font-size: 4rem;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.75rem;
  }
`;

const ErrorMessage = ({ title = "recipes" }) => {
  return (
    <div className="px-6">
      <Error>
        <div>
          <AiFillWarning />
        </div>
        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
          Something's missing.
        </p>
        <p className="mb-4 text-lg font-light text-gray-500 ">
          Sorry, we can't find that {title}. You'll find lots to explore on the home page.
        </p>
        <Link
          to="/"
          className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4"
        >
          Back to Homepage
        </Link>
      </Error>
    </div>
  );
};

export default ErrorMessage;
