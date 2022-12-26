import styled from "styled-components";

const Loading = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000;
    border-color: #000 transparent #000 transparent;
  }
`;

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center h-[1000px] py-24">
      <Loading className="animate-spin"></Loading>
    </div>
  );
};

export default LoadingSpinner;
