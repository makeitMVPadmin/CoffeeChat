import "./ProfilePage.scss";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import { app, db } from "../../App";
import { getAuth, signOut } from "firebase/auth";
import { updateDoc, doc, getDoc } from "@firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import logoutRounded from '../../assets/icons/extras/logoutRounded.png'
import bag from '../../assets/icons/profile/bag.svg'
import badge from '../../assets/icons/profile/badge.png'
import mentorHand from '../../assets/icons/profile/mentorHand.svg'



const ProfilePage = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [field, setField] = useState('')
  const [bio, setBio] = useState('')
  const [ProfileImg, setProfileImg] = useState('')
  const Navigate = useNavigate()
  const auth = getAuth(app)



  useEffect(() => {
    const checkUserAuth = () => {
      auth.onAuthStateChanged((user) => {
        if (user != null) {
          const userRef = doc(db, 'user', user.uid)
          getDoc(userRef)
            .then((doc) => {
              console.log('doc', doc.data())
              setName(doc.data().FullName)
              setEmail(doc.data().Email)
              setCity(doc.data().City)
              setState(doc.data().State)
              setPhoneNumber(doc.data().PhoneNumber)
              setField(doc.data().Field)
              setBio(doc.data().Bio)
              setProfileImg(doc.data().ProfileImg)
            })

        }
        else {
          Navigate('/login')
        }

      });
    };

    checkUserAuth();

  }, [])


  const logout = () => {
    signOut(auth).then(() => {
      console.log('logged out')
    }).catch((error) => {
      console.log('error', error)
    });
  }



  return (


    <div className="profile__content">

      <div className="logoutBtn" onClick={logout}>
        <img src={logoutRounded} alt="logoutButton" className="logoutImg" />
      </div>


      <div className='picDiv'>
        <img
          className="editPic"
          alt="user-avatar-img"
          src={ProfileImg}>
        </img>
      </div>

      <h1 className="profileName">{name}</h1>
      <p className="profile__location">{city}, {state}</p>

      <div className="btnProfileDiv">
        <button className="editProfileBtn" onClick={() => Navigate('/EditProfile')}>Edit Profile</button>
      </div>


      <div className="profile__backGroundLower">

        <div className="profile__card">
          <div className="profile__card--container">
            <img className="profile__icon" src={bag} alt="work icon" />
            <p className="profile__role">{field}</p>
          </div>
          <div className="profile__card--container">
            <img className="profile__icon" src={badge} alt="work icon" />
            <p className="profile__seniority">Senior Level - 4 years</p>
          </div>
          <div className="profile__card--container">
            <img className="profile__icon" src={mentorHand} alt="work icon" />
            <p className="prolfile__sessions">30 Mentor Sessions</p>
          </div>
          <div className="profile__card--container">
            <img className="profile__icon" src="#" alt="work icon" />
            <a className="profile__linkedin" href="www.linkedin.com">
              LinkedIn.com/RichYin
            </a>
          </div>
        </div>

        <div className="profile__description">
          <div className="profile__tech--container">
            <div className="profile__tech--row">
              <p>Expertise</p>
              {/* {skills.map(())} */}
              <p className="profile__tech">Java</p>
              <p className="profile__tech">C++</p>
              <p className="profile__tech">HTML5</p>
            </div>
          </div>
          <p className="profile_bio"> {bio}</p>
        </div>

      </div>

      <div className="profile__backGroundCircle"></div>
      <Navbar/>
    </div>
  );
};

export default ProfilePage;
