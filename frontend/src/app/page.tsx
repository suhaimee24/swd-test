"use client";
// import styles from "./page.module.css";
import "./stylesheets/style.css";

import { Card, Flex, Layout } from "antd";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import LayoutApp from "./conponent/layout-app";
const { Content } = Layout;

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation();

  const actions = [
    {
      title: t("test1.title"),
      content: t("test1.description"),
      goto: "/layout",
    },
    {
      title: t("test2.title"),
      content: t("test2.description"),
      goto: "/form",
    },
  ];
  return (
    <LayoutApp>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Flex justify="space-between" gap={10}>
          {actions.map((item) => (
            <Card
              title={item.title}
              onClick={() => router.push(item.goto)}
              className="card-temp"
            >
              {item.content}
            </Card>
          ))}
        </Flex>
      </Content>
    </LayoutApp>
  );
}
