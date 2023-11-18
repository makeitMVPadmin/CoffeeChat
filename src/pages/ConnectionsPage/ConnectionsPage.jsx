import React from "react";
import "./ConnectionsPage.scss";
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

const ConnectionsPage = ({ people }) => {
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
    // Pass the filteredPeople to the next page using state or URL params
    navigate("/next", { state: { filteredPeople } });
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
      <div className="connections__container">
        <h3 className="connections--blue">
          Let's get you
          <span className="connections--red"> connected!</span>
        </h3>
        <div className="connections__image">
          <img className="connections__image-img-1" src={girl} alt="" />
          <img className="connections__image-img-2" src={guy} alt="" />
        </div>

        <div className="connections__box">
          <div className="connections__filters">
            {" "}
            <p className="connections__titles">Expertise</p>
            <div className="connections__options">
              <p
                className={`connections__option-1 ${
                  isOptionSelected("expertise", "Design") ? "selected" : ""
                }`}
                onClick={() => handleFilterChange("expertise", ["Design"])}
              >
                Design
              </p>
              <p
                className={`connections__option-1 ${
                  filters.expertise.includes("Product") ? "selected" : ""
                }`}
                onClick={() => handleFilterChange("expertise", ["Product"])}
              >
                Product
              </p>
            </div>
          </div>
          <div className="connections__filters">
            {" "}
            <p className="connections__titles">Discipline</p>
            <div className="connections__options">
              <p
                className={`connections__option-2 ${
                  filters.discipline.includes("UIDesign") ? "selected" : ""
                }`}
                onClick={() => handleFilterChange("discipline", ["UIDesign"])}
              >
                UI Design
              </p>
              <p
                className={`connections__option-2 ${
                  filters.discipline.includes("ProductDesign") ? "selected" : ""
                }`}
                onClick={() =>
                  handleFilterChange("discipline", ["ProductDesign"])
                }
              >
                Product Design
              </p>
              <p
                className={`connections__option-2 ${
                  filters.discipline.includes("Operations") ? "selected" : ""
                }`}
                onClick={() => handleFilterChange("discipline", ["Operations"])}
              >
                Operations
              </p>
              <p
                className={`connections__option-2 ${
                  filters.discipline.includes("Sales") ? "selected" : ""
                }`}
                onClick={() => handleFilterChange("discipline", ["Sales"])}
              >
                Sales
              </p>
              <p
                className={`connections__option-2 ${
                  filters.discipline.includes("Marketing") ? "selected" : ""
                }`}
                onClick={() => handleFilterChange("discipline", ["Marketing"])}
              >
                Marketing
              </p>
              <p
                className={`connections__option-2 ${
                  filters.discipline.includes("Strategy") ? "selected" : ""
                }`}
                onClick={() => handleFilterChange("discipline", ["Strategy"])}
              >
                Strategy
              </p>
              <p
                className={`connections__option-2 ${
                  filters.discipline.includes("Engineering") ? "selected" : ""
                }`}
                onClick={() =>
                  handleFilterChange("discipline", ["Engineering"])
                }
              >
                Engineering
              </p>
            </div>
          </div>

          <div className="connections__filters">
            {" "}
            <p className="connections__titles">Industry</p>
            <div className="connections__options">
              <p
                className={`connections__option-3 ${
                  filters.industry.includes("Tech") ? "selected" : ""
                }`}
                onClick={() => handleFilterChange("industry", ["Tech"])}
              >
                Tech
              </p>
              <p
                className={`connections__option-3 ${
                  filters.industry.includes("Healthcare") ? "selected" : ""
                }`}
                onClick={() => handleFilterChange("industry", ["Healthcare"])}
              >
                Healthcare
              </p>
              <p
                className={`connections__option-3 ${
                  filters.industry.includes("Finance") ? "selected" : ""
                }`}
                onClick={() => handleFilterChange("industry", ["Finance"])}
              >
                Finance
              </p>
            </div>
          </div>

          <div className="connections__filters">
            {" "}
            <p className="connections__titles">Experience</p>
            <div className="connections__options">
              <p
                className={`connections__option-4 ${
                  filters.experience.includes("0-2") ? "selected" : ""
                }`}
                onClick={() => handleFilterChange("experience", ["0-2"])}
              >
                0-2
              </p>
              <p
                className={`connections__option-4 ${
                  filters.experience.includes("2-4") ? "selected" : ""
                }`}
                onClick={() => handleFilterChange("experience", ["2-4"])}
              >
                2-4
              </p>
              <p
                className={`connections__option-4 ${
                  filters.experience.includes("5+") ? "selected" : ""
                }`}
                onClick={() => handleFilterChange("experience", ["5+"])}
              >
                5+
              </p>
            </div>
          </div>
        </div>
        <div className="connections__button-container">
          <button className="connections__button" onClick={handleNextPage}>
            Next
          </button>
          <button className="connections__button" onClick={handleClearFilters}>
            Clear Filters
          </button>
        </div>
        {/* <ul>
        {people.map((person) => (
          <li key={person.id}>
            <Link to={`/chat/${person.id}`}>
              <img src={person.profilePicture} alt={person.name} />
              {person.name}
            </Link>
          </li>
        ))}
      </ul> */}

        <Navbar />
      </div>
    </section>
  );
};

export default ConnectionsPage;
