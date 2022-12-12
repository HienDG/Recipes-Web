import styled from "styled-components";

const Skeleton = styled.div`
  width: 70%;
  height: 1rem;
`;

const PlaceHolder = ({ number = 1 }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] gap-y-[1.5rem] max-w-sm mx-auto md:max-w-none md:mx-0'>
      {[...Array(number)].map((_, index) => {
        index += 1;
        return (
          <div className='cursor-pointer ' key={index}>
            <div className='border border-[#e4e4e4] h-[300px] relative overflow-hidden group transition'>
              <div className='w-full h-full flex justify-center items-center'>
                <div className='animate-skeleton opacity-70 w-[150px] h-[150px]' />
              </div>
            </div>
            <div className='text-[#000] border border-[#e4e4e4]  h-[160px] flex items-center flex-col justify-center gap-y-2'>
              <Skeleton className='text-sm text-[rgba(0,0,0,.65)] mb-[0.5rem] uppercase animate-skeleton opacity-70'></Skeleton>
              <Skeleton className='font-semibold mb-1 text-[1.25rem] first-letter:uppercase text-center animate-skeleton opacity-70'></Skeleton>
              <Skeleton className='font-semibold mb-1 text-[1.25rem] first-letter:uppercase text-center animate-skeleton opacity-70'></Skeleton>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlaceHolder;
