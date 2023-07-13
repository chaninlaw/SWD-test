import "./LayoutPage.css";
import { useState } from "react";
import { Card, Divider } from "antd";
import Controller from "../../components/Controller";
import { t } from "i18next";

const itemsShape: string[] = [
  "square",
  "circle",
  "oval",
  "trapezoid",
  "rectangle",
  "parallelogram",
];

const LayoutPage: React.FC = () => {
  const [items, setItems] = useState(itemsShape);

  const prevClick = () => {
    const prevRemove = [...items.slice(1, 6), ...items.slice(0, 1)];
    setItems(prevRemove);
  };

  const forwardClick = () => {
    const prevRemove = [...items.slice(5, 6), ...items.slice(0, 5)];
    setItems(prevRemove);
  };

  const moveClick = () => {
    const swapItems = [...items.slice(3, 6), ...items.slice(0, 3)];
    setItems(swapItems);
  };

  const shuffleItems = () => {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    shuffled.slice(0, items.length);
    setItems(shuffled);
  };

  return (
    <div className="container">
      <h1 className="layout-heading">{t("layoutAndStyle")}</h1>

      <div className="controller">
        <div className="move-shape" onClick={prevClick}>
          <Controller control="prev" />
          <div className="tag">{t("move")}</div>
        </div>
        <div className="move-position" onClick={moveClick}>
          <Controller control="up" />
          <Controller control="down" />
          <div className="tag">{t("position")}</div>
        </div>
        <div className="move-shape" onClick={forwardClick}>
          <Controller control="forward" />
          <div className="tag">{t("move")}</div>
        </div>
      </div>

      <Divider />

      <div className="items">
        {items.map((item) => {
          return (
            <Card
              key={item}
              hoverable
              onClick={shuffleItems}
              style={{
                width: "250px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className={item}></div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default LayoutPage;
