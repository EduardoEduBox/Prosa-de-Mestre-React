import React, { useState, FormEvent } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Swal from "sweetalert2";

// importing icons for the footer
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha("submit_form");

    // Call your API with the token lk
    const POST_URL = "";

    try {
      const response = await fetch(POST_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, token }),
      });

      const data = await response.json();
      if (!data.error) {
        Swal.fire({
          title: `${name}, seu formulário foi entregue com sucesso!`,
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      // Catch block for fetching errors

      Swal.fire({
        title: "Ops! Ocorreu um erro.",
        text: "Servidores indisponíveis no momento, contudo você pode contatar via email: contato@prosademestre.com.br ou celular/whatsapp: +55 81 9949-2649",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <footer className="py-8 text-white bg-black" id="contact">
      <div className="lg:max-w-[80%] px-4 mx-auto lg:justify-between lg:items-start lg:px-8">
        <div className="flex items-center justify-center w-full">
          <h2 className="mt-4 mb-6 text-2xl font-bold text-center text-custom-orange lg:text-5xl">
            Entre em contato!
          </h2>
        </div>
        <div className="lg:flex">
          <div className="justify-between lg:w-1/2 lg:flex lg:flex-col">
            <p className="mb-4 text-center lg:text-left lg:text-2xl lg:pr-52">
              Sinta-se à vontade para esclarecer qualquer dúvida sobre o Prosa!
            </p>

            <div className="flex mb-4 lg:text-lg lg:flex-col">
              <h3 className="font-semibold">E-mail:</h3>
              <a
                href="mailto:contato@prosademestre.com.br"
                className="ml-5 underline lg:ml-0"
              >
                contato@prosademestre.com.br
              </a>
            </div>

            <div className="flex mb-6 lg:text-lg lg:flex-col">
              <h3 className="font-semibold">Tel/Whatsapp:</h3>
              <a href="tel:+558199492649" className="ml-5 underline lg:ml-0">
                +55 81 9949-2649
              </a>
            </div>

            <div className="flex items-center mb-6 lg:block lg:text-lg lg:flex-col">
              <h3 className="font-semibold">Minhas redes:</h3>

              <div className="flex justify-center mt-2 ml-5 space-x-6 lg:ml-0 lg:justify-start">
                <a
                  href="https://m.facebook.com/people/Edmilson-Ferreira-Mestre-do-Repente/100063967660465/"
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook"
                >
                  <FaFacebook className="text-4xl" />
                </a>
                <a
                  href="https://www.youtube.com/@MestredoRepente/featured"
                  target="_blank"
                  rel="noreferrer"
                  title="Youtube"
                >
                  <FaYoutube className="text-4xl" />
                </a>
                <a
                  href="https://www.instagram.com/repentistaedmilsonferreira/"
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram"
                >
                  <AiFillInstagram className="text-4xl" />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-4 lg:w-1/2">
            <div>
              <label htmlFor="name" className="block mb-2">
                Nome:
              </label>
              <input
                type="text"
                id="name"
                maxLength={40}
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 rounded"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">
                E-mail:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">
                Mensagem:
              </label>
              <textarea
                id="message"
                placeholder="Digite sua mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-24 p-2 rounded resize-none"
                required
              ></textarea>
            </div>

            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                className="px-10 py-2 font-bold text-white rounded-full lg:w-fit lg:px-14 lg:py-3 bg-custom-orange hover:bg-custom-orange-dark"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
