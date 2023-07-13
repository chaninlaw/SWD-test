import { Form, Input, Select, Space } from "antd";

const PhoneInput = () => {
  return (
    <Form.Item label="Phone">
      <Space.Compact>
        <Form.Item name="phoneCode" noStyle rules={[{ required: true }]}>
          <Select style={{ width: "50%" }}>
            <Select.Option value="0">+66</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="phone" noStyle rules={[{ required: true }]}>
          <Input style={{ width: "100%" }} />
        </Form.Item>
      </Space.Compact>
    </Form.Item>
  );
};

export default PhoneInput;
