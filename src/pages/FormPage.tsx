import { useState, useEffect } from "react";
import TableForm, { DataType } from "../components/TableForm";
import { Button, Form, Space, Typography } from "antd";
import * as InputForm from "../components/InputForm";
import { t } from "i18next";

const testData = [
  {
    key: 99,
    title: "Mrs.",
    firstName: "Chanin",
    lastName: "Law",
    gender: "Male",
    phoneNumber: "0635032466",
    nation: "Thai",
  },
  {
    key: 92,
    title: "Mrs.",
    firstName: "Ahanin",
    lastName: "Law",
    gender: "Female",
    phoneNumber: "0933157152",
    nation: "Chinese",
  },
  {
    key: 84,
    title: "Mrs.",
    firstName: "Zhanin",
    lastName: "Law",
    gender: "Male",
    phoneNumber: "0884660984",
    nation: "American",
  },
];

const getLocalStorage = () => {
  const submissions = localStorage.getItem("submissions");
  if (submissions) {
    return JSON.parse(submissions);
  } else {
    return [];
  }
};

const FormPage: React.FC = () => {
  const [submissions, setSubmissions] = useState<DataType[]>(getLocalStorage());
  const [form] = Form.useForm();

  useEffect(() => {
    localStorage.setItem("submissions", JSON.stringify(submissions));
  });

  const onFinish = (values: DataType) => {
    console.log(values);
    const submission = {
      ...values,
      key: Math.random(),
    };
    setSubmissions([...submissions, submission]);
    form.resetFields();
  };

  return (
    <Space direction="vertical">
      <Typography.Title style={{ textAlign: "start" }}>
        {t("formAndTable")}
      </Typography.Title>
      <Space direction="vertical" align="center" style={{ width: "100%" }}>
        <Form
          layout="inline"
          labelWrap
          form={form}
          name="register"
          onFinish={onFinish}
          style={{
            border: "2px solid gray",
            padding: 20,
            borderRadius: 20,
            gap: 20,
          }}
        >
          <InputForm.TitleInput />
          <InputForm.FirstNameInput />
          <InputForm.LastNameInput />
          <InputForm.BirthDatePicker />
          <InputForm.NationalInput />
          <InputForm.IdCardInput />
          <InputForm.GenderRadio />
          <InputForm.PhoneInput />
          <InputForm.PassportInput />
          <InputForm.SalaryInput />

          <Form.Item>
            <Button htmlType="reset">{t("resetButton")}</Button>
            <Button htmlType="submit">{t("submitButton")}</Button>
          </Form.Item>
        </Form>

        <TableForm dataSource={submissions} />
      </Space>
    </Space>
  );
};

export default FormPage;
