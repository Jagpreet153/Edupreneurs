// import React from 'react'
import teamImage from "../../assets/home_svg.svg";
import jagpreet from "../../assets/jagpreet.jpg";
import biraj from "../../assets/biraj.jpg";
import shiwangi from "../../assets/shii.jpg";
import somya from "../../assets/somya.jpg";
// import missionImage from "../../assets/comm.jpeg";
// import visionImage from "../../assets/interactive.jpeg";
import aboutUsAnim from "./AboutUsAnimation.json";
import missionAnim from "./MissionAnimation.json";
import visionAnim from "./VisionAnimation.json";
import { Player } from "@lottiefiles/react-lottie-player";

function AboutUs() {
  return (
    <div className="bg-base-100 min-h-screen w-[80%] mx-auto overflow-x-hidden">
      <section className="py-8 min-h-[100svh] flex flex-col gap-8 justify-center items-center">
        <div>
          <Player
            src={aboutUsAnim}
            className="player max-w-[300px] scale-150"
            loop
            autoplay
          />
        </div>
        <div className="container mx-auto flex flex-col items-center gap-8">
          <h1 className="text-5xl font-bold text-primary mb-4">About Us</h1>
          <p className="text-xl text-base-content mb-8 text-center">
            Welcome to Edupreneurs, where innovation meets education. Founded
            with a passion for bridging the gap between technology and learning,
            we are committed to creating a seamless and interactive platform for
            students, teachers, and parents. At Edupreneurs, we believe in
            empowering every individual in the educational ecosystem with the
            tools they need to succeed. Join us on our journey to transform
            education and make a lasting impact on the future of learning.
          </p>
        </div>
      </section>

      <section className="py-16 bg-base-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <Player
              src={missionAnim}
              className="player max-w-[300px] scale-150"
              loop
              autoplay
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Mission
            </h2>
            <p className="text-base-content">
              At Edupreneurs, our mission is to revolutionize education by
              providing a comprehensive, user-friendly platform that connects
              teachers, students, and parents. We aim to foster an environment
              of seamless communication, collaboration, and continuous learning.
              Our goal is to empower educators to focus on what they do
              best—teaching—while equipping students with the tools and
              resources they need to excel academically. We are dedicated to
              bridging the communication gap and creating a supportive community
              where every student`s potential can be realized.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-base-content">
              Our vision at Edupreneurs is to become the leading catalyst for
              educational excellence and innovation worldwide. We strive to
              create a dynamic platform that not only simplifies administrative
              tasks but also enhances the educational experience for students,
              teachers, and parents alike. By harnessing the power of
              technology, we envision a future where education is accessible,
              personalized, and collaborative, driving academic success and
              lifelong learning. Our commitment is to build a connected
              educational community that inspires and nurtures the leaders,
              thinkers, and innovators of tomorrow.
            </p>
          </div>
          <div className="md:w-1/2">
            <Player
              src={visionAnim}
              className="player max-w-[300px] scale-125"
              loop
              autoplay
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 text-center">
            <div className="flex flex-col items-center">
              <img
                src={jagpreet}
                alt="Team Member"
                className="w-40 h-40 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-secondary">
                Jagpreet Singh Khurana
              </h3>
              <p className="text-base-content">Founder</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={biraj}
                alt="Team Member"
                className="w-40 h-40 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-secondary">
                Biraj Sanghai
              </h3>
              <p className="text-base-content">Founder</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={shiwangi}
                alt="Team Member"
                className="w-40 h-40 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-secondary">Shiwangi</h3>
              <p className="text-base-content">Founder</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={somya}
                alt="Team Member"
                className="w-40 h-40 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-secondary">
                Somya Gangwar
              </h3>
              <p className="text-base-content">Founder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">
            Our Journey
          </h2>
          <div className="mt-8 text-base-content">
            <p className="mb-4">
              Edupreneurs was founded in 2024 with the vision of revolutionizing
              education through technology. Our platform aims to enhance
              communication and collaboration among all stakeholders in the
              education system, making it easier for students to achieve
              academic success.
            </p>
            <p>
              Over the years, we have grown from a small startup to a leading
              educational platform, thanks to our dedicated team and the support
              of our users. We continue to innovate and improve our services to
              meet the ever-evolving needs of the education sector.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
