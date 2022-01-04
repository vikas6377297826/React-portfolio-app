import React from "react";

export const Navbar = () => {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl header-title">
            CODEOFLYF
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-1 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-black text-white">
            About me
          </a>
          <a href="#projects" className="mr-5 hover:text-black text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-black text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-black text-white">
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-blue-400 border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 rounded text-base mt-4 md: mt-0"
        >
          Contact me
        </a>
      </div>
    </header>
  );
};
