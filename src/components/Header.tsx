
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-racing-green text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-racing-gold">
            Gallop & Gamble
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-racing-gold hover:bg-yellow-600 text-racing-brown font-bold py-2 px-4 rounded transition-all">
            Log In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
