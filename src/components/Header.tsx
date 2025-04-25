
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import LoginModal from './LoginModal';
import { LogIn, LogOut } from 'lucide-react';

const Header: React.FC = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <header className="bg-racing-green text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-racing-gold">
            Gallop & Gamble
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <span className="text-racing-gold">{user?.name}</span>
              <button
                onClick={logout}
                className="bg-racing-gold hover:bg-yellow-600 text-racing-brown font-bold py-2 px-4 rounded transition-all flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Log Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowLoginModal(true)}
              className="bg-racing-gold hover:bg-yellow-600 text-racing-brown font-bold py-2 px-4 rounded transition-all flex items-center gap-2"
            >
              <LogIn className="h-4 w-4" />
              Log In
            </button>
          )}
        </div>
      </div>
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </header>
  );
};

export default Header;
