import { useState } from "react";
import { Table } from "antd";
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

const columns: ColumnsType<DataType> = [
  {
    key: "1",
    title: "Name",
    dataIndex: "firstName",
    sorter: (a, b) => a.firstName.localeCompare(b.firstName),
  },
  {
    key: "2",
    title: "Gender",
    dataIndex: "gender",
    sorter: (a, b) => a.gender.localeCompare(b.gender),
  },
  {
    key: "3",
    title: "Phone number",
    dataIndex: "phone",
    sorter: (a, b) => a.phone.localeCompare(b.phone),
  },
  {
    key: "4",
    title: "Nationality",
    dataIndex: "nation",
    sorter: (a, b) => a.nation.localeCompare(b.nation),
  },
];

const TableForm: React.FC<Props> = ({ dataSource }) => {
  const [selectAlreadyRow, setSelectAlreadyRow] = useState<React.Key[]>([]);
  return (
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
  );
};

export default TableForm;
