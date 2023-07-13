import { Form, InputNumber } from "antd";
import { t } from "i18next";

const SalaryInput = () => {
  return (
    <Form.Item
      name="salary"
      label={t("expectedSalary")}
      rules={[{ required: true, message: t("expectedSalaryIsRequired") }]}
    >
      <InputNumber
        controls={false}
        maxLength={8}
        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      />
    </Form.Item>
  );
};

export default SalaryInput;
