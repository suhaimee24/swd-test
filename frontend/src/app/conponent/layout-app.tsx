import React from "react";
import { Button, Card, Flex, Layout } from "antd";
import Language from "./language";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const { Content } = Layout;
export default function LayoutApp({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <Layout className="full-height">
      <Flex justify="space-between" style={{ padding: 5 }}>
        <Button onClick={() => router.push("/")}> {t("home")}</Button>
        <Language />
      </Flex>
      <Content className="custom-content">{children}</Content>
    </Layout>
  );
}
