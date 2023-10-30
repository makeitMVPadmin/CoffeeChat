import "./HomePage.scss";
import Navbar from "../../components/Navbar/Navbar";
import { Carousel } from "../../components/carousel";
import Slider from 'slider-moon';
import 'slider-moon/dist/style.css'
import {
  FlatList,
  ScrollView,
  Text,
  StyleSheet,
  View,
} from 'react-native';





const HomePage = () => {





  return (
    <View className="home">
      <ScrollView>
      <div className="homeHeader">
        <h1 className="WelcomeTitle">Welcome, <br></br> name!</h1>
        <div className="accountBtn"></div>
      </div>
      
      <Carousel/>

      <h3 style={{ textAlign: 'center' }} >Schedule</h3>

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

      <div className="lowerDiv">
        <div className="connections"> new connections</div>
        <div className="connections"> interactions</div>
      </div>



      </ScrollView>
      <Navbar />
    </View>
  );
};

export default HomePage;
