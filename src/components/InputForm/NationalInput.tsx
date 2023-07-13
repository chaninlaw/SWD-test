import { Form, Select } from "antd";
import { t } from "i18next";

const NationalInput: React.FC = () => {
  return (
    <Form.Item
      name="nation"
      label={t("nation")}
      rules={[{ required: true, message: t("nationalIsRequired") }]}
    >
      <Select placeholder={t("option")} allowClear>
        <Select.Option value="American">{t("american")}</Select.Option>
        <Select.Option value="Chinese">{t("chinese")}</Select.Option>
        <Select.Option value="Thai">{t("thai")}</Select.Option>
      </Select>
    </Form.Item>
  );
};

export default NationalInput;
