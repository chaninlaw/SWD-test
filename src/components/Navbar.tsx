import { Button, Select, Space } from "antd";
import { Link } from "react-router-dom";
import { langs } from "../locales";
import { t } from "i18next";

type Props = {
  onLang: (value: string) => void;
  lang: string;
  setLang: (value: string) => void;
};

const Navbar: React.FC<Props> = ({ onLang, lang, setLang }) => {
  return (
    <Space>
      <Select
        value={lang}
        onChange={(value) => setLang(value)}
        onSelect={(value) => onLang(value)}
        options={langs.map((lang) => ({
          label: lang.shortName.toUpperCase(),
          value: lang.shortName.toUpperCase(),
        }))}
      />
      <Link to="/">
        <Button size="large" type="default">
          {t("homeButton")}
        </Button>
      </Link>
    </Space>
  );
};

export default Navbar;
