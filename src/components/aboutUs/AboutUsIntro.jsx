import React from "react";
import SouthIcon from '@mui/icons-material/South';

function AboutUsIntro() {
  return (
    <div className="home d-flex flex-column justify-content-center w-50 ms-5">
      <div className="sloganAboutUs default-text-color">
        Want to know us? Scroll down <SouthIcon></SouthIcon>
      </div>
    </div>
  );
}

export default AboutUsIntro;
