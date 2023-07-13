import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import { useTranslation } from "react-i18next";

import Home from "./pages/HomePage";
import LayoutPage from "./pages/LayoutPage";
import FormPage from "./pages/FormPage";
import Navbar from "./components/Navbar";
import { langs } from "./locales";

const App: React.FC = () => {
  const [lang, setLang] = useState(langs[0].shortName.toUpperCase());
  const { i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value.toLowerCase());
  };

  return (
    <>
      <Layout.Header className="header" style={{ background: "transparent" }}>
        <Navbar onLang={handleLanguageChange} lang={lang} setLang={setLang} />
      </Layout.Header>

      <Layout.Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/layout" element={<LayoutPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </Layout.Content>
    </>
  );
};

export default App;
