import "./LayoutPage.css";
import { Card } from "antd";
import React from "react";

type Props = {};

const items = [];

const LayoutPage: React.FC<Props> = () => {
  return (
    <>
      <div className="controller">
        <Card>
          <div className="prev"></div>
        </Card>
        <div className="move-position">
          <Card>
            <div className="up"></div>
          </Card>
          <Card>
            <div className="down"></div>
          </Card>
        </div>
        <Card>
          <div className="forward"></div>
        </Card>
      </div>
      <div className="items">items</div>
    </>
  );
};

export default LayoutPage;
