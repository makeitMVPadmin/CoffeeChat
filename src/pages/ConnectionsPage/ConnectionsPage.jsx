import React from "react";
import "./ConnectionsPage.scss";
import { Link, useNavigate } from "react-router-dom";
import guy from "../../assets/images/YellowGuyAnimation.png";
import girl from "../../assets/images/PinkGirlAnimation.png";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import Connecting from "../../components/Connecting/Connecting";
import ConnectionOption from "../../components/ConnectionOption/ConnectionOption";
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

const ConnectionsPage = ({ people }) => {
  const [showConnecting, setShowConnecting] = useState(true);
  const [showConnections, setShowConnections] = useState(false);
  const [filters, setFilters] = useState({
    expertise: [],
    discipline: [],
    industry: [],
    experience: [],
  });
  const navigate = useNavigate();
  const [filteredPeople, setFilteredPeople] = useState([]);
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      expertise: [],
      discipline: [],
      industry: [],
      experience: [],
    });
  };
  const handleNextPage = () => {
    setShowConnecting(false); // Hide the Connecting component
    setShowConnections(true); // Show the ConnectionOption component
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "Users");

        if (!collectionRef) {
          console.error("Firestore collection reference is undefined.");
          return;
        }

        // Apply filters
        let filteredQuery = collectionRef;

        if (filters.expertise.length > 0) {
          filteredQuery = query(
            filteredQuery,
            where("Expertise", "in", filters.expertise)
          );
        }

        if (filters.discipline.length > 0) {
          filteredQuery = query(
            filteredQuery,
            where("Discipline", "in", filters.discipline)
          );
        }

        if (filters.industry.length > 0) {
          filteredQuery = query(
            filteredQuery,
            where("Industry", "in", filters.industry)
          );
        }

        if (filters.experience.length > 0) {
          filteredQuery = query(
            filteredQuery,
            where("Experience", "in", filters.experience)
          );
        }

        console.log(filteredQuery); // Add this line for debugging

        const snapshot = await getDocs(filteredQuery);
        const data = snapshot.docs.map((doc) => doc.data());

        setFilteredPeople(data);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchData(); // Call fetchData directly as a one-time operation

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);
  const isOptionSelected = (filterType, option) => {
    return filters[filterType].includes(option);
  };

  useEffect(() => {
    console.log(filters);
  }, [filters]);
  console.log(filters);
  console.log(filteredPeople);
  return (
    <section className="connections">
      {showConnecting && (
        <Connecting
          handleClearFilters={handleClearFilters}
          isOptionSelected={isOptionSelected}
          handleNextPage={handleNextPage}
          handleFilterChange={handleFilterChange}
          filters={filters}
        />
      )}
      {showConnections && (
        <ConnectionOption
          handleClearFilters={handleClearFilters}
          isOptionSelected={isOptionSelected}
          handleNextPage={handleNextPage}
          handleFilterChange={handleFilterChange}
          filters={filters}
        />
      )}
    </section>
  );
};

export default ConnectionsPage;
