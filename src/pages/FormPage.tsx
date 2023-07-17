import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TableForm from "../components/TableForm";
import { Button, Form, Input, Modal, Space, Typography } from "antd";
import * as InputForm from "../components/InputForm";
import { t } from "i18next";
import type { DataType } from "../store/slices/submisstionsSlice";

import { useSelector, useDispatch } from "react-redux";
import {
  addSubmission,
  removeSubmission,
  removeMultiSubmissions,
  editSubmission,
} from "../store/slices/submisstionsSlice";
import { setEditingRecord, resetEditing } from "../store/slices/editingSlice";
import { RootState } from "../store";

const FormPage: React.FC = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const submissions = useSelector((state: RootState) => state.submissions);
  const editingRecord = useSelector((state: RootState) => state.editing);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("submissions", JSON.stringify(submissions));
  });

  const onFinish = (values: DataType) => {
    const submission = {
      ...values,
      key: uuidv4() as React.Key,
    };
    dispatch(addSubmission(submission));
    form.resetFields();
  };

  const resetEditingModal = () => {
    setIsModalVisible(false);
    dispatch(resetEditing());
  };

  const onEdit = (record: DataType) => {
    setIsModalVisible(true);
    submissions.map((submission) => {
      if (submission.key === record.key) {
        dispatch(setEditingRecord(record));
      }
    });
  };

  const onDelete = (record: DataType) => {
    Modal.confirm({
      title: t("deleteRecord"),
      content: (
        <Typography>
          {t("name")}: {record.firstName} {record.lastName} <br />
          {t("gender")}: {record.gender} <br />
          {t("phoneNumber")}: {record.phoneNumber} <br />
          {t("nation")}: {record.nation} <br />
          <strong>{t("deleteConfirm")}</strong>
        </Typography>
      ),
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: () => {
        dispatch(removeSubmission(record));
      },
    });
  };

  const onDeleteSelected = (
    records: React.Key[],
    setSelectAll: (isSelect: boolean) => void
  ) => {
    records.length &&
      Modal.confirm({
        title: t("deleteRecord"),
        content: (
          <Typography>
            <strong>
              {t("preDeleteConfirm")} {records.length} {t("records")}?
            </strong>
          </Typography>
        ),
        okText: t("yes"),
        okType: "danger",
        cancelText: t("no"),
        onOk: () => {
          dispatch(removeMultiSubmissions(records));
          setSelectAll(false);
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
          onDelete={onDelete}
          onEdit={onEdit}
          onDeleteSelected={onDeleteSelected}
        />

        <Modal
          title={t("editTitle")}
          open={isModalVisible}
          okText={t("save")}
          onCancel={resetEditingModal}
          cancelText={t("cancel")}
          onOk={() => {
            dispatch(editSubmission(editingRecord));
            resetEditingModal();
          }}
        >
          <Form.Item label={t("firstName")}>
            <Input
              value={editingRecord?.firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  setEditingRecord({
                    ...editingRecord,
                    firstName: e.target.value,
                  })
                )
              }
            />
          </Form.Item>
          <Form.Item label={t("lastName")}>
            <Input
              value={editingRecord?.lastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  setEditingRecord({
                    ...editingRecord,
                    lastName: e.target.value,
                  })
                )
              }
            />
          </Form.Item>
          <Form.Item label={t("gender")}>
            <Input
              value={editingRecord?.gender}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  setEditingRecord({ ...editingRecord, gender: e.target.value })
                )
              }
            />
          </Form.Item>
          <Form.Item label={t("phoneNumber")}>
            <Input
              max={9}
              value={String(editingRecord?.phoneNumber)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                  setEditingRecord({
                    ...editingRecord,
                    phoneNumber: e.target.value,
                  })
                );
              }}
              maxLength={9}
            />
          </Form.Item>
          <Form.Item label={t("nation")}>
            <Input
              value={editingRecord?.nation}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  setEditingRecord({
                    ...editingRecord,
                    nation: e.target.value,
                  })
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
