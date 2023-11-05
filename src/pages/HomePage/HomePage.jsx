import "./HomePage.scss";
import Navbar from "../../components/Navbar/Navbar";
import { app } from "../../App";
import { getAuth, signOut } from "firebase/auth";

const HomePage = () => {

const auth = getAuth(app)


  const logout = () => {
    signOut(auth).then(() => {
        console.log('logged out')
    }).catch((error) => {
        console.log('error', error)
    });
}
  return (
    <div className="home">
      <h1 className="home__title"> Welcome !</h1>
      <Navbar />
    </div>
  );
};

export default HomePage;
