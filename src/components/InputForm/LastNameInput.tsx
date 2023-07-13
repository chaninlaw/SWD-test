import { Form, Input } from "antd";

const LastNameInput = () => {
  return (
    <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
  );
};

export default LastNameInput;
