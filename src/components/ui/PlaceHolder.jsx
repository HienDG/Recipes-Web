import { useCallback, memo } from "react";

import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";

const Skeleton = styled.div`
  width: 70%;
  height: 1rem;
`;

const responsive = new Map([
  [1, ""],
  [2, "md:"],
  [3, "lg:"],
  [4, "xl:"],
]);

const PlaceHolder = ({ loop = 1, maxCol = 4 }) => {
  if (loop === 0) {
    return <LoadingSpinner />;
  }

  const columns = useCallback(
    [...Array(maxCol)]
      .fill()
      .map((_, index) => {
        index += 1;

        return `${responsive.get(index)}grid-cols-${index}`;
      })
      .join(" "),
    []
  );

  return (
    <div
      className={`grid ${columns} gap-[1rem] gap-y-[1.5rem] max-w-sm mx-auto md:max-w-none md:mx-0`}
    >
      {[...Array(loop)].map((_, index) => {
        index += 1;
        return (
          <div className="cursor-pointer " key={index}>
            <div className="border border-[#e4e4e4] h-[300px] relative overflow-hidden group transition">
              <div className="flex items-center justify-center w-full h-full">
                <div className="animate-skeleton opacity-60 w-[150px] h-[150px]" />
              </div>
            </div>
            <div className="text-[#000] border border-[#e4e4e4]  h-[160px] flex items-center flex-col justify-center gap-y-2">
              <Skeleton className="text-sm text-[rgba(0,0,0,.65)] mb-[0.5rem] uppercase animate-skeleton opacity-60"></Skeleton>
              <Skeleton className="font-semibold mb-1 text-[1.25rem] first-letter:uppercase text-center animate-skeleton opacity-60"></Skeleton>
              <Skeleton className="font-semibold mb-1 text-[1.25rem] first-letter:uppercase text-center animate-skeleton opacity-60"></Skeleton>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(PlaceHolder);
