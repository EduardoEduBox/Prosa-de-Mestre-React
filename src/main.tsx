import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider
      reCaptchaKey={"6LegaY8nAAAAAOUyO8AUinScjpCj9Rjk6AS12WF7"}
    >
      <App />
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);
