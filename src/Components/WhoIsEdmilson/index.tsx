import React from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import { PiGuitarFill } from "react-icons/pi";
import CarouselAccomploshments from "./CarouselAccomplishments";

const WhoIsEdmilson: React.FC = () => {
  const videoSrcArray = [
    "https://www.youtube.com/embed/n-TQ6VRMsU4",
    "https://www.youtube.com/embed/7mMnOrSqKYo",
    "https://www.youtube.com/embed/XYdLgm_bras",
    "https://www.youtube.com/embed/ZN-pf9MwEtw",
  ];

  return (
    <section
      className="flex flex-col *:overflow-hidden items-center min-h-screen gap-8 px-3 py-16 text-center text-gray-900 lg:gap-12 lg:py-20 bg-orange-50"
      id="aboutMe"
    >
      <h1 className="text-2xl font-semibold text-center lg:text-4xl lg:mb-10">
        Quem é <span className="text-custom-orange">Edmilson Ferreira</span>?
        <br />
        <span className="opacity-50">
          Repentista, Doutorando, Professor e Palestrante
        </span>
      </h1>
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:px-28">
        <div className="relative flex justify-center lg:w-1/3">
          <img
            className="w-11/12 rounded-lg drop-shadow-2xl"
            src="/whoIsEdmilson/edmilson.png"
            alt="Foto de Edmilson Ferreira"
            title="Edmilson Ferreira"
          />
          <FaMicrophoneAlt
            className="absolute bottom-0 text-6xl -left-2 -rotate-12 text-custom-orange "
            style={{
              filter: "drop-shadow(0 .15rem 0 #1c1c1c)",
            }}
          />
          <PiGuitarFill
            className="absolute top-0 text-6xl rotate-[-23deg] -right-2 text-custom-orange"
            style={{
              filter: "drop-shadow(0 .15rem 0 #1c1c1c)",
            }}
          />
        </div>
        <p className="px-3 lg:text-2xl lg:text-left lg:w-2/3 lg:px-10">
          O idealizador e apresentador do programa Prosa de Mestre é também
          autor do livro{" "}
          <strong>
            Desafio no Repente: a poética da cantoria na contemporaneidade
          </strong>
          , organizador do livro{" "}
          <strong>Desvendando os Segredos do Repente</strong>, coorganizador do
          livro <strong>Minha Paixão por Motes</strong>, idealizador e produtor
          do curso{" "}
          <strong>
            Desvendando os Segredos do Repente: aprenda a improvisar com um
            repentista
          </strong>{" "}
          e do documentário <strong>PE na França</strong>: cantadores na terra
          dos trovadores; ministra palestras e bate-papos literários por todo o
          Brasil.
        </p>
      </div>

      <h1 className="mt-5 text-3xl font-semibold lg:text-6xl">
        Como <span className="text-custom-orange">Repentista</span>...
      </h1>

      <CarouselAccomploshments />

      <p className="text-xl opacity-50 lg:text-2xl">
        Vídeos com mais informações!
      </p>

      <div className="flex flex-col items-center w-full gap-5 lg:flex-row lg:px-24">
        {videoSrcArray.map((src, index) => (
          <iframe
            key={index}
            className="w-10/12 rounded-lg drop-shadow-md aspect-video"
            src={src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </div>

      <p className="px-10 text-lg opacity-50 lg:text-2xl">
        Clique aqui para acessar o portfolio completo!
      </p>

      <a href="/whoIsEdmilson/mostRecentPortfolioVersion.pdf" target="_blank">
        <button className="px-8 py-3 font-semibold text-white transition duration-300 ease-in-out rounded-full lg:text-xl lg:px-10 text-shadow-md bg-custom-orange hover:bg-custom-orange-dark focus:outline-none focus:ring focus:ring-orange-300">
          Abrir PDF
        </button>
      </a>
    </section>
  );
};

export default WhoIsEdmilson;
