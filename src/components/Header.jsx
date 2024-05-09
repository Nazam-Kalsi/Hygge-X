import React from "react";
const nav = [
  { title: "Home", link: "/" },
  { title: "Flashcard", link: "#Flashcard" },
  { title: "Contacts", link: "#Contacts" },
  { title: "FAQ", link: "#FAQ" },
];
function Header() {
  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex gap-12 items-center justify-center sm:justify-between mx-auto p-4 md:flex-row">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/Logo.svg" className="h-8" alt="Flowbite Logo" />
            <p className=" text-2xl text-[#06286E] ml-2 font-semibold">
              Hygge<span className=" font-bold">X</span>
            </p>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col justify-center items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
              {nav.map((item) => {
                return (
                  <button className=" font-sans  text-[#3A3740] link link-underline link-underline-black">
                    {item.title}
                  </button>
                );
              })}

              <button className="bg button hover:bg-gradient-to-b from-blue-600 to-blue-800 transition-all ease-in-out">
                Login
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
