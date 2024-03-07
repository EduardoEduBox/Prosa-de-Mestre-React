import React, { useState, useEffect } from "react";

const CarouselAccomploshments: React.FC = () => {
  const items = [
    "🏆 +de 400 primeiros lugares em Festivais de Repentistas por todo o Brasil.",
    "📀 30 CDs e 18 DVDs no mercado.",
    "🎤 Único Brasileiro convidado para a final do campeonato de Bertsolaris, no País Basco em dezembro de 2022.",
    "📺 Participação no programa Espaço PE, da rede Globo, em 2022.",
    "🏅 Tetracampeão nas 5 etapas do Desafio Nordestino de Poetas Cantadores, 2007.",
    "📚 Participação no projeto TV Escola.",
    "🎭 Atuação do projeto 'Tirando Verso da Imaginação', do Ministério da Educação.",
    "🏢 Apresentações para empresas como CHESF, Creatto, Kibom Sorvane, TRON, Banco Real e ABN Anro Bakn, Grupo Claudino, Grupo Martins e Petrobrás.",
    "🌐 Contrato com a UNESCO, de 2002 a 2003, para a função de arte-educador em campanha do Ministério da Saúde.",
    "🌍 Participação no Fórum Social Mundial, em Porto Alegre-RS.",
    "🇫🇷 Tunês na França em 2001 e 2005.",
    "🎬 Apresentações para a Rede Globo de televisão no lançamento da novela Cordel Encantado, em abril de 2011.",
    "🏅 1º lugar no Festival dos Festivais em Fortaleza, em novembro de 2015.",
    "🎙️ Participação no projeto Arte da Palavra, na rede SESC da Bahia, do Piauí, do Espírito e do Rio Grande do Sul, em 2018.",
    "🤝 Apresentações em movimentos sociais, sindicatos, ONGs e associações.",
  ];

  const displayCount = 3;
  const intervalTime = 15000;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayItems, setDisplayItems] = useState(
    items.slice(0, displayCount)
  ); // Added this line
  const [isRunning, setIsRunning] = useState(true);

  // opacity to make the transition smooth
  const [opacity, setOpacity] = useState(true);

  useEffect(() => {
    const lastIndex = items.length - displayCount;
    const updateItems = () => {
      // Start by hiding the items
      setOpacity(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex =
            prevIndex >= lastIndex ? 0 : prevIndex + displayCount;
          return nextIndex;
        });

        // Wait a bit before showing the new items to allow for a smooth fade-out effect
        setOpacity(true);
      }, 300); // This should match your transition-duration for opacity changes
    };

    if (isRunning) {
      const intervalId = setInterval(updateItems, intervalTime);
      return () => clearInterval(intervalId);
    }
  }, [isRunning, items.length, displayCount, intervalTime]);

  useEffect(() => {
    const newDisplayItems = items.slice(
      currentIndex,
      Math.min(currentIndex + displayCount, items.length)
    );

    // Check if the new items are actually different to prevent unnecessary state updates
    if (JSON.stringify(newDisplayItems) !== JSON.stringify(displayItems)) {
      setDisplayItems(newDisplayItems);
    }
  }, [currentIndex, items, displayCount, displayItems]); // Be cautious adding displayItems as a dependency

  // This function will be called when the user clicks on a button below the items
  const goToIndex = (index: number) => {
    setIsRunning(false); // Stop the automatic transition
    setOpacity(false); // Hide the items

    setTimeout(() => {
      setCurrentIndex(index);

      // Show the items after updating
      setOpacity(true);
      setIsRunning(true); // Restart the automatic transition
    }, 300); // Adjust this timing based on your CSS transition-duration
  };

  return (
    <section className="relative flex items-center justify-center w-full min-h-[15rem]">
      <div className="w-full px-5">
        <div
          className={`transition-opacity lg:flex duration-1000 mb-8 lg:px-14 ${
            opacity ? "opacity-100" : "opacity-0"
          }`}
        >
          {displayItems.map((item, index) => (
            <div
              key={index}
              className="mb-4 text-xl text-center text-gray-700 lg:text-2xl lg:w-1/3 lg:px-5"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {Array(Math.ceil(items.length / displayCount))
            .fill(0)
            .map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index * displayCount)}
                className={`mx-1.5 h-4 w-4 lg:h-5 lg:w-5 lg:mx-2 rounded-full text-transparent ${
                  currentIndex === index * displayCount
                    ? "bg-gray-800"
                    : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                &bull;
              </button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselAccomploshments;
