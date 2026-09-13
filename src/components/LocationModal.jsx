import { X } from 'lucide-react';
import { useState } from 'react';

const LocationModal = ({ onClose }) => {
  const [city, setCity] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = city.trim();
    console.log(value);
    setCity('');
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
      },
      (error) => {
        console.log(error);
      },
      {
        timeout: 10000,
      }
    );
  };

  return (
    <div className="fixed inset-0 items-center bg-gray-950/60">
      <div className="h-75  mx-auto w-md bg-gray-100 rounded-md shadow-md shadow-gray-400 mt-10">
        <div className="flex justify-between text-center p-5">
          <h1 className="text-black text-2xl font-semibold">Where are you today</h1>
          <button
            onClick={onClose}
            className="bg-red-600 p-1 cursor-pointer hover:bg-red-400 text-white rounded-md"
          >
            <X />
          </button>
        </div>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="input city"
            className="border border-gray-400 rounded-md p-1 outline-0"
          />

          <div>
            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold p-2 rounded-md hover:scale-105 transition-all cursor-pointer"
            >
              Get Weather
            </button>
          </div>
          <h3>Or</h3>
          <div>
            <button
              type="button"
              onClick={handleLocation}
              className="bg-orange-500 text-white font-semibold p-2 rounded-md hover:scale-105 transition-all cursor-pointer"
            >
              Use Location
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LocationModal;
