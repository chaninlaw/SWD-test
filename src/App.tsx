import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space, Typography, Layout } from "antd";

import Home from "./pages/Home";
import LayoutPage from "./pages/LayoutPage";
import FormPage from "./pages/FormPage";

const { Header, Content } = Layout;

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
      <Header className="header" style={{ background: "transparent" }}>
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
        <Link to="/">
          <Button size="large" type="default">
            Home
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
