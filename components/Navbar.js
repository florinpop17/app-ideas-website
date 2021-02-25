import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-50">
      <div className="flex flex-wrap items-center px-6 py-2 bg-white bg-yellow-200 lg:px-16 lg:py-0 ">
        <div className="flex items-center justify-between flex-1">
          <a href="/" className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
              <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
              <line x1="9.7" y1="17" x2="14.3" y2="17" />
            </svg>
            <span className="ml-1 font-bold">App Ideas</span>
          </a>
        </div>

        <label
          htmlFor="menu-toggle"
          className="block cursor-pointer lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="text-gray-900 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            open ? "" : "hidden"
          }`}
          id="menu"
        >
          <nav>
            <ul className="items-center justify-between pt-4 text-base text-gray-700 lg:flex lg:pt-0">
              <li>
                <a
                  className="flex block px-0 py-3 border-b-2 border-transparent cursor-pointer lg:p-4 hover:border-purple-600"
                  href="https://github.com/florinpop17/app-ideas"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <Link href="/beginner">
                  <a className="block px-0 py-3 border-b-2 border-transparent cursor-pointer lg:p-4 hover:border-purple-600 md:hidden">
                    Beginner
                  </a>
                </Link>
                <Link href="/intermediate">
                  <a className="block px-0 py-3 border-b-2 border-transparent cursor-pointer lg:p-4 hover:border-purple-600 md:hidden">
                    Intermediate
                  </a>
                </Link>
                <Link href="/advanced">
                  <a className="block px-0 py-3 border-b-2 border-transparent cursor-pointer lg:p-4 hover:border-purple-600 md:hidden">
                    Advanced
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
