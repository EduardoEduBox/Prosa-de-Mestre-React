import React, { useState, useEffect } from "react";
import { PiGuitarFill } from "react-icons/pi"; // Assuming PiGuitarFill is correctly imported or replace with a valid icon

interface PreloaderProps {
  loading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ loading }) => {
  const [dotCount, setDotCount] = useState(0);
  const [hiddenComponent, setHiddenComponent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prevCount) => (prevCount >= 3 ? 1 : prevCount + 1));

      // Cleaning up the interval when the component is unmounted
      !loading && clearInterval(interval);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => setHiddenComponent(!loading), 700);
  }, [loading]);

  return (
    <div
      className={`flex z-[999] ${
        hiddenComponent && "hidden"
      } flex-col items-center h-screen w-screen justify-center bg-black/80 backdrop-blur-xl text-2xl fixed`}
    >
      <PiGuitarFill className="text-8xl animate-spin" />
      <h1 className="mt-10 text-4xl font-semibold animate-pulse">Carregando</h1>
      <h3 className="mt-2 opacity-40">
        por favor aguarde<span>{".".repeat(dotCount)}</span>
      </h3>
    </div>
  );
};

export default Preloader;
