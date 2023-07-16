import { Card, Space } from "antd";
import { Link } from "react-router-dom";
import { t } from "i18next";

const styles = {
  card: {
    width: 300,
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
  },
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "20px",
  },
};

const Home: React.FC = () => {
  return (
    <Space style={styles.container}>
      <Link to="/layout" style={styles.link}>
        <Card title={t("test1")} bordered={false} style={styles.card}>
          <p>{t("layoutAndStyle")}</p>
        </Card>
      </Link>
      <Link to="/form" style={styles.link}>
        <Card
          className="card-home"
          title={t("test2")}
          bordered={false}
          style={styles.card}
        >
          <p>{t("formAndTable")}</p>
        </Card>
      </Link>
    </Space>
  );
};

export default Home;
