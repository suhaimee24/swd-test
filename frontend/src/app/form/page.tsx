"use client";

import React, { useEffect, useState } from "react";
import LayoutApp from "../conponent/layout-app";
import { Layout, Typography, Table, Space, Flex, Checkbox, Button } from "antd";
import { useTranslation } from "react-i18next";
import FormApp from "../conponent/form-app";
import type { CheckboxProps, TableProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  DataType,
  deleteData,
  getData,
  setSeletedData,
} from "../features/form/formSlice";
import { TableRowSelection } from "antd/es/table/interface";
import { CheckboxChangeEvent } from "antd/es/checkbox";
const { Title } = Typography;
const { Content } = Layout;

export default function page() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.form.data);

  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys as string[]);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  useEffect(() => {
    dispatch(getData());
  }, []);

  const onEditClick = (value: DataType) => {
    dispatch(setSeletedData(value));
  };

  const onDeleteClick = (value: DataType) => {
    dispatch(deleteData([value.id || ""]));
  };
  const onSelectAllClick = (e: any) => {
    let temp = [] as string[];
    if (e.target.checked) {
      temp = data.map((item) => item.id as string);
    }
    setSelectedRowKeys(temp);
    setSelectAll(e.target.checked);
  };

  const onDeleteSelectClick = () => {
    dispatch(deleteData(selectedRowKeys));
    setSelectedRowKeys([]);
  };
  const columns: TableProps<DataType>["columns"] = [
    {
      title: t("attribute.name"),
      dataIndex: "firstname",
      key: "firstname",
      render: (_, record) => (
        <>
          {record.firstname} {record.lastname}
        </>
      ),
    },
    {
      title: t("attribute.gender"),
      dataIndex: "gender",
      key: "gender",
      render: (text) => <>{t(`genderOption.${text}`)}</>,
    },
    {
      title: t("attribute.phone"),
      dataIndex: "phone",
      key: "phone",
      render: (_, record) => (
        <>
          {record.prefix}
          {record.phone}
        </>
      ),
    },
    {
      title: t("attribute.nationality"),
      dataIndex: "nationality",
      key: "nationality",
      render: (text) => <>{t(`nationalityOption.${text}`)}</>,
    },
    {
      title: t("attribute.manage"),
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => onEditClick(record)}>{t("edit")}</a>
          <a onClick={() => onDeleteClick(record)}> {t("delete")}</a>
        </Space>
      ),
    },
  ];

  return (
    <LayoutApp>
      <Title className="font-white" style={{ padding: 5 }}>
        {t("test2.description")}
      </Title>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormApp />
        <div style={{ width: "80vw", marginTop: 10, marginBottom: 100 }}>
          <Flex align="center">
            <Checkbox checked={selectAll} onClick={onSelectAllClick}>
              {t("selectAll")}
            </Checkbox>
            <Button onClick={onDeleteSelectClick}>{t("delete")}</Button>
          </Flex>
          <Table<any>
            rowKey="id"
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={{ position: ["topRight"], pageSize: 5 }}
          />
        </div>
      </Content>
    </LayoutApp>
  );
}
