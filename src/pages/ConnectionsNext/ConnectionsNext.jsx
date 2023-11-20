import React from "react";
import "./ConnectionsNext.scss";
import { Link, useNavigate } from "react-router-dom";
import guy from "../../assets/images/YellowGuyAnimation.png";
import girl from "../../assets/images/PinkGirlAnimation.png";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
// ConnectionsPage.jsx
import { db } from "../../App";
import "firebase/firestore";
import {
  getFirestore,
  doc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

// Your component code...

const ConnectionsNext = ({ filteredPeople }) => {
  console.log(filteredPeople);
  return <></>;
};

export default ConnectionsNext;
