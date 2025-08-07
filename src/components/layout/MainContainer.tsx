interface MainContainerProps {
  children?: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return <main className=" w-[1224px] mx-auto  ">{children}</main>;
};

export default MainContainer;
