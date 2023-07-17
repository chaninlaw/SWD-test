import { useState } from "react";
import { Table, Typography, Space, Checkbox, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { t } from "i18next";
import { DataType } from "../store/slices/submisstionsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface Props {
  onDelete: (record: DataType) => void;
  onEdit: (record: DataType) => void;
  onDeleteSelected: (
    record: React.Key[],
    setSelectAll: (isSelect: boolean) => void
  ) => void;
}

const TableForm: React.FC<Props> = ({ onDelete, onEdit, onDeleteSelected }) => {
  const submissions = useSelector((state: RootState) => state.submissions);
  const [selectAlreadyRow, setSelectAlreadyRow] = useState<React.Key[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const columns: ColumnsType<DataType> = [
    {
      key: "name",
      title: t("name"),
      dataIndex: ["firstName", "lastName"],
      render: (_, { firstName, lastName }) => (
        <Typography>{`${firstName} ${lastName}`}</Typography>
      ),
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      key: "gender",
      title: t("gender"),
      dataIndex: "gender",
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      key: "phoneNumber",
      title: t("phoneNumber"),
      dataIndex: "phoneNumber",
      sorter: (a, b) => a.phoneNumber.localeCompare(b.phoneNumber),
    },
    {
      key: "nation",
      title: t("nation"),
      dataIndex: "nation",
      sorter: (a, b) => a.nation.localeCompare(b.nation),
    },
    {
      title: t("operation"),
      dataIndex: "operation",
      render: (_, record) => {
        return (
          <Space direction="horizontal">
            <Button onClick={() => onEdit(record)}>{t("edit")}</Button>
            <Button danger onClick={() => onDelete(record)}>
              {t("delete")}
            </Button>
          </Space>
        );
      },
    },
  ];

  const handleCheckboxChange = () => {
    if (isChecked) {
      setSelectAlreadyRow([]);
      setIsChecked(false);
    } else {
      setSelectAlreadyRow([...submissions.map((record) => record.key)]);
      setIsChecked(true);
    }
  };

  return (
    <Space direction="vertical" style={{ columnGap: 20, width: "90vw" }}>
      <Space>
        <Checkbox checked={isChecked} onChange={handleCheckboxChange}>
          {t("selectAll")}
        </Checkbox>
        <Button
          onClick={() => onDeleteSelected(selectAlreadyRow, setIsChecked)}
        >
          {t("delete")}
        </Button>
      </Space>
      <Table
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
        }}
        columns={columns}
        dataSource={submissions}
        rowSelection={{
          type: "checkbox",
          selectedRowKeys: selectAlreadyRow,
          onChange: (key) => {
            setSelectAlreadyRow(key);
          },
          onSelectAll: (selected) => {
            setIsChecked(selected);
          },
        }}
      />
    </Space>
  );
};

export default TableForm;
