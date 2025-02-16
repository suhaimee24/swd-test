"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LayoutApp from "../conponent/layout-app";
import { Button, Flex, Tag, Typography } from "antd";
const { Title } = Typography;

export default function page() {
  const { t } = useTranslation();

  const [shapes, setShapes] = useState([
    "rectangle",
    "square",
    "circle",
    "trapezoid",
    "rhombus",
    "ellipse",
  ]);
  const [togle, setTogle] = useState(true);

  const onLeftClick = () => {
    const temp = [...shapes];
    const item = temp.shift() || "";
    temp.push(item);
    setShapes(temp);
  };

  const onRightClick = () => {
    const temp = [...shapes];
    const item = temp.pop() || "";
    temp.unshift(item);
    setShapes(temp);
  };

  const onItemClick = () => {
    const temp = [...shapes];
    temp.sort(() => Math.random() - 0.5);
    setShapes(temp);
  };

  return (
    <LayoutApp>
      <Title className="font-white" style={{ padding: 5 }}>
        {t("test1.description")}
      </Title>
      <Flex justify="center" gap={5} style={{ marginBottom: 20 }}>
        <Button className="custom-botton" onClick={onLeftClick}>
          <div className="left-triangle"></div>
          <Tag color="#87d068" className="absolute-bottom-center">
            {t("moveShape")}
          </Tag>
        </Button>
        <Button
          className="custom-botton-long"
          onClick={() => setTogle((prev) => !prev)}
        >
          <div className="up-triangle" style={{ marginRight: 5 }}></div>
          <div className="down-triangle" style={{ marginLeft: 5 }}></div>
          <Tag color="#87d068" className="absolute-bottom-center">
            {t("movePosition")}
          </Tag>
        </Button>
        <Button className="custom-botton" onClick={onRightClick}>
          <div className="right-triangle"></div>
          <Tag color="#87d068" className="absolute-bottom-center">
            {t("moveShape")}
          </Tag>
        </Button>
      </Flex>
      <Flex justify="center">
        <Flex style={{ width: "40%" }} vertical={true} gap={20}>
          <Flex justify={togle ? "end" : "start"} gap={5}>
            {shapes.slice(0, 3).map((item) => (
              <Button className="custom-botton" onClick={onItemClick}>
                <div className={`${item}`}></div>
              </Button>
            ))}
          </Flex>
          <Flex justify={togle ? "start" : "end"} gap={5}>
            {shapes.slice(-3).map((item) => (
              <Button className="custom-botton" onClick={onItemClick}>
                <div className={`${item}`}></div>
              </Button>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </LayoutApp>
  );
}
