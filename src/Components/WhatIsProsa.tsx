import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const WhatIsProsa: React.FC = () => {
  const prosaThumbnails = [
    "prosaThumbs/THUMBNAIL PITRINHO - 40.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 56.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 87.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 104.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 133.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 134.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 140.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 150.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 151.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 157.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 165.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 166.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 172.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 192.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 195.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 196.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 202.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 214.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 216.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 217.jpg",
    "prosaThumbs/THUMBNAIL PITRINHO - 219.jpg",
  ];

  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0);
  const thumbnailRef = useRef<HTMLImageElement>(null);
  const thumbnailMobileRef = useRef<HTMLImageElement>(null);

  // Change thumbnail every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to([thumbnailRef.current, thumbnailMobileRef.current], {
        duration: 0.2,
        opacity: 0.5,
        onComplete: () => {
          setCurrentThumbnailIndex((prevIndex) =>
            prevIndex === prosaThumbnails.length - 1 ? 0 : prevIndex + 1
          );
          gsap.to([thumbnailRef.current, thumbnailMobileRef.current], {
            duration: 0.2,
            opacity: 1,
          });
        },
      });
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      className="relative flex w-full min-h-screen lg:my-10"
      id="whatIsProsa"
    >
      {/* mobile version */}
      <div className="flex flex-col items-center py-8 space-y-6 text-center px-7 lg:hidden">
        <h2 className="mt-8 text-3xl font-semibold text-custom-orange">
          O que é o Prosa de Mestre?
        </h2>
        <p className="max-w-xl">
          O Prosa de Mestre é um programa que promove o diálogo entre artistas
          de manifestações culturais orais e o público. Por meio de bate-papos
          descontraídos, os artistas compartilham suas histórias e experiências,
          buscando valorizar a cultura popular brasileira.
        </p>
        <img
          src={prosaThumbnails[currentThumbnailIndex]}
          ref={thumbnailMobileRef}
          alt="Thumbnails do prosa de mestre"
          title="Thumbnails do Prosa de Mestre"
          className="w-full max-w-lg rounded shadow-md"
        />
        <h2 className="text-xl font-semibold text-custom-orange">
          História do Prosa
        </h2>
        <p className="max-w-xl">
          O Prosa de Mestre começou durante a pandemia em 27 de abril de 2020,
          inicialmente planejado para 8 programas. Porém, devido ao sucesso,
          continua até hoje, com mais de 3 anos de programas semanais, abordando
          várias expressões poéticas e atraindo uma audiência crescente.
        </p>
        <a href="#numbers">
          <button className="px-6 py-2 text-lg font-medium text-white transition duration-300 ease-in-out rounded-full text-shadow-md bg-custom-orange hover:bg-custom-orange-dark focus:outline-none focus:ring focus:ring-orange-300">
            Veja os números!
          </button>
        </a>
      </div>

      {/* background gradient */}
      <div className="absolute hidden lg:block -z-20 w-4/6 h-full bg-[url('/backgroundImages/acousticGuitarImage.png')] bg-cover bg-center bg-no-repeat opacity-50" />
      <div className="absolute hidden lg:block right-[33%] w-5/12 h-full -z-10 bg-gradient-to-l from-custom-dark"></div>
      <div className="absolute hidden lg:block top-0 w-full h-[25%] -z-10 bg-gradient-to-b from-custom-dark"></div>
      <div className="absolute hidden lg:block bottom-0 w-full h-[10%] -z-10 bg-gradient-to-t from-custom-dark"></div>

      {/* desktop version */}
      <div className="relative items-center justify-center hidden w-1/2 h-screen lg:flex">
        <img
          src={prosaThumbnails[currentThumbnailIndex]}
          ref={thumbnailRef}
          alt="Thumbnails do prosa de mestre"
          title="Thumbnails do Prosa de Mestre"
          className="w-5/6 h-auto rounded-lg shadow-lg"
          style={{
            filter: "drop-shadow(0 0 .8rem #000)",
          }}
        />
      </div>
      <div className="flex-col items-center hidden w-1/2 px-20 py-32 text-center lg:flex justify-evenly h-scren">
        <h1 className="text-5xl font-semibold text-custom-orange">
          O que é o Prosa de Mestre?
        </h1>
        <p className="text-2xl">
          O Prosa de Mestre é um programa que promove o diálogo entre artistas
          de manifestações culturais orais e o público. Por meio de bate-papos
          descontraídos, os artistas compartilham suas histórias e experiências,
          buscando valorizar a cultura popular brasileira.
        </p>
        <h2 className="text-4xl font-semibold text-custom-orange">
          História do Prosa
        </h2>
        <p className="text-2xl">
          O Prosa de Mestre começou durante a pandemia em 27 de abril de 2020,
          inicialmente planejado para 8 programas. Porém, devido ao sucesso,
          continua até hoje, com 4 anos de programas semanais, abordando várias
          expressões poéticas e atraindo uma audiência crescente.
        </p>
        <a
          href="#numbers"
          className="px-8 py-3 text-xl font-semibold text-white transition duration-300 ease-in-out rounded-full text-shadow-md bg-custom-orange hover:bg-custom-orange-dark focus:outline-none focus:ring focus:ring-orange-300"
        >
          Veja os números!
        </a>
      </div>
    </section>
  );
};

export default WhatIsProsa;
