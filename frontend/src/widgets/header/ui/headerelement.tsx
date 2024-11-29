import React from "react";
import { Link } from "react-router-dom";

export const HeaderElement: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">My App</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">
                <a className="hover:text-gray-200">Home</a>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <a className="hover:text-gray-200">About</a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a className="hover:text-gray-200">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
