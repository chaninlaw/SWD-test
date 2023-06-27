import "./Home.css";
import { Card } from "antd";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <section className="card-container">
      <Link to="/layout" style={{ textDecoration: "none" }}>
        <Card
          className="card-home"
          title="Test 1"
          bordered={false}
          style={{ width: 300 }}
        >
          <p>Layout & Style</p>
        </Card>
      </Link>
      <Link to="/form" style={{ textDecoration: "none" }}>
        <Card
          className="card-home"
          title="Test 2"
          bordered={false}
          style={{ width: 300 }}
          onClick={() => console.log("Click!")}
        >
          <p>Form & Table</p>
        </Card>
      </Link>
    </section>
  );
};

export default Home;
