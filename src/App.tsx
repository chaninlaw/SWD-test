import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Button, Space, Layout, Select } from "antd";
import { useTranslation } from "react-i18next";

import Home from "./pages/Home";
import LayoutPage from "./pages/LayoutPage";
import FormPage from "./pages/FormPage";

const { Header, Content } = Layout;

const langs = [{ shortName: "en" }, { shortName: "th" }];

const App: React.FC = () => {
  const [lang, setLang] = useState(langs[0].shortName.toUpperCase());
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
    console.log(value);
  };

  return (
    <>
      <Header className="header" style={{ background: "transparent" }}>
        <Space direction="horizontal">
          <Select
            value={lang}
            onChange={(value) => setLang(value)}
            onSelect={(value) => handleLanguageChange(value)}
            options={langs.map((lang) => ({
              label: lang.shortName.toUpperCase(),
              value: lang.shortName.toUpperCase(),
            }))}
          ></Select>
        </Space>
        <Link to="/">
          <Button size="large" type="default">
            {t("home")}
          </Button>
        </Link>
      </Header>

      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/layout" element={<LayoutPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </Content>
    </>
  );
};

export default App;
