import React, { useEffect, useState } from "react";
import CareerModal from "./CareerModal";
// import "../career.css";

import { Swiper, SwiperSlide } from "swiper/react";
//import { FreeMode } from 'swiper';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/free-mode";

import "bootstrap/dist/css/bootstrap.min.css";
import CareerCard from "./CareerCard";
import SouthIcon from "@mui/icons-material/South";

import carUP from "./img/carUP.png";
import sftware from "./img/sftware.png";

const MyCareer = () => {
  const careerData = localStorage.getItem("Career1DB")
    ? JSON.parse(localStorage.getItem("Career1DB"))
    : [];

  const [careerArray, setCareerArray] = useState(careerData);
  const [careerSalary, setCareerSalary] = useState("");
  const [careerDate, setCareerDate] = useState("");
  const [careerTitle, setCareerTitle] = useState("");
  const [careerDescription, setCareerDescription] = useState("");
  const [careerImage, setCareerImage] = useState("");
  const [careerIdHolder, setCareerIdHolder] = useState();
  const [showSaveBtn1, setShowSaveBtn1] = useState(true);
  const [showUpdateBtn1, setShowUpdateBtn1] = useState(false);
  const [imageHolder, setImageHolder] = useState("");

  const [showModal, setShowModal] = useState(false);

  function handleCareer1Add() {
    setShowModal(true);
    setShowSaveBtn1(true);
    setShowUpdateBtn1(false);
    setCareerTitle("");
    setCareerDate("");
    setCareerSalary("");
    setCareerDescription("");
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
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setCareerImage(reader.result);
    };
    reader.readAsDataURL(file);
  }
  const handleClose = () => {
    setShowModal(false);
  };
  function handleUpdate1(e) {
    e.preventDefault();
    if (careerTitle !== "" && careerDescription !== "" && careerDate !== "") {
      if (careerImage === "") {
        const updateData = careerArray.map((item) => {
          if (item.id === careerIdHolder) {
            return {
              ...item,
              title: careerTitle,
              description: careerDescription,
              salary: careerSalary,
              date: careerDate,
              image: imageHolder,
            };
          } else {
            return item;
          }
        });
        setCareerArray(updateData);
      } else {
        const updateData = careerArray.map((item) => {
          if (item.id === careerIdHolder) {
            return {
              ...item,
              title: careerTitle,
              description: careerDescription,
              salary: careerSalary,
              date: careerDate,
              image: careerImage,
            };
          } else {
            return item;
          }
        });
        setCareerArray(updateData);
      }
      setShowModal(false);
      setCareerTitle("");
      setCareerDate("");
      setCareerSalary("");
      setCareerDescription("");
      setCareerImage("");
    }
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
      setCareerTitle("");
      setCareerDescription("");
      setCareerDate("");
      setCareerSalary("");
      setShowModal(false);
    }
  }
  useEffect(() => {
    localStorage.setItem("Career1DB", JSON.stringify(careerArray));
  }, [careerArray]);

  return (
    <div className=" ">
      <br />
      <div className="container">
        
        <div className="headerCC mainbg1">
            <div className=" w-50 ms-3 fs-700 fontSlogan">
              <h1 className="header1">
                Unlock Your Potential, Embrace Infinite Possibilities:
              <span className="spn1"> Build Your Future with Our Software Services.</span> 
                <SouthIcon></SouthIcon>
              </h1>
            </div>
            <div className="imgCC">
               <img src={carUP} alt="photo" className="imgSize" />
            </div>

        </div>

        <div className="mainbg2">
            <div className="">
              <h1 className="header2">
                Full-Stack Web Developer | Frond-End Web Developer | Back-End Web
                Developer |  SQL Developer | UI/UX Design- Developer | Game Developer | App
                Developer
              </h1>
              <button onClick={handleCareer1Add} className="btnAdd">Add</button>
            </div>

            <div className=" py-1">
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
                    slidesPerView: 5,
                    spaceBetween: 15,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
              >
                {careerArray.map((item, index) => (
                  <SwiperSlide key={index}>
                    <CareerCard
                      salary={item.salary}
                      title={item.title}
                      desc={item.description}
                      date={item.date}
                      id={item.id}
                      image={item.image}
                      setCareerArray={setCareerArray}
                      setCareerIdHolder={setCareerIdHolder}
                      setCareerTitle={setCareerTitle}
                      setCareerSalary={setCareerSalary}
                      setCareerDate={setCareerDate}
                      setCareerDescription={setCareerDescription}
                      setShowModal={setShowModal}
                      setShowSaveBtn1={setShowSaveBtn1}
                      setShowUpdateBtn1={setShowUpdateBtn1}
                      setImageHolder={setImageHolder}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/*----------------- Call for Modal-------- */}
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
              showSaveBtn1={showSaveBtn1}
              showUpdateBtn1={showUpdateBtn1}
              handleUpdate1={handleUpdate1}
            ></CareerModal>
        </div>
      </div>
    </div>
  );
};

export default MyCareer;
