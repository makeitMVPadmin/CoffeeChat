import "./EditProfile.scss";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import { app, db } from "../../App";
import { getAuth } from "firebase/auth";
import { updateDoc, doc, getDoc } from "@firebase/firestore";
import {getStorage, ref, uploadBytes} from "firebase/storage";
import blankUserImg from '../../assets/images/blankUserImg.png'



export const EditProfile = () => {
    const [loading, setLoading] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [field, setField] = useState('')
    const [bio, setBio] = useState('')
    const [ProfileImg, setProfileImg] = useState(blankUserImg)
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
                        })

                }
                else {
                    Navigate('/login')
                }
                
            });
        };

        checkUserAuth();

    }, [])



    const updateProfile = (e) => {
        e.preventDefault()
        auth.onAuthStateChanged((user) => {
            if (user != null) {
                const userId = doc(db, 'user', user.uid)
                updateDoc(userId, {
                    FullName: name,
                    Email: email,
                    City: city,
                    State: state,
                    PhoneNumber: phoneNumber,
                    Field: field,
                    Bio: bio
                })

                    .then(() => {
                        Navigate('/')
                    })

            }
            else {
                Navigate('/login')
            }
        });
    };



    // const UploadImage = () => {
    //     const storage = getStorage();
    //     const uploadImg = (event) => {
    //         const file = event.target.files[0];
    //         auth.onAuthStateChanged((user) => {
    //             if (user) {
    //                 const fileRef = ref(storage, `${user.uid}.png`);
    //                 setLoading(true);
    //                 const uploadTask = uploadBytes(fileRef, file);
    //                 uploadTask.then((snapshot) => {
    //                     setLoading(false);
    //                     setProfileImg(snapshot);
    //                 }).catch((error) => {
    //                     console.error('Error uploading image:', error);
    //                     setLoading(false);
    //                 });
    //             }
    //         });
    //     };
    // }


    // const uploadImg = (file, setLoading) => {
    //     auth.onAuthStateChanged((user) =>{
    //         const fileRef = ref(storage, user.uid + '.png')

    //         setLoading(true)

    //         const snapshot = uploadBytes(fileRef, file)

    //         setLoading(false)
    //         setProfileImg(snapshot)
    //         console.log(fileRef)
    //         console.log(snapshot)
    //     })

        
    // }


    // const uploadImg = (event) => {
    //     const file = event.target.files[0];

    //     auth.onAuthStateChanged((user) => {
    //       if (user) {
    //         const fileRef = ref(storage, `${user.uid}.png`);
    //         const storage = getStorage();
            
    //         setLoading(true);
    //         const uploadTask = uploadBytes(fileRef, file);
    //         uploadTask.then((snapshot) => {
    //           setLoading(false);
    //           setProfileImg(snapshot);
    //         }).catch((error) => {
    //           console.error('Error uploading image:', error);
    //           setLoading(false);
    //         });
    //       }
    //     });
    //   };




    return (
        <div className="editProfileBody">

            <div className='picDiv'>
                <img className="editPic" alt="user-avatar-img" src={ProfileImg}></img>
            </div>

            <div className="uploadImgDiv">
                <label for="file-upload" className="custom-file-upload">
                    <i class="fa fa-cloud-upload"></i>Upload Profile Image
                </label>
                <input id="file-upload" type="file"   className="imgUpload" />
            </div>

            <form
                action="/action_page.php"
                className="editProfileForm"
                onSubmit={updateProfile}
            >
                <div className="inputDivs">
                    <span className="editLabels">Full Name</span>
                    <input
                        type="text"
                        defaultValue={name}
                        maxLength='20'
                        onChange={(e) => setName(e.target.value)}
                        className="inputEdit">
                    </input>
                </div>

                <div className="inputDivs">
                    <span className="editLabels">Email</span>
                    <input
                        type="email"
                        maxLength='25'
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="inputEdit">
                    </input>
                </div>

                <div className="smallerInputs">
                    <div className="inputDivs">
                        <span className="editLabels">City</span>
                        <input
                            type="text"
                            maxLength='20'
                            defaultValue={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="inputEdit2">
                        </input>
                    </div>

                    <div className="inputDivs">
                        <span className="editLabels">State</span>
                        <input
                            type="text"
                            maxLength='2'
                            defaultValue={state}
                            onChange={(e) => setState(e.target.value)}
                            className="inputEdit2">
                        </input>
                    </div>

                </div>


                <div className="inputDivs">
                    <span className="editLabels">Phone Number</span>
                    <input
                        type="tel"
                        maxLength='12'
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="000-000-0000"
                        defaultValue={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="inputEdit">
                    </input>
                </div>

                <div className="inputDivs">
                    <span className="editLabels">Field & Level</span>
                    <input
                        type="text"
                        maxLength='20'
                        defaultValue={field}
                        onChange={(e) => setField(e.target.value)}
                        className="inputEdit">
                    </input>
                </div>

                <div className="inputDivs">
                    <span className="editLabels">Bio</span>
                    <textarea
                        type="text"
                        maxLength='200'
                        defaultValue={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="bioInput">
                    </textarea>
                </div>

                <div className="btnDiv">
                    <button className="editBtn" onClick={updateProfile}>Edit Profile</button>
                </div>


            </form>

            <div className="backgroundEditProfile"></div>
            <div className="backgroundEditProfile2"></div>
            <Navbar />
        </div>
    )
}