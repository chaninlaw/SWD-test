import { Form, InputNumber } from "antd";
import { t } from "i18next";

const SalaryInput = () => {
  return (
    <Form.Item
      name="salary"
      label={t("expectedSalary")}
      rules={[{ required: true }]}
    >
      <InputNumber controls={false} max={99999999} />
    </Form.Item>
  );
};

export default SalaryInput;
