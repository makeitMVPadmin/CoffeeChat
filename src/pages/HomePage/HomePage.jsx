import "./HomePage.scss";
import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div className="home">
      <h1 className="home__title"> Welcome !</h1>
      <Navbar />
    </div>
  );
};

export default HomePage;
