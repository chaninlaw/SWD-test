import { Form, Input } from "antd";

const FirstNameInput = () => {
  return (
    <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
  );
};

export default FirstNameInput;
