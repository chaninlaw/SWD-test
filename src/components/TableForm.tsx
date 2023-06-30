import { useState } from "react";
import { Table, Typography, Popconfirm, Form } from "antd";
import type { ColumnsType } from "antd/es/table";

export interface DataType {
  key: React.Key;
  title?: string;
  firstName: string;
  lastName?: string;
  birth?: string;
  nation: string;
  idCard?: string;
  gender: string;
  tel?: string;
  phone: string;
  passportId?: string;
  salary?: number;
}

interface Props {
  dataSource: DataType[];
}

const TableForm: React.FC<Props> = ({ dataSource }) => {
  const [form] = Form.useForm();
  const [selectAlreadyRow, setSelectAlreadyRow] = useState<React.Key[]>([]);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record: DataType) => record.key === editingKey;

  const columns: ColumnsType<DataType> = [
    {
      key: "1",
      title: "Name",
      dataIndex: "firstName",
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      editable: true,
    },
    {
      key: "2",
      title: "Gender",
      dataIndex: "gender",
      sorter: (a, b) => a.gender.localeCompare(b.gender),
      editable: true,
    },
    {
      key: "3",
      title: "Phone number",
      dataIndex: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
      editable: true,
    },
    {
      key: "4",
      title: "Nationality",
      dataIndex: "nation",
      sorter: (a, b) => a.nation.localeCompare(b.nation),
      editable: true,
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  return (
    <Form form={form} component={false}>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={{
          type: "checkbox",
          selectedRowKeys: selectAlreadyRow,
          onChange: (key) => {
            setSelectAlreadyRow(key);
          },
          onSelect: (record) => {
            console.log({ record });
          },
        }}
        style={{ minWidth: "1100px" }}
      ></Table>
    </Form>
  );
};

export default TableForm;
