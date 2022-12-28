const Overlay = ({ children }) => {
  return (
    <div className="bg-[#efefef] container max-w-full w-[1200px] mx-auto flex justify-center">
      {children}
    </div>
  );
};
export const Backdrop = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[1000] w-full h-[100vh] bg-white"></div>
  );
};

export default Overlay;
