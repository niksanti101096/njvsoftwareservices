import React from "react";
import data from "../components/aboutUs/aboutUsData";
import AboutUsIntro from "../components/aboutUs/AboutUsIntro";

function About() {
  return (
    <>
      <AboutUsIntro />
      <div className="container mt-5">
        <div className="row align-items-center justify-content-evenly row-gap-5 column-gap-5">
          {data.map((items, index) => (
            <div className={`wrapper${index} col-sm-12 col-md-4`} key={index}>
              <div className={`card card${index}`}>
                <div className="card-body front">
                  <img src={items.image} alt="" />
                </div>
                <div className="card-body back">
                  <h4 className="card-title">{items.firstName +" "+ items.lastName}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{items.role}</h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                  <a href="/" className="card-link">
                    Card link
                  </a>
                  <a href="/" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
