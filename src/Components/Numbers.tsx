import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Numbers: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef<HTMLUListElement>(null);
  const edmilsonRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const animateElements = (
      elements: HTMLCollectionOf<Element> | HTMLImageElement,
      initialX: number
    ) => {
      gsap.fromTo(
        elements,
        { x: initialX, autoAlpha: 0, opacity: 0 },
        {
          duration: 0.5,
          opacity: 1,
          x: 0,
          autoAlpha: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
        }
      );
    };

    if (ref.current) {
      animateElements(ref.current.children, -100);
    }

    if (edmilsonRef.current) {
      animateElements(edmilsonRef.current, 500);
    }
  }, []);

  return (
    <section
      id="numbers"
      className="relative flex w-full min-h-[85vh] lg:h-screen max-h-screen items-center overflow-hidden"
    >
      <div className="absolute w-full h-full -z-20 bg-[url('/backgroundImages/numbersSectionImage.png')] bg-cover bg-center bg-no-repeat"></div>
      <div className="flex flex-col justify-around w-full h-full px-10 py-24 lg:py-52 lg:px-40 text-shadow-darker lg:w-1/2">
        <h1 className="mb-10 text-3xl font-semibold text-center lg:text-4xl lg:mb-32 text-custom-orange">
          Alguns números que acompanham o Prosa de Mestre!
        </h1>
        <ul
          ref={ref}
          className="flex flex-col gap-3 text-xl list-disc lg:text-2xl text-shadow-evenDarker"
        >
          <li>Mais de 1 milhão de visualizações</li>
          <li>Mais de 100 mil horas de conteúdos exibidos</li>
          <li>Mais de 200 transmissões ao vivo</li>
          <li>Mais de 300 participações diferentes</li>
          <li>
            Participantes do Brasil, Portugal, País Basco, França, Galícia
          </li>
          <li>
            Audiência no Brasil, Portugal, Alemanha, Rússia, Bielorrússia,
            Índia, Polônia e Estados Unidos
          </li>
        </ul>
      </div>
      <div className="relative hidden w-1/2 h-full lg:block">
        <img
          ref={edmilsonRef}
          src="/backgroundImages/numbersEdmilson.png"
          alt="Imagem de Edmilson Ferreira com viola"
          title="Edmilson Ferreira com sua viola"
          className="absolute h-[90%] bottom-0 right-0 max-w-none"
        />
      </div>
    </section>
  );
};

export default Numbers;
