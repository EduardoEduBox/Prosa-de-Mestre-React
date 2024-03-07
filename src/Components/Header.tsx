import React from "react";
import { FaHandPointDown } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header
      className="relative flex w-full overflow-hidden h-svh text-shadow-darker"
      id="home"
    >
      {/* div for the background image */}
      <div className="absolute -z-10 w-full h-full bg-[url('/backgroundImages/headerImage.png')] bg-cover bg-center bg-no-repeat -scale-x-100" />

      <div className="flex flex-col items-center justify-center w-full h-full pb-16 text-center lg:pb-24 pt-36 lg:pt-40 lg:w-1/2">
        <h1 className="mb-auto text-4xl font-semibold text-custom-orange lg:text-6xl">
          Edmilson Ferreira <br />
          <span className="relative text-4xl text-white lg:font-normal lg:-top-2">
            aprensenta
          </span>
          <br />
          Prosa de Mestre
        </h1>

        <div
          className="px-5 mb-10 rounded-lg lg:px-32 lg:bg-transparent bg-black/40"
          style={{ width: "calc(100% - 3.5rem)" }}
        >
          <p className="my-4 text-lg font-medium leading-6 lg:text-2xl text-shadow-evenDarker">
            O programa que há mais de 3 anos aproxima artistas das manifestações
            culturais orais com o público por meio de bate-papos informativos e
            descontraídos. Descubra histórias fascinantes de poetas repentistas,
            emboladores de coco, cordelistas, mestres de maracatu e muito mais!
          </p>
        </div>
        <a href="#whatIsProsa" className="mt-auto">
          <h1
            className="flex text-2xl font-bold lg:text-4xl whitespace-nowrap"
            style={{
              filter: "drop-shadow(0 0 .2rem #000)",
            }}
          >
            Conheça mais o Prosa!
            <FaHandPointDown
              className="mt-2 ml-2 text-yellow-500 animate-bounce"
              style={{
                filter: "drop-shadow(0 0 .2rem #000)",
              }}
            />
          </h1>
        </a>
      </div>

      <div className="relative hidden w-1/2 lg:flex">
        <img
          src="
            /backgroundImages/edmilsonBackground.png
        "
          alt="Edmilson Ferreira"
          title="Edmilson Ferreira"
          className="h-[200vh] -top-36 absolute right-0 max-h-none max-w-none"
          style={{
            filter: "drop-shadow(0 0 .5rem #000)",
          }}
        />
      </div>
    </header>
  );
};

export default Header;
