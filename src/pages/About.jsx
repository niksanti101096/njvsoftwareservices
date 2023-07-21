import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import data from "../components/aboutUs/aboutUsData";
import AboutUsIntro from "../components/aboutUs/AboutUsIntro"

function About() {
  return (
    <>
      <AboutUsIntro></AboutUsIntro>
      <div className="d-flex align-items-center justify-content-evenly">
        {data.map((items) => (
          <Card sx={{ width: 350 }}>
            <div className=" text-center">
              <CardMedia
                sx={{ height: 300 }}
                image={items.image}
                title="Developer"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  sx={{ fontWeight: 600, fontSize: 30 }}
                >
                  {items.firstName + " " + items.lastName}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: 600, fontSize: 25 }}
                >
                  Developer
                </Typography>
              </CardContent>
              <div className="d-flex justify-content-center">
                <CardActions>
                  <Button size="small"><a href="/" style={{ textDecoration: "none"}}>Learn More</a></Button>
                </CardActions>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default About;
