import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const StarRating = () => {
  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState(0);

  return (
    <div className='flex flex-row items-center'>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <Button
            type='button'
            key={index}
            className={index <= (hover || rating) ? "text-[orange]" : "text-[#ccc]"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className='text-[1.25rem]'>&#9733;</span>
          </Button>
        );
      })}
      <div className='ml-[1rem] text-[1.25rem]'>100 Ratings</div>
    </div>
  );
};

export default StarRating;
