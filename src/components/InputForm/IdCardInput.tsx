import { Form, InputNumber } from "antd";
import { t } from "i18next";

const IdCardInput: React.FC = () => {
  return (
    <Form.Item name="idCard" label={t("nationId")}>
      <InputNumber
        id="id1"
        onKeyUp={(e) => {
          if (e.target.value.length === 1) {
            document.getElementById("id2")?.focus();
          }
        }}
        controls={false}
        maxLength={1}
        style={{ width: 30 }}
      />
      {" - "}
      <InputNumber
        id="id2"
        onKeyUp={(e) => {
          if (e.target.value.length === 4) {
            document.getElementById("id3")?.focus();
          }
        }}
        controls={false}
        maxLength={4}
        style={{ width: 60 }}
      />
      {" - "}
      <InputNumber
        id="id3"
        onKeyUp={(e) => {
          if (e.target.value.length === 5) {
            document.getElementById("id4")?.focus();
          }
        }}
        controls={false}
        maxLength={5}
        style={{ width: 70 }}
      />
      {" - "}
      <InputNumber
        id="id4"
        onKeyUp={(e) => {
          if (e.target.value.length === 2) {
            document.getElementById("id5")?.focus();
          }
        }}
        controls={false}
        maxLength={2}
        style={{ width: 40 }}
      />
      {" - "}
      <InputNumber
        id="id5"
        controls={false}
        maxLength={1}
        style={{ width: 30 }}
      />
    </Form.Item>
  );
};

export default IdCardInput;
