import "./EditProfile.scss";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import { app, db } from "../../App";
import { getAuth } from "firebase/auth";
import { updateDoc, doc, getDoc } from "@firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import blankUserImg from '../../assets/images/blankUserImg.png'



export const EditProfile = () => {
    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [field, setField] = useState('')
    const [skills, setSkills] = useState([])
    const [bio, setBio] = useState('')
    const [ProfileImg, setProfileImg] = useState(null)
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
                            // setProfileImg(doc.data().ProfileImg)
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
                    Bio: bio,
                    // ProfileImg: ProfileImg,
                })

                    .then(() => {
                        Navigate('/profile')
                    })

            }
            else {
                Navigate('/login')
            }
        });
    };



    // const UploadImage = (e) => {
    //     auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             const storage = getStorage(app);
    //             const fileRef = ref(storage, `${user.uid}/${ProfileImg.name}`);
    //             const file = e.target.files[0]



    //             uploadBytes(fileRef,File, ProfileImg).then((snapshot) => {
    //                 console.log("Uploaded a blob or file!");
    //                 getDownloadURL(snapshot.ref).then((url) => {
    //                     setProfileImg(url)
    //                     console.log('url',url)
    //                 });
    //             });
    //         }
    //     })
    // }



    const UploadImage = () => {
        const storage = getStorage(app)

        // Create the file metadata
        /** @type {any} */
        const metadata = {
            contentType: 'image/png'
        };

        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, 'images/' + file);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setProfileImg(downloadURL)
                });
            }
        );
    }



    return (
        <div className="editProfileBody">

            <div className='picDiv'>
                <img
                    className="editPic"
                    alt="user-avatar-img"
                    src={ProfileImg}>
                </img>
            </div>

            <div className="uploadImgDiv">
                <label for="file-upload" className="custom-file-upload">
                    <i class="fa fa-cloud-upload"></i>Upload Profile Image
                </label>
                <input
                    id="file-upload"
                    type="file"
                    accept="image/png,image/jpeg"
                    onClick={UploadImage}
                    onChange={(e) => setProfileImg(e.target.files[0])}
                    className="imgUpload" />
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

                {/* <div className="inputDivs">
                    <span className="editLabels">Skills</span>
                    <input
                        type="text"
                        maxLength='20'
                        defaultValue={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        className="inputEdit">
                    </input>
                </div>                 */}

                <div className="inputDivs">
                    <span className="editLabels">Bio</span>
                    <textarea
                        type="text"
                        maxLength='300'
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