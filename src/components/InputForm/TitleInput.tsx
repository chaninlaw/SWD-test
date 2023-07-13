import { Form, Select } from "antd";
import { t } from "i18next";

const TitleInput: React.FC = () => {
  return (
    <Form.Item
      name={"title"}
      label={t("title")}
      rules={[{ required: true, message: t("titleIsRequired") }]}
    >
      <Select style={{ width: 80 }} placeholder={t("title")}>
        <Select.Option value={"Mr."}>{t("mr")}</Select.Option>
        <Select.Option value={"Mrs."}>{t("mrs")}</Select.Option>
        <Select.Option value={"Miss"}>{t("miss")}</Select.Option>
      </Select>
    </Form.Item>
  );
};

export default TitleInput;
