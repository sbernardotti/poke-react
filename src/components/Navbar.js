import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [t, i18n] = useTranslation();
  const [language, setLenguage] = useState("es");

  const changeLang = () => {
    i18n.changeLanguage(language);
    if (language === "es") {
      setLenguage("en");
    } else {
      setLenguage("es");
    }
  };

  return (
    <nav className="navbar is-primary">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <img src={logo} alt="Pokedex-React" width="200"></img>
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button onClick={changeLang} className="button is-primary">
                {t("lang")}: &nbsp; <strong>{t("lang.name")}</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
