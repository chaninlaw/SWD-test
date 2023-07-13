import { Form, InputNumber, Space } from "antd";
import { t } from "i18next";

const IdCardInput: React.FC = () => {
  return (
    <Form.Item label={t("nationId")}>
      <Space.Compact
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: 5,
        }}
      >
        <Form.Item name="idCard1" noStyle>
          <InputNumber
            id="id1"
            onKeyUp={(e) => {
              if (e.target.value.length === 1) {
                document.getElementById("id2")?.focus();
              }
            }}
            controls={false}
            maxLength={1}
            style={{ width: 40 }}
          />
        </Form.Item>
        <Space align="start"> - </Space>
        <Form.Item name="idCard2" noStyle>
          <InputNumber
            id="id2"
            onKeyUp={(e) => {
              if (e.target.value.length === 4) {
                document.getElementById("id3")?.focus();
              }
            }}
            controls={false}
            maxLength={4}
            style={{ width: 70 }}
          />
        </Form.Item>
        <Space> - </Space>
        <Form.Item name="idCard3" noStyle>
          <InputNumber
            id="id3"
            onKeyUp={(e) => {
              if (e.target.value.length === 5) {
                document.getElementById("id4")?.focus();
              }
            }}
            controls={false}
            maxLength={5}
            style={{ width: 80 }}
          />
        </Form.Item>
        <Space> - </Space>
        <Form.Item name="idCard4" noStyle>
          <InputNumber
            id="id4"
            onKeyUp={(e) => {
              if (e.target.value.length === 2) {
                document.getElementById("id5")?.focus();
              }
            }}
            controls={false}
            maxLength={2}
            style={{ width: 50 }}
          />
        </Form.Item>
        <Space> - </Space>
        <Form.Item name="idCard5" noStyle>
          <InputNumber
            id="id5"
            controls={false}
            maxLength={1}
            style={{ width: 40 }}
          />
        </Form.Item>
      </Space.Compact>
    </Form.Item>
  );
};

export default IdCardInput;
