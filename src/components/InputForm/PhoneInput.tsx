import { Form, Input, Select } from "antd";
import { t } from "i18next";

const prefixSelector = (
  <Form.Item name="phoneCode" noStyle initialValue="0">
    <Select style={{ width: 70 }}>
      <Select.Option value="0">+66</Select.Option>
    </Select>
  </Form.Item>
);

const PhoneInput = () => {
  return (
    <Form.Item
      name="phoneNumber"
      label={t("phoneNumber")}
      rules={[{ required: true, message: t("phoneNumberIsRequired") }]}
    >
      <Input addonBefore={prefixSelector} maxLength={9} />
    </Form.Item>
  );
};

export default PhoneInput;
