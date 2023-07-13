import { useState } from "react";
import { Table, Typography, Popconfirm, Form, Space } from "antd";
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
  onDelete: () => void;
  onEdit: () => void;
}

const TableForm: React.FC<Props> = ({ dataSource, onDelete, onEdit }) => {
  const [form] = Form.useForm();
  const [selectAlreadyRow, setSelectAlreadyRow] = useState<React.Key[]>([]);

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
      render: (_, record) => {
        return (
          <Space direction="horizontal">
            <Typography.Link onClick={() => onEdit(record)}>
              Edit
            </Typography.Link>
            <Typography.Link onClick={() => onDelete(record)}>
              Delete
            </Typography.Link>
          </Space>
        );
      },
    },
  ];

  return (
    <Form form={form} style={{ width: "95vw" }}>
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
