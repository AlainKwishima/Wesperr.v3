import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">Chat App</div>
      <div className="flex space-x-4">
        <Link to="/calls">
          <i className="fas fa-phone"></i>
        </Link>
        <Link to="/audio-call">
          <i className="fas fa-microphone"></i>
        </Link>
        <Link to="/video-call">
          <i className="fas fa-video"></i>
        </Link>
        <Link to="/wallet">
          <i className="fas fa-wallet"></i>
        </Link>
        {/* Other nav items */}
      </div>
    </nav>
  );
};

export default NavBar;
