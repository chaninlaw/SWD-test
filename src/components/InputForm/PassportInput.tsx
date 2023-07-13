import { Form, InputNumber } from "antd";

const PassportInput = () => {
  return (
    <Form.Item name="passportId" label="Passport ID">
      <InputNumber controls={false} max={9999999999999} />
    </Form.Item>
  );
};

export default PassportInput;
