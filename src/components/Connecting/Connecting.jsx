import React from "react";
import "./Connecting.scss";
import { Link, useNavigate } from "react-router-dom";
import guy from "../../assets/images/YellowGuyAnimation.png";
import girl from "../../assets/images/PinkGirlAnimation.png";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import spiralArrow from "../../assets/icons/connection/spiral_arrow.svg"

const Connecting = ({
  handleClearFilters,
  isOptionSelected,
  handleNextPage,
  handleFilterChange,
  filters,
}) => {
  return (
    <>
      <div className="connections__container">
        <div className="connections__top">
          <Link to="/home" relative="path" className="connections__back-arrow">
            <FaArrowLeftLong size={35}/>
          </Link>
          <div className="connections__upper-container">
            <h3 className="connections--upper">
              Let's get you
            </h3>
            <img className="connections__spiral-arrow" src={spiralArrow} alt="Spiral arrow"/>
          </div>
          <h3 className="connections--lower">
            connected!
          </h3>
          {/* <div className="connections__image">
            <img className="connections__image-img-1" src={girl} alt="" />
            <img className="connections__image-img-2" src={guy} alt="" />
          </div> */} {/* This should be used for a loading screen component */}
        </div>
        <div className="connections__cont-box">
          <div className="connections__box">
            <div className="connections__filters">
              {" "}
              <p className="connections__titles">Discipline</p>
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
              <p className="connections__titles">Expertise</p>
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
                    filters.discipline.includes("ProductDesign")
                      ? "selected"
                      : ""
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
                  onClick={() =>
                    handleFilterChange("discipline", ["Operations"])
                  }
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
                  onClick={() =>
                    handleFilterChange("discipline", ["Marketing"])
                  }
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
              <p className="connections__titles">Experience (years)</p>
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
              {/* Next */}
              Connect Me
            </button>
            {/* <button
              className="connections__button"
              onClick={handleClearFilters}
            >
              Clear Filters
            </button> */}
          </div>
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
      </div>{" "}
      <Navbar />
    </>
  );
};
export default Connecting;
