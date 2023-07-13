import { useState } from "react";
import { Form, Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { t } from "i18next";

const GenderRadio: React.FC = () => {
  const [value, setValue] = useState("Male");

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Form.Item
      name="gender"
      label={t("gender")}
      rules={[{ required: true }]}
      initialValue="Male"
    >
      <Radio.Group onChange={onChange} value={value}>
        <Radio value="Male">{t("male")}</Radio>
        <Radio value="Female">{t("female")}</Radio>
        <Radio value="Prefer not to say">{t("preferNotSay")}</Radio>
      </Radio.Group>
    </Form.Item>
  );
};

export default GenderRadio;
