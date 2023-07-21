import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Home() {
  return (
    <div className="home d-flex flex-column justify-content-center w-50 ms-5">
      <div className="sloganHome default-text-color">
        Empowering Your Digital Journey: Embrace Our Software Expertise.
      </div>
      <div>
        <a className="text-decoration-none" href="/">
          Click here to learn more <ArrowRightAltIcon></ArrowRightAltIcon>
        </a>
      </div>
    </div>
  );
}

export default Home;
