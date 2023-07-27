import React, { useEffect, useState } from "react";
import CareerModal from "./CareerModal";
// import "../career.css";

import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode } from 'swiper';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/free-mode";

import "bootstrap/dist/css/bootstrap.min.css";
import CareerCard from "./CareerCard";
import SouthIcon from "@mui/icons-material/South";

// import images
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";
import img8 from "./img/img8.jpg";
import img9 from "./img/img9.jpg";
import img10 from "./img/img10.jpg";
import img11 from "./img/img11.jpg";
import img12 from "./img/img12.jpg";
import img13 from "./img/img13.jpg";
import img14 from "./img/img14.jpg";
import img15 from "./img/img15.jpg";
import img16 from "./img/img16.jpg";
import img17 from "./img/img17.jpg";
import img18 from "./img/img18.jpg";
import img19 from "./img/img19.jpg";
import img20 from "./img/img20.jpg";
import img21 from "./img/img21.jpg";
import img22 from "./img/img22.jpg";
import img24 from "./img/img24.jpg";
import img25 from "./img/img25.jpg";
import img26 from "./img/img26.jpg";
import img27 from "./img/img27.jpg";
import img28 from "./img/img28.jpg";

const MyCareer = () => {
  const careerData = localStorage.getItem("Career1DB")
    ? JSON.parse(localStorage.getItem("Career1DB"))
    : [];

  const [careerArray, setCareerArray] = useState(careerData);
  const [careerSalary, setCareerSalary] = useState("");
  const [careerDate, setCareerDate] = useState("");
  const [careerTitle, setCareerTitle] = useState("");
  const [careerDescription, setCareerDescription] = useState("");
  const [careerImage, setCareerImage] = useState();

  const [showModal, setShowModal] = useState(false);

  function handleCareer1Add() {
    setShowModal(true);
  }
  function handleCareer1Title(e) {
    setCareerTitle(e.target.value);
  }
  function handleCareer1Description(e) {
    setCareerDescription(e.target.value);
  }
  function handleCareer1Salary(e) {
    setCareerSalary(e.target.value);
  }
  function handleCareer1Date(e) {
    setCareerDate(e.target.value);
  }
  function handleCareer1Image(e) {
    setCareerImage(e.target.value);
  }
  const handleClose = () => {
    setShowModal(false);
  };
  function handleDelete() {
    
  }
  function handleSave1(e) {
    e.preventDefault();
    if (careerTitle !== "" && careerDescription !== "" && careerDate !== "") {
      const career1Id = Date.now();
      const newData = {
        id: career1Id,
        title: careerTitle,
        description: careerDescription,
        salary: careerSalary,
        date: careerDate,
        image: careerImage,
      };
      setCareerArray([...careerArray, newData]);
    }
  }
  useEffect(() => {
    localStorage.setItem("Career1DB", JSON.stringify(careerArray));
  }, [careerArray]);

  return (
    <div className=" ">
      <br /> <br />
      <h1 className="home d-flex flex-column justify-content-center w-50 ms-5 fs-700 fontSlogan">
        Unlock your potential with rewarding career opportunities in the world
        of software services <SouthIcon></SouthIcon>
      </h1>
      <br />
      <br />
      <div>
        <h1>
          {" "}
          Full-Stack Web Developer | Frond-End Web Developer | Back-End Web
          Developer
        </h1>
        <button onClick={handleCareer1Add}>Add</button>
      </div>
      <div className="container py-4 px-4 d-flex justify-content-center align-items-center ">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
        {careerArray.map((item,index) => (
            <SwiperSlide key={index}>

            <CareerCard
              data={{
                imgSrc: "",
                salary: item.salary,
                title: item.title,
                desc: item.description,
                date: item.date,
                id: item.id
                
              }}
              setCareerArray = {setCareerArray}
            />
          </SwiperSlide>
        ))}
         
        </Swiper>
      </div>
      <div>
        <h1>
          {" "}
          SQL Developer | UI/UX Design- Developer | Game Developer | App
          Developer
        </h1>
      </div>
      <div className="container py-4 px-4 d-flex justify-content-center align-items ">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <CareerCard
              data={{
                imgSrc: img13,
                salary: "PHP 55,000 - PHP 77,000",
                title: "SQL Developer - Batangas",
                desc: " Business Process Outsourcing International, Inc.Batangas",
                date: " Posted 22 hours ago ",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CareerCard
              data={{
                imgSrc: img14,
                salary: "PHP 100,000 - PHP 150,000",
                title:
                  "Database Support Engineer- SQL Server- Hybrid Work Set Up",
                desc: " Information Professionals, Inc. National Capital Reg  ",
                date: " Posted 1 hour ago",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CareerCard
              data={{
                imgSrc: img15,
                salary: "####",
                title: "Sr. Oracle/SQL Database Admin (Managerial)",
                desc: " Solaire Resort & Casino Paranaque City ",
                date: " Posted on 18-Jul-23",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CareerCard
              data={{
                imgSrc: img16,
                salary: "####",
                title: "Sr. SQL Developer",
                desc: "  Muntinlupa City ",
                date: "Posted on 18-Jul-23 ",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CareerCard
              data={{
                imgSrc: img17,
                salary: "PHP 45,000 - PHP 55,000",
                title: "REMOTE: UI/UX Designer and Graphic Designer",
                desc: "Nowcom Global Services, LLC Pasig City",
                date: "Posted 4 hours ago",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CareerCard
              data={{
                imgSrc: img18,
                salary: "####",
                title: "UI/UX Designer-Developer",
                desc: "ELGADA BPO  SOLUTIONS INC. Makati City",
                date: "Posted on 10-Jul-23",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CareerCard
              data={{
                imgSrc: img19,
                salary: "PHP 50,000 - PHP 65,000",
                title:
                  "Senior Digital Creative Designer (UI/UX) - WFH & DAYSHIFT",
                desc: "TBelle Corp. Central Visayas",
                date: "Posted on 12-Jul-23",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CareerCard
              data={{
                imgSrc: img20,
                salary: "PHP 60,000 - PHP 120,000",
                title: "UX Designer / Data Visualizer",
                desc: "Eclaro Business  Solutions, Inc Taguig City",
                date: "Posted on 11-Jul-23",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CareerCard
              data={{
                imgSrc: img21,
                salary: "PHP 30,000 - PHP 50,000",
                title: "Unity Game Developer",
                desc: "ThinkBIT Solutions  Phils. Inc. National Capital Reg",
                date: "Posted on 11-Jul-23",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CareerCard
              data={{
                imgSrc: img22,
                salary: "PHP 18,000 - PHP 20,000",
                title: "Mobile Game Programmer",
                desc: "Sysgen RPO, Inc.",
                date: "Posted on 11-Jul-23",
              }}
            />
          </SwiperSlide>
          {/* <SwiperSlide>
                        <CareerCard data={{imgSrc: img23, salary: '$10', title: 'Full Stack Developer'}} />
                  </SwiperSlide>   */}
          <SwiperSlide>
            <CareerCard
              data={{
                imgSrc: img24,
                salary: "####",
                title: "Game Developer (for Startup Company)",
                desc: "Q2 HR Solutions Inc. National Capital Reg",
                date: "Posted on 17-Jul-23",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CareerCard
              data={{
                imgSrc: img25,
                salary: "PHP 50,000 - PHP 100,000",
                title: "Web APP Developer (Junior- Senior)",
                desc: "J-K NETWORK RECRUITMENT SERVICES AND CONSULTANCY, INC. Multiple work locations",
                date: "Posted on 12-Jul-23",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CareerCard
              data={{
                imgSrc: img26,
                salary: "PHP 50,000 - PHP 100,000",
                title: "Senior Mobile App Developer",
                desc: "MNLeistung (MNL) Rizal (others)",
                date: "Posted on 4-Jul-23",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CareerCard
              data={{
                imgSrc: img27,
                salary: "PHP 60,000 - PHP 100,000",
                title: "Shopify App Developer",
                desc: "FOODLINE.SG PTE.  LTD. Manila City",
                date: "Posted on 13-Jul-23",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CareerCard
              data={{
                imgSrc: img28,
                salary: "####",
                title: "Web App Developer",
                desc: "MicroSourcing National Capital Reg",
                date: " Posted on 14-Jul-23",
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <CareerModal
        showModal={showModal}
        handleClose={handleClose}
        careerSalary={careerSalary}
        careerDate={careerDate}
        careerTitle={careerTitle}
        careerDescription={careerDescription}
        careerImage={careerImage}
        handleCareer1Title={handleCareer1Title}
        handleCareer1Description={handleCareer1Description}
        handleCareer1Salary={handleCareer1Salary}
        handleCareer1Date={handleCareer1Date}
        handleCareer1Image={handleCareer1Image}
        handleSave1={handleSave1}
      ></CareerModal>
    </div>
  );
};

export default MyCareer;
