import "./EditProfile.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import { app, db } from "../../App";
import { getAuth } from "firebase/auth";
import { collection, doc, getDoc } from "@firebase/firestore";




export const EditProfile = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [postal, setPostal] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [field, setField] = useState('')
    const Navigate = useNavigate()
    const auth = getAuth(app)



    useEffect(() => {
        const checkUserAuth = () => {
            auth.onAuthStateChanged((user) => {
                if (user != null) {
                    const userRef = doc(db, 'user', user.uid)
                    getDoc(userRef)
                        .then((doc) => {
                            console.log('doc', doc.data().username)
                            setName(doc.data().username)
                            setEmail(doc.data().email)
                            setPostal(doc.data().postal)
                            setPhoneNum(doc.data().phoneNumber)
                            setField(doc.data().field)
                        })
                }
                else {
                    Navigate('/login')
                }
            });
        };

        checkUserAuth();

    }, [])



    // const updateProfile = (e) =>{
    //     e.preventDefault()
    //     .then((resp)=> {
    //         console.log(resp)
    //         //document id is their uid
    //          setDoc(doc(db, "user", resp.user.uid), {
    //             fullName: name,
    //             email: email,
    //             connections: 0,
    //             Appointments: 0,
    //             Chats: 0,
    //             Location: '',
    //             Industry: '',
    //             Mentee: null,
    //             Mentor: null,
    //             // DateCreated:      
    //          })
    //     })
    //     .then(()=> {
    //         const checkUserAuth = () => {
    //             auth.onAuthStateChanged((user) => {
    //               if (user != null) {
    //                 Navigate('/')
    //               }
    //             });
    //           };
          
    //           checkUserAuth();
    //     })
    //     .catch((err)=>{
    //         console.log(err, 'error')
    //     })
        
    // }





    return (
        <div className="editProfileBody">

            <div className='picDiv'>
                <img className="editPic" alt="user-avatar-img" src=""></img>
            </div>

            <p style={{textAlign:'center', marginBottom:'1.5rem'}}>Choose Your Avatar</p>

            <form
                className="editProfileForm"
            >
                <div className="inputDivs">
                    <span className="editLabels">Full Name</span>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="inputEdit">
                    </input>
                </div>

                <div className="inputDivs">
                    <span className="editLabels">Email</span>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="inputEdit">
                    </input>
                </div>


                <div className="smallerInputs">
                    <div className="inputDivs">
                        <span className="editLabels">Postal Code</span>
                        <input
                            type="number"
                            value={postal}
                            onChange={(e) => setPostal(e.target.value)}
                            className="inputEdit2">
                        </input>
                    </div>

                    <div className="inputDivs">
                        <span className="editLabels">Phone Number</span>
                        <input
                            type="number"
                            value={phoneNum}
                            onChange={(e) => setPhoneNum(e.target.value)}
                            className="inputEdit2">
                        </input>
                    </div>

                </div>

                <div className="inputDivs">
                    <span className="editLabels">Field & Level</span>
                    <input
                        type="text"
                        value={field}
                        onChange={(e) => setField(e.target.value)}
                        className="inputEdit">
                    </input>
                </div>

                <div className="btnDiv">
                    <button className="editBtn">Create Profile</button>
                </div>


            </form>

            <div className="backgroundEditProfile"></div>
            <div className="backgroundEditProfile2"></div>
            <Navbar />
        </div>
    )
}