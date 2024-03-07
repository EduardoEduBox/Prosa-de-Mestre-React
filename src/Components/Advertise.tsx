import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Parceiro imports
import { MdOutlineWhatsapp } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { GoTrophy } from "react-icons/go";

// Anuncie imports
import { FaUsers } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { PiDevicesFill } from "react-icons/pi";

const Advertise: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  const parceiroRefs = useRef<HTMLDivElement[]>([]);
  parceiroRefs.current = [];
  const addToParceiroRefs = (el: HTMLDivElement | null) => {
    if (el && !parceiroRefs.current.includes(el)) {
      parceiroRefs.current.push(el);
    }
  };

  const anuncieRefs = useRef<HTMLDivElement[]>([]);
  anuncieRefs.current = [];
  const addToAnuncieRefs = (el: HTMLDivElement | null) => {
    if (el && !anuncieRefs.current.includes(el)) {
      anuncieRefs.current.push(el);
    }
  };

  const isDesktop = window.innerWidth > 1024;

  useEffect(() => {
    const animateRefs = (
      refs: React.MutableRefObject<HTMLDivElement[]>,
      x: number
    ) => {
      refs.current.forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, x: isDesktop ? x : 0 },
          {
            x: 0,
            duration: isDesktop ? 0.5 : 1.5,
            ease: isDesktop ? "power2.inOut" : "none",
            autoAlpha: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom top",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    };

    animateRefs(parceiroRefs, -100);
    animateRefs(anuncieRefs, 100);
  }, []);

  // Icons and texts for the Parceiro and Anuncie sections
  const parceiro = [
    {
      Icon: MdOutlineWhatsapp,
      text: "Faça parte do grupo de Parceiros do Prosa",
    },
    {
      Icon: HiOutlineLightBulb,
      text: "Sugira convidados para os programas",
      reverse: true,
    },
    {
      Icon: TbMessageCircleQuestion,
      text: "Apareça no programa com perguntas em vídeo",
    },
    {
      Icon: GoTrophy,
      text: "Participe de sorteios mensais exclusivos",
      reverse: true,
    },
  ];

  const anuncie = [
    {
      Icon: FaUsers,
      text: "Amplie sua visibilidade para uma audiência engajada",
    },
    {
      Icon: FaMoneyBillTrendUp,
      text: "Aumente suas vendas e reconhecimento da sua marca",
      reverse: true,
    },
    {
      Icon: FaMagnifyingGlassLocation,
      text: "Alcance o público mais envolvido com manifestações culturais",
    },
    {
      Icon: PiDevicesFill,
      text: "Divulgue sua marca nas diversas plataformas Prosa de Mestre",
      reverse: true,
    },
  ];

  return (
    <section
      className="flex flex-col items-center w-full px-3 py-8 overflow-x-hidden text-center lg:py-16 lg:px-14 lg:flex-row"
      id="advertise"
    >
      <div className="lg:w-1/2">
        <h1 className="text-3xl font-semibold text-custom-orange lg:text-6xl lg:mb-10">
          Seja Parceiro!
        </h1>
        <h1 className="mt-3 text-xl opacity-70 lg:text-4xl lg:mb-20">
          Seja parceiro Prosa de Mestre e...
        </h1>

        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 lg:h-[50vh]">
          {parceiro.map(({ Icon, text, reverse }, index) => (
            <div
              key={index}
              ref={addToParceiroRefs}
              className={`flex items-center justify-center h-32 px-5 mt-5 lg:flex-row ${
                reverse ? "flex-row-reverse" : ""
              }`}
            >
              <div className="lg:shrink-0">
                {" "}
                {/* Prevents icon from resizing */}
                <Icon className={`text-8xl lg:text-9xl glow-green`} />
              </div>
              <p className="px-4 lg:text-2xl">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-11/12 h-[2px] mb-8 bg-white/40 lg:w-1 lg:h-[60vh]" />

      <div className="lg:w-1/2 lg:pl-10">
        <h1 className="text-3xl font-semibold lg:text-6xl text-custom-orange lg:mb-10">
          Anuncie no Prosa!
        </h1>
        <h1 className="mt-3 text-xl opacity-70 lg:text-4xl lg:mb-20">
          Anuncie no Prosa de Mestre e...
        </h1>

        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4  lg:h-[50vh]">
          {anuncie.map(({ Icon, text, reverse }, index) => (
            <div
              key={index}
              ref={addToAnuncieRefs}
              className={`flex items-center justify-center h-32 px-5 mt-5 ${
                reverse ? "flex-row-reverse" : ""
              }`}
            >
              <div className="lg:shrink-0">
                {" "}
                {/* Prevents icon from resizing */}
                <Icon className={`text-8xl lg:text-9xl glow-yellow`} />
              </div>
              <p className="px-4 lg:text-2xl">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advertise;
