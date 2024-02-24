// Mock Data for Chat and Inbox testing
import AlexAndersPic from '../components/../routes/HomePage/sample-user.svg';
import RajDevPicture from '../assets/images/RajDev.svg';
import MannyWellPic from '../assets/images/MannyWell.svg'
import DrewYoungPic from '../assets/images/DrewYoung.svg'
import MartinJamesPic from '../assets/images/MartinJames.svg'
import TiffanyCrewPic from '../assets/images/TiffanyCrew.svg'

const chatData = {
  users: [
    {
      id: "aanders",
      name: "Alexander Anders",
      avatar: AlexAndersPic,
      occupation: "Software Engineer"
    },
    {
      id: "rdev",
      name: "Raj Dev",
      avatar: RajDevPicture,
      occupation: "Software Engineer"
    },
    {
      id: "mwell",
      name: "Manny Well",
      avatar: MannyWellPic,
      occupation: "Project Manager"
    },
    {
      id: "dyoung",
      name: "Drew Young",
      avatar: DrewYoungPic,
      occupation: "Senior Software Engineer"
    },
    {
      id: "mjames",
      name: "Martin James",
      avatar: MartinJamesPic,
      occupation: "Back-End Developer"
    },
    {
      id: "tcrew",
      name: "Tiffany Crew",
      avatar: TiffanyCrewPic,
      occupation: "Data Analyst"
    },
  ],
  messages: [
    {
      id: 1,
      sender: "aanders",
      receiver: "rdev",
      content: "Hi Raj, how are you?",
      timestamp: "2024-02-18T12:00:00",
    },
    {
      id: 2,
      sender: "rdev",
      receiver: "aanders",
      content: "Hi Alex! I'm doing well and you?",
      timestamp: "2024-02-18T12:05:00",
    },
    {
      id: 3,
      sender: "aanders",
      receiver: "rdev",
      content: "Doing great! Mind if I ask you a professional question?",
      timestamp: "2024-02-18T12:12:00",
    },
    {
      id: 4,
      sender: "rdev",
      receiver: "aanders",
      content: "Sure, no problem!",
      timestamp: "2024-02-18T12:15:00",
    },
    {
      id: 5,
      sender: "aanders",
      receiver: "rdev",
      content: "What inspired you to pursue a career in software engineering, and how did your journey unfold?",
      timestamp: "2024-02-18T12:19:00",
    },
  ],
  chatRooms: [
    {
      id: "11111",
      users: [
        {
          id: "aanders",
          name: "Alexander Anders",
          avatar: AlexAndersPic,
        },
        {
          id: "rdev",
          name: "Raj Dev",
          avatar: RajDevPicture,
        }
      ],
      messages: [
        {
          id: 1,
          sender: "aanders",
          receiver: "rdev",
          content: "Hi Raj, how are you?",
          timestamp: "2024-02-18T12:00:00",
        },
        {
          id: 2,
          sender: "rdev",
          receiver: "aanders",
          content: "Hi Alex! I'm doing well and you?",
          timestamp: "2024-02-18T12:05:00",
        },
        {
          id: 3,
          sender: "aanders",
          receiver: "rdev",
          content: "Doing great! Mind if I ask you a professional question?",
          timestamp: "2024-02-18T12:12:00",
        },
        {
          id: 4,
          sender: "rdev",
          receiver: "aanders",
          content: "Sure, no problem!",
          timestamp: "2024-02-18T12:15:00",
        },
        {
          id: 5,
          sender: "aanders",
          receiver: "rdev",
          content: "What inspired you to pursue a career in software engineering, and how did your journey unfold?",
          timestamp: "2024-02-18T12:19:00",
        },
      ],
    },
  ],
};

export default chatData;