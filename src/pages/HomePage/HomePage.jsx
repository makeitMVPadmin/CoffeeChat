import "./HomePage.scss";
import Navbar from "../../components/Navbar/Navbar";
import Slider from 'slider-moon';
import 'slider-moon/dist/style.css'
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


  const items = [
    {
      id: '12',
      img: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    // {
    //   id: '11',
    //   img: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600'
    // },
  ]


  return (
    <View className="home">
      <ScrollView>
      <div className="homeHeader">
        <h1 className="WelcomeTitle">Welcome, <br></br> name!</h1>
        <div className="accountBtn"></div>
      </div>

      {/* <Slider
        slideClass={'my-slider'}
        infinite={true}
        
        animation={'scale'}
        callback={() => {
          console.log('here');
        }}
      >
        <div className='slider my-slider'>
          <ul className='slider-wrapper'>
          {items.map((item) => (
          <li key={item.id}>
            <img src={item.img} />
          </li>
        ))}
          </ul>
        </div>
      </Slider> */}

      <div className="carousel">
        carousel
      </div>

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
