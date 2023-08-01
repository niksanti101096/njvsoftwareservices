import React from "react";
import data from "../components/aboutUs/aboutUsData";
import AboutUsIntro from "../components/aboutUs/AboutUsIntro";

function About() {
  return (
    <>
      <AboutUsIntro />
      <div className="container mt-5">
        <div className="row align-items-center justify-content-evenly row-gap-5 column-gap-5">
          <h3 className=" text-center text-light">Meet the Team</h3>
          {data.map((items, index) => (
            <div className={`wrapper${index} col-sm-12 col-md-4`} key={index}>
              <div className={`card card${index}`}>
                <div className="card-body front">
                  <img src={items.image} alt="" />
                </div>
                <div className="card-body back d-flex flex-column justify-content-center align-items-center">
                  <h4 className="card-title">{items.firstName +" "+ items.lastName}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{items.role}</h6>
                  <a href={items.git} className="card-link btn btn-secondary w-50 text-center btn-sm" target="_blank">
                    Learn More
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
