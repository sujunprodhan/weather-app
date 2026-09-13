import { Outlet } from 'react-router';
import Navbar from '../pages/Navbar';
// import Footer from '../pages/Footer';

const MainLayouts = () => {
  return (
    <div className='mt-5'>
      <Navbar></Navbar>
      <Outlet />
      {/* <Footer></Footer> */}
    </div>
  );
};

export default MainLayouts;
