import React, { useState, useEffect } from "react";
import banner from "../images/about/banner.jpg";
import { IoIosArrowDown } from "react-icons/io";
import ProfileCard from "../Components/ProfileCard";
import Blog from '../Components/Blog'
import ClientSays from "../Components/ClientSays";
import team_item1 from "../images/about/team-item1.jpg";
import team_item2 from "../images/about/team-item2.jpg";
import team_item3 from "../images/about/team-item3.jpg";
import team_item4 from "../images/about/team-item4.jpg";
import client1 from "../images/about/client1.jpg"
import client2 from "../images/about/client2.jpg"
//animation librarly
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
      //scroll to top when open page
    AOS.init({ offset: 200, duration: 600 });
  window.scrollTo(0, 0)
  document.title = "About US - Stylish shoes"
  }, []);
  // function for accordion
  const [currentAccordion, setCurrentAccordion] = useState(null);
  const handleAccordion = (para) => {
    if (currentAccordion == para) {
      setCurrentAccordion(null);
    } else {
      setCurrentAccordion(para);
    }
  };

  //data of team member
  const memberData = [
    { name: "John Bradley", post: "CEO", profileIMG: team_item1 },
    { name: "Sophia Burton", post: "Manager", profileIMG: team_item2 },
    { name: "Oliver Clarke", post: "Designer", profileIMG: team_item3 },
    { name: "Charlotte Elliott", post: "Marketing Manager", profileIMG: team_item4 },
  ];

  const ClientSaysData = [
    {name : "Rose Smith", date : "Apr 29.2023", profileIMG : client1, say : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley." },
    {name : "Rose Smith", date : "Apr 29.2023", profileIMG : client2, say : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley." }
  ]

  return (
    <section className="w-screen overflow-x-hidden mobile:leading-7" data-scroll-section>
      <h1 className="text-4xl mobile:text-6xl tablet:text-8xl w-9/12 mobile:w-8/12 mx-auto mt-8 mobile:mt-16 mb-4">
        About Stylish Shoes
      </h1>
      <p className="text-lg mobile:text-2xl tablet:text-[29px] text-gray-500 font-normal mobile:leading-10 mx-auto w-9/12 mobile:w-8/12">
        Happy feet make for happy campers. And runners, and hikers, and
        paddlers, and… you get the idea.
      </p>
      <img src={banner} className="w-100 my-8 mobile:my-16" alt="banner image" />

      {/* Arrcoding section */}
      <article className="w-10/12 mx-auto flex flex-col tablet:flex-row mobile:gap-10 tracking-wide">
        <div className="w-full tablet:w-6/12" data-aos="zoom-in-right">
          <h1 className="my-3 text-5xl">About Us</h1>
          <p className="text-gray-500 w-10/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            tenetur tempore consequuntur molestiae, atque, magnam iusto vero aut
            excepturi hic dolores repellat ullam labore voluptatem harum
            necessitatibus esse possimus repellendus!
          </p>
          <div id="Accordion" className="my-4 w-11/12">
            <div
              onClick={() => handleAccordion("item1")}
              className={`flex ${
                currentAccordion == "item1" ? "text-red-400" : ""
              }`}
            >
              {" "}
              <p>Accordion Item #1</p>{" "}
              <span className={`ml-auto text-2xl transition-all ease-out duration-300 ${currentAccordion == "item1" ? 'rotate-180' : ''}`}>
                <IoIosArrowDown />
              </span>
            </div>
            <p
              className={`w-full transition-all ease-out duration-300 text-gray-400 mt-4 overflow-hidden ${
                currentAccordion == "item1" ? "h-[120px]" : "h-0"
              }`}
            >
              {" "}
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div
              onClick={() => handleAccordion("item2")}
              className={`flex ${
                currentAccordion == "item2" ? "text-red-400" : ""
              }`}
            >
              {" "}
              <p>Accordion Item #2</p>{" "}
              <span className={`ml-auto text-2xl transition-all ease-out duration-300 ${currentAccordion == "item2" ? 'rotate-180' : ''}`}>
                <IoIosArrowDown />
              </span>
            </div>
            <p
              className={`w-full transition-all ease-out duration-300 text-gray-400 mt-4 overflow-hidden ${
                currentAccordion == "item2" ? "h-[120px]" : "h-0"
              }`}
            >
              {" "}
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div
              onClick={() => handleAccordion("item3")}
              className={`flex ${
                currentAccordion == "item3" ? "text-red-400" : ""
              }`}
            >
              {" "}
              <p>Accordion Item #3</p>{" "}
              <span className={`ml-auto text-2xl transition-all ease-out duration-300 ${currentAccordion == "item3" ? 'rotate-180' : ''}`}>
                <IoIosArrowDown />
              </span>
            </div>
            <p
              className={`w-full transition-all ease-out duration-300 text-gray-400 mt-4 overflow-hidden ${
                currentAccordion == "item3" ? "h-[120px]" : "h-0"
              }`}
            >
              {" "}
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <div className="w-full tablet:w-6/12" data-aos="zoom-in-left">
          <h1 className="my-3 text-5xl">Who we are ?</h1>
          <p className="text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="flex flex-col gap-10 tablet:flex-row" data-aos="fade-up" >
            <div className="border border-gray-400 py-10 px-16 my-4" data-aos="fade-right" data-aos-duration="1500" >
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <ul className="text-gray-400 leading-7 list-disc list-outside" >
                <li className="">Maecenas sed diam eget</li>
                <li>Blandit sit amet non magna</li>
                <li>Purus risus varius</li>
                <li>Egestas sit amet lorem</li>
              </ul>
            </div>
            <div className="border border-gray-400 py-10 px-16 my-4" data-aos="fade-left" data-aos-duration="1500">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <ul className="text-gray-400 leading-7 list-disc list-outside	">
                <li className="">Maecenas sed diam eget</li>
                <li>Blandit sit amet non magna</li>
                <li>Purus risus varius</li>
                <li>Egestas sit amet lorem</li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* Team Memebr Section */}
      <article>
        <h1 className="text-center mt-10 mobile:mt-20 mb-4 text-3xl mobile:text-5xl font-extrabold" data-aos="zoom-out">
          Meet Our Team
        </h1>
        <p className="mobile:text-center w-10/12 tablet:w-6/12 mx-auto text-gray-500" data-aos="zoom-out">
          Our Team is dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry’s standard dummy text ever an unknown
          printer took a galley
        </p>
        <div className="grid mobile:grid-cols-2 tablet:grid-cols-4  w-full text-center gap-5 px-8 my-8">
         { memberData.map((val, ind)=>(
          <div key={ind}>
            <ProfileCard  val={val} />
          </div>
         ))}
        </div>
      </article>

      {/* testimony section */}
      <h1 className="mt-32 text-5xl mx-auto w-10/12 text-center" data-aos="fade-up">What Our Client Says</h1>
      <div className="flex flex-col tablet:flex-row mobile:mb-48 w-10/12 gap-6 tablet:gap-16 mx-auto" data-aos="fade-down">
      {ClientSaysData.map((val,ind)=>(
        <div key={ind}>
          <ClientSays val={val}/>
        </div>
      ))}
      </div>

      {/* blog Component */}
      <Blog/>
    </section>
  );
}

export default About;
