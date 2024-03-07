import React, { useRef, useEffect } from "react";
import Flickity from "react-flickity-component";
import gsap from "gsap";

const Products: React.FC = () => {
  class ProductsInformation {
    id: number;
    title: string;
    description: string;
    path: string;
    link?: string;

    constructor(
      id: number,
      title: string,
      description: string,
      path: string,
      link?: string
    ) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.path = path;
      this.link = link;
    }
  }

  const allProducts = [
    new ProductsInformation(
      1,
      "Livro Desafio no Repente: a poética da cantoria na contemporaneidade",
      `Esta publicação é fruto da minha pesquisa de mestrado acerca do desafio na cantoria de repente, realizada na Universidade Federal da Paraíba (UFPB), de 2015 a 2017, sob orientação da Professora Doutora Beliza Áurea de Arruda Mello.
          Explorar essa temática tem tudo a ver comigo, enquanto repentista profissional. Ao mesmo tempo em que recorro à memória para trazer à tona acontecimentos marcantes, desafios históricos, fatos curiosos vividos e presenciados, tenho como propósito trazer as vozes dos outros agentes envolvidos no processo de construção poética, por entender que a junção de outros olhares, experiências, histórias e pontos de vista torna mais consistente e contributivo o presente trabalho.`,
      "/products/bookAPoetica.png"
    ),
    new ProductsInformation(
      2,
      "Livro Desvendando os segredos do repente",
      `Trata-se de um livro escrito por vários autores, sob coordenação e orientação de Edmilson Ferreira, idealizador e ministrante do curso Desvendando os Segredos do Repente: aprenda a improvisar com um repentista. As poesias são produzidas pela primeira turma do referido curso. Conheça a história do curso e da turma e comprove a sensibilidade poética fruto de muita dedicação e disciplina.`,
      "/products/bookUnraveling.png"
    ),
    new ProductsInformation(
      3,
      "Camiseta Mestre do Repente",
      "Camiseta Mestre do Repente: estilo e paixão pela arte. Estampa exclusiva, conforto e durabilidade. Seja um ícone de maestria com essa peça única.",
      "/products/mestreDoRepenteTshirtWithoutVerse.png"
    ),
    new ProductsInformation(
      4,
      "Camiseta Prosa de Mestre",
      "Vista a maestria com estilo: camiseta Prosa de Mestre – Uma declaração de amor à poesia e à cultura nordestina.",
      "/products/prosaDeMestreTshirt.png"
    ),
    new ProductsInformation(
      5,
      "Caneca Prosa de Mestre",
      "Caneca Prosa de Mestre: a companhia perfeita para suas pausas inspiradoras. Design autêntico, capacidade generosa e alta qualidade. Desfrute de momentos de mestria com cada gole.",
      "/products/mug1.png"
    ),
    new ProductsInformation(
      6,
      "Curso Desvendando os Segredos do Repente: aprenda a improvisar com um repentista",
      `O primeiro curso completo 100% online "DESVENDANDO OS SEGREDOS DO REPENTE: aprenda a improvisar com um repentista" além de ser pioneiro na internet traz, em detalhe, as técnicas de Rima, Métrica e Exploração às mais diferentes temáticas. Descreve a história da cantoria, do surgimento à contemporaneidade; as cantorias pés de parede, os festivais. Apresenta as modalidades da cantoria e do cordel, as técnicas de construção das estrofes e as estratégias mais eficientes para o processo criativo. É um curso feito em linguagem simples e eficiente que prepara o poeta iniciante e aperfeiçoa as técnicas de quem já exerce a atividade poética.`,
      "/products/courseUnraveling.png",
      "https://pay.hotmart.com/E40746366A?checkoutMode=10"
    ),
  ];

  // Refs for the elements that will be animated
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const titleRefMobile = useRef<HTMLHeadingElement>(null);
  const buttonRefMobile = useRef<HTMLDivElement>(null);
  const descriptionRefMobile = useRef<HTMLParagraphElement>(null);
  let flickityInstance: Flickity | null = null;

  const isDesktop = window.innerWidth > 1024;

  // Function to handle change event from Flickity
  const handleFlickityChange = (index: number) => {
    const product = allProducts[index];

    const updateTitleAndDescription = () => {
      if (titleRefMobile.current) {
        titleRefMobile.current.textContent = product.title;
      }
      if (descriptionRefMobile.current) {
        descriptionRefMobile.current.textContent = product.description;
      }
      if (titleRef.current) {
        titleRef.current.textContent = product.title;
      }
      if (descriptionRef.current) {
        descriptionRef.current.textContent = product.description;
      }
    };

    const updateButtonContent = () => {
      const content =
        index === 5
          ? `<a href=${product.link} class="px-8 py-3 lg:text-lg text-shadow-md font-semibold text-white rounded-full bg-custom-orange hover:bg-custom-orange-dark">Acessar curso</a>`
          : "<a href='#contact' class='px-8 py-3 lg:text-lg text-shadow-md font-semibold text-white bg-custom-orange rounded-full hover:bg-custom-orange-dark'>Entre em contato</a>";

      if (isDesktop) {
        if (buttonRef.current) {
          buttonRef.current.innerHTML = content;
        }
      } else {
        if (buttonRefMobile.current) {
          buttonRefMobile.current.innerHTML = content;
        }
      }
    };

    const animateElements = () => {
      gsap.to(
        [
          titleRef.current,
          descriptionRef.current,
          titleRefMobile.current,
          descriptionRefMobile.current,
        ],
        {
          duration: 0.2,
          ease: "power2.inOut",
          opacity: 1,
        }
      );
    };

    gsap.to(
      [
        titleRef.current,
        descriptionRef.current,
        titleRefMobile.current,
        descriptionRefMobile.current,
      ],
      {
        duration: 0.2,
        ease: "power2.inOut",
        opacity: 0,
        onComplete: () => {
          updateTitleAndDescription();
          updateButtonContent();
          animateElements();
        },
      }
    );
  };

  // Callback function to get the Flickity instance
  const flickityRef = (ref: Flickity | null) => {
    flickityInstance = ref;
    if (flickityInstance) {
      flickityInstance.on("change", handleFlickityChange);
    }
  };

  // Clean up the event listener when the component unmounts
  useEffect(() => {
    return () => {
      if (flickityInstance) {
        flickityInstance.off("change", handleFlickityChange);
      }
    };
  }, []);

  return (
    <section
      className="relative flex flex-col w-full min-h-screen py-12 text-center text-black bg-yellow-50"
      id="products"
    >
      {/* mobile version */}
      <div className="lg:hidden">
        <h1 className="mb-6 text-3xl font-semibold">
          Conheça os produtos <br />
          <span className="text-custom-orange">Prosa de Mestre</span>!
        </h1>

        <h2 ref={titleRefMobile} className="px-5 text-2xl font-semibold">
          {allProducts[0].title}
        </h2>

        <div className="relative w-full overflow-hidden">
          <Flickity
            className={"carousel outline-none"}
            elementType={"div"}
            options={{
              initialIndex: 0,
              cellAlign: "center",
              wrapAround: true,
            }}
            flickityRef={flickityRef} // Attach the ref to Flickity
            disableImagesLoaded={false}
            reloadOnUpdate
            static
          >
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center justify-center w-full px-4 py-6"
              >
                <img
                  src={product.path}
                  alt={product.title}
                  className="w-auto mt-4 rounded-md h-60 drop-shadow-md"
                />
              </div>
            ))}
          </Flickity>
        </div>
        <div className="informationProducts relative max-w-[90%] left-[7%] px-2 flex items-center justify-center overflow-y-auto top-5">
          <p ref={descriptionRefMobile} className="overflow-y-auto">
            {allProducts[0].description}
          </p>
        </div>
        <div
          className="flex items-center justify-center w-full mt-10"
          ref={buttonRefMobile}
        >
          <a
            href="#contact"
            className="px-8 py-3 font-semibold text-white rounded-full bg-custom-orange hover:bg-custom-orange-dark"
          >
            Entre em contato
          </a>
        </div>
      </div>

      {/* desktop version */}
      <div className="hidden lg:block">
        <h1 className="my-8 text-6xl font-semibold">
          Conheça os produtos <br />
          <span className="text-custom-orange">Prosa de Mestre</span>!
        </h1>
      </div>

      <div className="hidden w-full lg:flex">
        <div className="items-center justify-center hidden w-1/2 h-[70vh] overflow-hidden p-52 lg:flex">
          <Flickity
            className={"carousel outline-none w-full"}
            elementType={"div"}
            options={{
              initialIndex: 0,
              cellAlign: "center",
              wrapAround: true,
            }}
            flickityRef={flickityRef} // Attach the ref to Flickity
            disableImagesLoaded={false}
            reloadOnUpdate
            static
          >
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="w-[50vw] flex items-center justify-center mx-[30%]"
              >
                <img
                  src={product.path}
                  alt={product.title}
                  className="drop-shadow-xl rounded-lg max-w-[50vw] h-[60vh]"
                />
              </div>
            ))}
          </Flickity>
        </div>

        <div className="items-center justify-center hidden w-1/2 h-[70vh] py-16 px-[5vw] gap-5 lg:flex lg:flex-col">
          <h2 ref={titleRef} className="px-10 text-4xl font-semibold">
            {allProducts[0].title}
          </h2>

          <div className="relative flex items-center justify-center w-full h-full px-2 pt-10 overflow-y-auto informationProducts">
            <p ref={descriptionRef} className="overflow-y-auto text-xl">
              {allProducts[0].description}
            </p>
          </div>
          <div
            className="flex items-center justify-center w-full"
            ref={buttonRef}
          >
            <a
              href="#contact"
              className="px-8 py-3 text-lg font-semibold text-white rounded-full text-shadow-md bg-custom-orange hover:bg-custom-orange-dark"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
