import { DatePicker, Form } from "antd";

const BirthDatePicker = () => {
  return (
    <Form.Item name="birth" label="Birth Date" rules={[{ required: true }]}>
      <DatePicker />
    </Form.Item>
  );
};

export default BirthDatePicker;
