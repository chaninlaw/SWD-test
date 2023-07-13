import React, { useState } from "react";
import TableForm, { DataType } from "../../components/TableForm";
import { Button, Form, Space } from "antd";
import * as InputForm from "../../components/InputForm";

const testData = [
  {
    key: 99,
    firstName: "Chanin",
    gender: "Male",
    phone: "0635032466",
    nation: "Thai",
  },
  {
    key: 92,
    firstName: "Ahanin",
    gender: "Female",
    phone: "0933157152",
    nation: "Chinese",
  },
  {
    key: 84,
    firstName: "Zhanin",
    gender: "Male",
    phone: "0884660984",
    nation: "American",
  },
];

const FormPage: React.FC = () => {
  const [submissions, setSubmissions] = useState<DataType[]>([...testData]);
  const [form] = Form.useForm();

  const onFinish = (values: DataType) => {
    const submission = {
      ...values,
      key: Math.random(),
    };
    setSubmissions([...submissions, submission]);
    form.resetFields();
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <h1>Form & Table</h1>
      <Space
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          layout="inline"
          style={{
            border: "2px solid gray",
            padding: "20px",
            borderRadius: "20px",
            gap: "20px",
          }}
        >
          <InputForm.TitleInput />
          <InputForm.FirstNameInput />
          <InputForm.LastNameInput />
          <InputForm.BirthDatePicker />
          <InputForm.NationaInput />
          <InputForm.GenderRadio />
          <InputForm.PhoneInput />
          <InputForm.PassportInput />
          <InputForm.SalaryInput />
          <Space>
            <Button htmlType="reset">Reset</Button>
            <Button htmlType="submit">Submit</Button>
          </Space>
        </Form>
      </Space>
      <Space
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0 0 0",
        }}
      >
        <TableForm dataSource={submissions} />
      </Space>
    </Space>
  );
};

export default FormPage;
