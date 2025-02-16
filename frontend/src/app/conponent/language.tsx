import React from "react";
import { Select } from "antd";
import { useTranslation } from "react-i18next";

export default function Language() {
  const { t, i18n } = useTranslation();
  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };
  return (
    <Select
      defaultValue={i18n.language}
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: "th", label: "ไทย" },
        { value: "en", label: "Eng" },
      ]}
    />
  );
}
