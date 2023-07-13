import { Form, Select } from "antd";

const NationaInput = () => {
  return (
    <Form.Item name="nation" label="Nationality" rules={[{ required: true }]}>
      <Select placeholder="- - Option - -" allowClear>
        <Select.Option value="American">American</Select.Option>
        <Select.Option value="Chinese">Chinese</Select.Option>
        <Select.Option value="Thai">Thai</Select.Option>
      </Select>
    </Form.Item>
  );
};

export default NationaInput;
