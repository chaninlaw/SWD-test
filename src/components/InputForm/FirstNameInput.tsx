import { Form, Input } from "antd";
import { t } from "i18next";

const FirstNameInput: React.FC = () => {
  return (
    <Form.Item
      label={t("firstName")}
      name={"firstName"}
      rules={[{ required: true, message: t("firstNameIsRequired") }]}
      required
    >
      <Input />
    </Form.Item>
  );
};

export default FirstNameInput;
