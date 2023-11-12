import "./EditProfile.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import { app, db } from "../../App";
import { getAuth, signOut } from "firebase/auth";
import { collection, doc, getDoc } from "@firebase/firestore";




export const EditProfile = () => {
    const [userName, setUserName] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [postal, setPostal] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [field, setField] = useState('')
    const [level, setLevel] = useState('')
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
                            setUserName(doc.data().username)
                            setEmail(doc.data().email)
                        })
                }
                else {
                    Navigate('/login')
                }
            });
        };

        checkUserAuth();

    }, [])




    return (
        <div className="editProfileBody">

            <div className='picDiv'>
                <img className="editPic"></img>
            </div>

            <p>Choose</p>

            <form
                className="editProfileForm"
            >
                <div className="inputDivs">
                    <span className="editLabels">Username</span>
                    <input
                        type="text"
                        onChange={(e) => setUserName(e.target.value)}
                        className="inputEdit">
                    </input>
                </div>

                <div className="inputDivs">
                    <span className="editLabels">Email</span>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="inputEdit">
                    </input>
                </div>


                <div className="smallerInputs">
                    <div className="inputDivs">
                        <span className="editLabels">Postal Code</span>
                        <input
                            type="number"
                            onChange={(e) => setUserName(e.target.value)}
                            className="inputEdit2">
                        </input>
                    </div>

                    <div className="inputDivs">
                        <span className="editLabels">Phone Number</span>
                        <input
                            type="number"
                            onChange={(e) => setPhoneNum(e.target.value)}
                            className="inputEdit2">
                        </input>
                    </div>

                </div>

                <div className="inputDivs">
                    <span className="editLabels">Field & Level</span>
                    <input
                        type="text"
                        onChange={(e) => setField(e.target.value)}
                        className="inputEdit">
                    </input>
                </div>

                <div className="btnDiv">
                    <button className="editBtn">Edit Profile</button>
                </div>


            </form>

            <div className="orangeBackGround"></div>
            <Navbar />
        </div>
    )
}