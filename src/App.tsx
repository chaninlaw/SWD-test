import "./App.css";
import { Routes, Route } from "react-router-dom";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";

import Home from "./pages/Home";
import LayoutPage from "./pages/LayoutPage";
import FormPage from "./pages/FormPage";

const items: MenuProps["items"] = [
  {
    label: "EN",
    key: "1",
  },
  {
    label: "TH",
    key: "2",
  },
];

const App: React.FC = () => {
  return (
    <>
      <header className="header">
        <Dropdown
          className="inter-dropdown"
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ["1"],
          }}
        >
          <Typography.Link>
            <Space>
              EN
              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/layout" element={<LayoutPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
