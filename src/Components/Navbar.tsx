import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { CgMenuRight } from "react-icons/cg";
import { SlClose } from "react-icons/sl";

const Navbar: React.FC = () => {
  // State to control the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  const desktopMenuLinkClasses =
    "px-3 py-2 text-2xl font-medium text-white rounded-lg hover:text-custom-orange text-shadow-darker";
  const mobileMenuLinkClasses =
    "block px-3 py-2 font-medium text-white rounded-lg hover:text-custom-orange";

  return (
    <nav className="fixed z-50 w-full bg-black bg-opacity-60 backdrop-blur-md ">
      <div className="absolute bottom-[-1.48rem] left-0 right-0 h-[1.5rem] bg-gradient-to-b from-black/20 to-transparent"></div>

      <div className="h-16 px-4 mx-auto lg:h-16 lg:px-[5vw]">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <img
              className="w-auto h-12 text-shadow-darker lg:h-14"
              src="/icons/logoProsa.png"
              alt="logo do prosa de mestre"
              title="logo do prosa de mestre"
            />

            <div className="absolute flex-shrink-0 text-xl font-bold text-white transform -translate-x-1/2 lg:text-3xl lg:relative lg:left-8 lg:translate-x-0 left-1/2">
              Prosa de Mestre
            </div>

            <div className="absolute right-0 justify-end hidden w-full mr-10 lg:flex">
              <div className="flex items-baseline space-x-4">
                <a href="#home" className={desktopMenuLinkClasses}>
                  Início
                </a>
                <a href="#whatIsProsa" className={desktopMenuLinkClasses}>
                  Prosa
                </a>
                <a href="#aboutMe" className={desktopMenuLinkClasses}>
                  Sobre mim
                </a>
                <a href="#anuncie" className={desktopMenuLinkClasses}>
                  Anuncie
                </a>
                <a href="#products" className={desktopMenuLinkClasses}>
                  Produtos
                </a>
                <a href="#contact" className={desktopMenuLinkClasses}>
                  Contato
                </a>
              </div>
            </div>
          </div>
          <div className="flex -mr-2 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-full text-blackrounded-lg hover:text-black hover:bg-gray-300 hover focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <CgMenuRight className="block w-8 h-8" />
              ) : (
                <SlClose className="block w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* library to manage the mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            className="flex flex-col items-end h-screen lg:hidden"
            id="mobile-menu"
          >
            <div
              ref={ref}
              className="flex flex-col items-end justify-around w-full h-full pt-5 pb-48 pr-2 space-y-1 text-3xl font-semibold pl-14 sm:px-3"
            >
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className={mobileMenuLinkClasses}
              >
                Início
              </a>
              <hr className="w-11/12 mr-2 bg-white" />
              <a
                href="#whatIsProsa"
                onClick={() => setIsOpen(false)}
                className={mobileMenuLinkClasses}
              >
                Prosa
              </a>
              <hr className="w-11/12 mr-2 bg-white" />
              <a
                href="#aboutMe"
                onClick={() => setIsOpen(false)}
                className={mobileMenuLinkClasses}
              >
                Sobre mim
              </a>
              <hr className="w-11/12 mr-2 bg-white" />
              <a
                href="#anuncie"
                onClick={() => setIsOpen(false)}
                className={mobileMenuLinkClasses}
              >
                Anuncie
              </a>
              <hr className="w-11/12 mr-2 bg-white" />
              <a
                href="#products"
                onClick={() => setIsOpen(false)}
                className={mobileMenuLinkClasses}
              >
                Produtos
              </a>
              <hr className="w-11/12 mr-2 bg-white" />
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className={mobileMenuLinkClasses}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
