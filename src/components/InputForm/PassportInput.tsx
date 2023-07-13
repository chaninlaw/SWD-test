import { Form, InputNumber } from "antd";
import { t } from "i18next";

const PassportInput = () => {
  return (
    <Form.Item name="passportId" label={t("passportId")}>
      <InputNumber controls={false} maxLength={14} />
    </Form.Item>
  );
};

export default PassportInput;
