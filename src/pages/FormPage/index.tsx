import React from "react";
import {
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Space,
  Radio,
} from "antd";

type Props = {};

const FormPage: React.FC<Props> = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="container">
      <h1>Form & Table</h1>
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
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Select placeholder="title" allowClear>
            <Select.Option value="male">Mr.</Select.Option>
            <Select.Option value="female">Mrs.</Select.Option>
            <Select.Option value="other">Miss</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="birth" label="Birth Date" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="nation"
          label="Nationality"
          rules={[{ required: true }]}
        >
          <Select placeholder="- - Option - -" allowClear>
            <Select.Option value="American">American</Select.Option>
            <Select.Option value="Chinese">Chinese</Select.Option>
            <Select.Option value="Thai">Thai</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="idCard"
          label="Identification ID"
          rules={[{ required: true }]}
        >
          <InputNumber
            controls={false}
            max={9999999999999}
            style={{ width: "190px" }}
          />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value="Male"> Male </Radio>
            <Radio value="Female"> Female </Radio>
            <Radio value="Prefer not to say">Prefer not to say</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Phone">
          <Space.Compact>
            <Form.Item name="tel" noStyle rules={[{ required: true }]}>
              <Select style={{ width: "50%" }}>
                <Select.Option value="66">+66</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="phone" noStyle rules={[{ required: true }]}>
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Space.Compact>
        </Form.Item>

        <Form.Item name="passportId" label="Passport ID">
          <InputNumber controls={false} max={9999999999999} />
        </Form.Item>

        <Form.Item
          name="salary"
          label="Expected Salary"
          rules={[{ required: true }]}
        >
          <InputNumber controls={false} max={99999999} />
        </Form.Item>

        <Button type="default" htmlType="reset">
          Reset
        </Button>
        <Button type="default" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormPage;
