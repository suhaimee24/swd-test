import React, { useEffect } from "react";
import {
  Button,
  Col,
  DatePicker,
  DatePickerProps,
  Flex,
  Form,
  Input,
  Radio,
  Row,
  Select,
} from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addData, updateData } from "../features/form/formSlice";
import { RootState } from "../store";
import dayjs from "dayjs";
const { Option } = Select;

export default function FormApp() {
  const { t } = useTranslation();
  const selectedData = useSelector(
    (state: RootState) => state.form.selectedData
  );
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    if (selectedData) {
      form.resetFields();
      let temp = { ...selectedData };
      temp["birthday"] = dayjs(temp["birthday"]);
      form.setFieldsValue(temp);
    }
  }, [selectedData]);

  const onFinish = (value: any) => {
    alert("save success");
    value["birthday"] = value["birthday"].format("YYYY-MM-DD");
    if (selectedData) {
      dispatch(updateData({ ...value, id: selectedData.id }));
    } else {
      dispatch(addData(value));
    }
    form.resetFields();
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="+66">+66</Option>
        <Option value="+1">+1</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div
      style={{
        width: "80%",
        border: "1px solid #000000",
        borderRadius: 10,
        padding: 10,
      }}
    >
      <Form form={form} name="control-hooks" onFinish={onFinish}>
        <Row>
          <Col span={4}>
            <Form.Item
              label={t("attribute.title")}
              name="title"
              rules={[{ required: true }]}
            >
              <Select allowClear>
                <Option value="mr">{t("titleOption.mr")}</Option>
                <Option value="mrs">{t("titleOption.mrs")}</Option>
                <Option value="ms">{t("titleOption.ms")}</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label={t("attribute.firstname")}
              name="firstname"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label={t("attribute.lastname")}
              name="lastname"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              label={t("attribute.birthday")}
              name="birthday"
              rules={[{ required: true }]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={t("attribute.nationality")}
              name="nationality"
              rules={[{ required: true }]}
            >
              <Select allowClear>
                <Option value="thai">{t("nationalityOption.thai")}</Option>
                <Option value="american">
                  {t("nationalityOption.american")}
                </Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={18}>
            <Form.Item
              label={t("attribute.citizenId")}
              name="citizenId"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={18}>
            <Form.Item
              label={t("attribute.gender")}
              name="gender"
              rules={[{ required: true }]}
            >
              <Radio.Group>
                <Radio value="male">{t("genderOption.male")}</Radio>
                <Radio value="female">{t("genderOption.female")}</Radio>
                <Radio value="unsex">{t("genderOption.unsex")}</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={18}>
            <Form.Item
              label={t("attribute.phone")}
              name="phone"
              rules={[{ required: true }]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={18}>
            <Form.Item label={t("attribute.passportNo")} name="passportNo">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={t("attribute.expectedSalary")}
              name="expectedSalary"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Flex justify="end" gap={5}>
              <Button htmlType="reset">{t("reset")}</Button>
              <Button htmlType="submit">{t("submit")}</Button>
            </Flex>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
