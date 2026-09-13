import { useState } from 'react';
import LocationModal from '../components/LocationModal';


const Home = () => {
  const [click, setClick] = useState('');
  console.log(click);
  
 
  
  return (
    <div className="w-11/12 mx-auto text-capitalize text-center text-gray-400">
      <p>check your weather today </p>
      <button
        onClick={() => setClick('clicked')}
        type="button"
        className="bg-orange-500 text-white font-semibold p-2 rounded-md mt-5 hover:scale-105 transition-all cursor-pointer "
      >
        Check Weather
      </button>
      {click && <LocationModal/>}
    </div>
  );
};

export default Home;
