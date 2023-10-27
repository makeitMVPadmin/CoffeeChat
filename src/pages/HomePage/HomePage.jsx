import "./HomePage.scss";
import Navbar from "../../components/Navbar/Navbar";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
} from 'react-native';





const HomePage = () => {

  




  return (
    <View className="home">
      <div className="homeHeader">
        <h1 className="WelcomeTitle">Welcome, <br></br> name!</h1>
        <div className="accountBtn">account</div>
      </div>

      <div className="carousel">
        

      </div>

      <h3 style={{textAlign: 'center'}} >Schedule</h3>

      <div className="scheduleDiv">
        <div className="scheduleList">
          <div className="scheduledName">Richard Yin</div>
          <div>October 17 4:30pm (virtual)</div>
        </div>

        <div className="scheduleList">
          <div className="scheduledName">Richard Yin</div>
          <div>October 17 4:30pm (virtual)</div>
        </div>

      </div>

      <div>
        <div> new connections</div>
        <div> interactions</div>
      </div>

      


      <Navbar />
    </View>
  );
};

export default HomePage;
