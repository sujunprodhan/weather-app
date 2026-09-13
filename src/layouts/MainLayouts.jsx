import { Outlet } from 'react-router';

const MainLayouts = () => {
  return (
    <>
      <div className=" min-h-screen text-center flex justify-center items-center">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayouts;
