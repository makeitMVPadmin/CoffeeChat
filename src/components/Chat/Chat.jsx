import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore"; // Import Firestore functions as needed

const Chat = ({ people, db }) => {
  const { id } = useParams();
  const person = people.find((p) => p.id === Number(id));

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Function to send a new message
  const sendMessage = async (messageText) => {
    if (messageText.trim() === "") return;

    const messageData = {
      text: messageText,
      sender: person.id, // Assuming the sender is the person whose profile you're viewing
      timestamp: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "messages"), messageData);
      console.log("Message sent with ID: ", docRef.id);
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  useEffect(() => {
    // Set up a listener to receive chat messages from Firestore
    const messagesRef = collection(db, "messages");
    const messagesQuery = query(messagesRef, orderBy("timestamp"));

    const unsubscribe = onSnapshot(messagesQuery, (querySnapshot) => {
      const newMessages = [];
      querySnapshot.forEach((doc) => {
        newMessages.push(doc.data());
      });

      setMessages(newMessages);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []); 

  return (
    <>
      <h3>Chat</h3>
      <h2>{person.name}</h2>
      <img src={person.profilePicture} alt={person.name} />
      <div className="button-section">
        <button>Chat</button>
        <button>Profile</button>
      </div>

      <div className="chat-section">
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message.text}</li>
          ))}
        </ul>
        <div className="message-input">
          <input
            type="text"
            placeholder="Type your message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={() => sendMessage(newMessage)}>Send</button>
        </div>
      </div>

      {/* This component will be moved later to its own */}
      <div className="profile-section">
        <img src={person.profilePicture} alt={person.name} />
        <h2>{person.name}</h2>
        <img src="#" alt="work icon" />
        <p>Software Engineer</p>
        <img src="#" alt="experience icon" />
        <p>4 Years Experience</p>
        <img src="#" alt="location icon" />
        <p>Toronto, ON</p>
        <img src="#" alt="mentor icon" />
        <p>40 Mentored Sessions</p>
        <p>Expertise</p>
        <ul>
          <li>Java</li>
          <li>C++</li>
          <li>MySQL</li>
        </ul>
        <p>
          I am a Software developer who believes in giving back to the community
          and helping young professionals.{" "}
        </p>
        <div>Reviews</div>
        <div>Verified</div>
        <button>Connect</button>
      </div>
    </>
  );
};

export default Chat;
