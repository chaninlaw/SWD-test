import { DatePicker, Form } from "antd";
import { t } from "i18next";

const BirthDatePicker: React.FC = () => {
  return (
    <Form.Item
      name="birth"
      label={t("birthDate")}
      rules={[{ required: true, message: t("birthIsRequired") }]}
    >
      <DatePicker placeholder={t("selectDate")} />
    </Form.Item>
  );
};

export default BirthDatePicker;
