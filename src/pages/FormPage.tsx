import { useState, useEffect, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import TableForm, { DataType } from "../components/TableForm";
import { Button, Form, Input, Modal, Space, Typography } from "antd";
import * as InputForm from "../components/InputForm";
import { t } from "i18next";

const getLocalStorage = () => {
  const submissions = localStorage.getItem("submissions");
  if (submissions) {
    return JSON.parse(submissions);
  } else {
    return [];
  }
};

const FormPage: React.FC = () => {
  const [form] = Form.useForm();
  const [submissions, setSubmissions] = useState<DataType[]>(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editingRecord, setEditingRecord] = useState<DataType | null>(null);

  useEffect(() => {
    localStorage.setItem("submissions", JSON.stringify(submissions));
  });

  const onFinish = (values: DataType) => {
    console.log(values);
    const submission = {
      ...values,
      key: uuidv4(),
    };
    setSubmissions([...submissions, submission]);
    form.resetFields();
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingRecord(null);
  };

  const onEdit = (record: DataType) => {
    setIsEditing(true);
    submissions.map((submission) => {
      if (submission.key === record.key) {
        setEditingRecord(record);
      }
    });
  };

  const onDelete = (record: DataType) => {
    Modal.confirm({
      title: "Delete the record",
      content: (
        <Typography>
          Name: {record.firstName} {record.lastName} <br />
          Gender: {record.gender} <br />
          Phone Number: {record.phoneNumber} <br />
          Nationality: {record.nation} <br />
          <strong>Are you sure to delete this record?</strong>
        </Typography>
      ),
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: () => {
        const updateSubmissions = submissions.filter(
          (submission) => submission.key !== record.key
        );
        setSubmissions(updateSubmissions);
      },
    });
  };

  return (
    <Space direction="vertical" style={{ width: "100vw" }}>
      <Typography.Title style={{ marginLeft: 30 }}>
        {t("formAndTable")}
      </Typography.Title>
      <Space
        direction="vertical"
        style={{
          width: "100%",
          maxWidth: "1000px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <Form
          layout="inline"
          form={form}
          name="register"
          onFinish={onFinish}
          style={{
            border: "2px solid gray",
            padding: 20,
            gap: 20,
            borderRadius: 20,
          }}
        >
          <InputForm.TitleInput />
          <InputForm.FirstNameInput />
          <InputForm.LastNameInput />
          <InputForm.BirthDatePicker />
          <InputForm.NationalInput />
          <InputForm.IdCardInput />
          <InputForm.GenderRadio />
          <InputForm.PhoneInput />
          <InputForm.PassportInput />
          <InputForm.SalaryInput />

          <Form.Item>
            <Button htmlType="reset">{t("resetButton")}</Button>
            <Button htmlType="submit">{t("submitButton")}</Button>
          </Form.Item>
        </Form>

        <TableForm
          dataSource={submissions}
          onDelete={onDelete}
          onEdit={onEdit}
        />
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
                  (prev) =>
                    prev && { ...prev, phoneNumber: String(e.target.value) }
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
      </Space>
    </Space>
  );
};

export default FormPage;
