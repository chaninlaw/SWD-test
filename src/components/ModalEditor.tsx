import { ChangeEvent } from "react";
import { Form, Input, Modal } from "antd";
import { t } from "i18next";
import { DataType } from "./TableForm";

type Props = {
  isEditing: boolean;
  editingRecord: DataType | null;
  resetEditing: () => void;
};

const ModalEditor: React.FC<Props> = ({
  isEditing,
  editingRecord,
  resetEditing,
}) => {
  return (
    <Modal
      title={"Edit the record"}
      open={isEditing}
      okText={"Save"}
      onCancel={resetEditing}
      onOk={() => {
        setSubmissions((prev) => {
          return prev.map((record) => {
            if (editingRecord && record.key === editingRecord.key) {
              return editingRecord;
            } else {
              return record;
            }
          });
        });
        resetEditing();
      }}
    >
      <Form.Item label={t("firstName")}>
        <Input
          value={editingRecord?.firstName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEditingRecord(
              (prev) => prev && { ...prev, firstName: e.target.value }
            )
          }
        />
      </Form.Item>
      <Form.Item label={t("lastName")}>
        <Input
          value={editingRecord?.lastName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEditingRecord(
              (prev) => prev && { ...prev, lastName: e.target.value }
            )
          }
        />
      </Form.Item>
      <Form.Item label={t("gender")}>
        <Input
          value={editingRecord?.gender}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEditingRecord(
              (prev) => prev && { ...prev, gender: e.target.value }
            )
          }
        />
      </Form.Item>
      <Form.Item label={t("phoneNumber")}>
        <Input
          max={9}
          value={String(editingRecord?.phoneNumber)}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setEditingRecord(
              (prev) => prev && { ...prev, phoneNumber: String(e.target.value) }
            );
          }}
          maxLength={9}
        />
      </Form.Item>
      <Form.Item label={t("nation")}>
        <Input
          value={editingRecord?.nation}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEditingRecord(
              (prev) => prev && { ...prev, nation: e.target.value }
            )
          }
        />
      </Form.Item>
    </Modal>
  );
};

export default ModalEditor;
