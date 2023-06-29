import { Card } from "antd";

type Props = {
  control: string;
  children?: React.ReactNode;
};

const Controller = ({ control, children }: Props) => {
  return (
    <Card
      hoverable
      style={{
        width: "250px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className={control}>{children}</div>
    </Card>
  );
};

export default Controller;
