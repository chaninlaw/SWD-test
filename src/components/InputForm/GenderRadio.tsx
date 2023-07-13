import { Form, Radio } from "antd";

const GenderRadio = () => {
  return (
    <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
      <Radio.Group>
        <Radio value="Male"> Male </Radio>
        <Radio value="Female"> Female </Radio>
        <Radio value="Prefer not to say">Prefer not to say</Radio>
      </Radio.Group>
    </Form.Item>
  );
};

export default GenderRadio;
