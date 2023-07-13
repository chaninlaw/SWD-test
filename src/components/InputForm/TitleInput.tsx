import { Form, Select } from "antd";

const TitleInput = () => {
  return (
    <Form.Item name="title" label="Title" rules={[{ required: true }]}>
      <Select placeholder="title" allowClear>
        <Select.Option value="male">Mr.</Select.Option>
        <Select.Option value="female">Mrs.</Select.Option>
        <Select.Option value="other">Miss</Select.Option>
      </Select>
    </Form.Item>
  );
};

export default TitleInput;
