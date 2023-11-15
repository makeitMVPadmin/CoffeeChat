import "./EditProfile.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import { app, db } from "../../App";
import { getAuth } from "firebase/auth";
import { updateDoc, doc, getDoc } from "@firebase/firestore";
import { async } from "@firebase/util";




export const EditProfile = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [postal, setPostal] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
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
                            console.log('doc', doc.data())
                            setName(doc.data().FullName)
                            setEmail(doc.data().email)
                            setPostal(doc.data().postal)
                            setPhoneNumber(doc.data().phoneNumber)
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



    const updateProfile = (e) => {
        e.preventDefault()
        auth.onAuthStateChanged((user) => {
            if (user != null) {
                const userId = doc(db, 'user', user.uid)
                updateDoc(userId, {
                    FullName: name,
                    email: email,
                    postal: postal,
                    PhoneNumber: phoneNumber,
                    field: field,
                })
                .then(()=>{
                    alert('Profile Updated')
                })
                .then(()=>{
                    Navigate('/')
                })
                    
            }
            else {
                Navigate('/login')
            }
        });
    };
    





    return (
        <div className="editProfileBody">

            <div className='picDiv'>
                <img className="editPic" alt="user-avatar-img" src=""></img>
            </div>

            <p style={{textAlign:'center', marginBottom:'1.5rem'}}>Choose Your Avatar</p>

            <form
                className="editProfileForm"
                onSubmit={updateProfile}
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
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
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
                    <button className="editBtn" onClick={updateProfile}>Edit Profile</button>
                </div>


            </form>

            <div className="backgroundEditProfile"></div>
            <div className="backgroundEditProfile2"></div>
            <Navbar />
        </div>
    )
}