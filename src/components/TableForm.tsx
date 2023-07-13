import { useState } from "react";
import { Table, Typography, Popconfirm, Form } from "antd";
import type { ColumnsType } from "antd/es/table";
import { t } from "i18next";

export interface DataType {
  key: React.Key;
  title: string;
  firstName: string;
  lastName: string;
  birth?: string;
  nation: string;
  idCard?: string;
  gender: string;
  phoneCode?: string;
  phoneNumber: string;
  passportId?: string;
  salary: number;
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
      key: "name",
      title: t("name"),
      dataIndex: ["firstName", "lastName"],
      render: (_, { firstName, lastName }) => (
        <Typography>{`${firstName} ${lastName}`}</Typography>
      ),
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      editable: true,
    },
    {
      key: "gender",
      title: t("gender"),
      dataIndex: "gender",
      sorter: (a, b) => a.gender.localeCompare(b.gender),
      editable: true,
    },
    {
      key: "phoneNumber",
      title: t("phoneNumber"),
      dataIndex: "phoneNumber",
      sorter: (a, b) => a.phoneNumber.localeCompare(b.phoneNumber),
      editable: true,
    },
    {
      key: "nation",
      title: t("nation"),
      dataIndex: "nation",
      sorter: (a, b) => a.nation.localeCompare(b.nation),
      editable: true,
    },
    {
      title: t("operation"),
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
    <Form form={form} style={{ width: "90vw" }}>
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
      />
    </Form>
  );
};

export default TableForm;
