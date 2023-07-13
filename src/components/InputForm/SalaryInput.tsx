import { Form, InputNumber } from "antd";

const SalaryInput = () => {
  return (
    <Form.Item
      name="salary"
      label="Expected Salary"
      rules={[{ required: true }]}
    >
      <InputNumber controls={false} max={99999999} />
    </Form.Item>
  );
};

export default SalaryInput;
