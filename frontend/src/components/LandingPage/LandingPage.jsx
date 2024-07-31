import React, { useState, useEffect } from 'react';
import { Button } from 'daisyui';
import side from "../../assets/side.svg";
import interactive from "../../assets/interactive.jpeg";
import community from "../../assets/comm.jpeg";

function EdupreneursLandingPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Handle hover effects
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Testimonials (with details)
  const testimonials = [
    {
      id: 1,
      quote: '"Edupreneurs has been a game-changer for my teaching! It makes connecting with students and finding resources so much easier. I highly recommend it to any teacher looking to enhance their classroom experience."',
      name: 'Ms. Emily Carter',
      role: 'High School English Teacher',
    },
    {
      id: 2,
      quote: '"As a student, Edupreneurs has helped me stay organized, connect with classmates, and get the extra help I need. The interactive lessons and personalized learning paths make a big difference."',
      name: 'Johnathan Lee',
      role: 'High School Junior',
    },
    {
      id: 3,
      quote: '"I love that Edupreneurs keeps me involved in my child\'s education! It\'s so easy to communicate with teachers and get updates on their progress. I feel like I\'m a true partner in their learning journey."',
      name: 'Mrs. Maria Garcia',
      role: 'Parent',
    },
    {
      id: 4,
      quote: '"Edupreneurs has made a world of difference for our family. It\'s a great way to stay involved in my child\'s learning and to connect with their teachers. I highly recommend it to any parent looking for a platform that truly supports education."',
      name: 'Mr. David Miller',
      role: 'Parent',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) =>
        prevTestimonial === testimonials.length - 1 ? 0 : prevTestimonial + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-base-200 font-sans min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-base-100 flex flex-col md:flex-row justify-center items-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-center"> 
            <h1 className="text-5xl font-bold text-primary mb-4">
              Edupreneurs: Connecting Education
            </h1>
            <h2 className="text-2xl font-medium text-secondary mb-8">
              India's Leading Educational Platform for Teachers, Students, and Parents
            </h2>
            <a href="#" className="text-white bg-primary hover:bg-secondary font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out">
              Get Started
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src={side}
              alt="Edupreneurs Platform"
              className="w-full md:w-auto h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 mb-24"> 
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">
            Key Features of Edupreneurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-center m-5"> {/* Added text-center */}
            {/* Feature 1 */}
            <div className="card card-compact rounded-xl shadow-lg bg-base-100 hover:scale-105 transition duration-300 ease-in-out ">
              <figure className="px-10 pt-10">
                <img src= {interactive} alt="Feature 1" className="rounded-lg " />
              </figure>
              <div className="card-body">
                <h3 className="text-xl font-bold text-secondary">Interactive Learning</h3>
                <p className="text-gray-600">
                  Engage students with interactive lessons, quizzes, and activities that make learning fun and effective.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card card-compact rounded-xl shadow-lg bg-base-100 hover:scale-105 transition duration-300 ease-in-out ">
              <figure className="px-10 pt-10">
                <img src = {community} alt="Feature 2" className="rounded-lg" />
              </figure>
              <div className="card-body">
                <h3 className="text-xl font-bold text-secondary">Community Connection</h3>
                <p className="text-gray-600">
                  Foster a sense of community by connecting teachers, students, and parents in a shared learning space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">
            Benefits of Edupreneurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center rounded-lg transition duration-300 ease-in-out p-4"> 
              <h3 className="text-xl font-bold text-secondary mt-4">Personalized Learning</h3>
              <p className="text-gray-600 text-center">
                Tailor learning experiences to each student's needs and pace, ensuring they get the right support.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg transition duration-300 ease-in-out p-4"> 
              <h3 className="text-xl font-bold text-secondary mt-4">Improved Communication</h3>
              <p className="text-gray-600 text-center">
                Streamline communication between teachers, students, and parents, fostering a collaborative learning environment.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg transition duration-300 ease-in-out p-4"> 
              <h3 className="text-xl font-bold text-secondary mt-4">Enhanced Learning Outcomes</h3>
              <p className="text-gray-600 text-center">
                Promote student engagement and deeper understanding, leading to improved academic performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
<section className="py-16 bg-base-100">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-primary mb-4 text-center">
      Hear What Our Users Say
    </h2>
    <div className="relative w-full flex flex-col items-center">
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button
          className="btn btn-circle btn-ghost"
          onClick={() =>
            setCurrentTestimonial(
              currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1
            )
          }
        >
          ❮
        </button>
        <button
          className="btn btn-circle btn-ghost"
          onClick={() =>
            setCurrentTestimonial(
              currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1
            )
          }
        >
          ❯
        </button>
      </div>
      <div
        id={`slide${currentTestimonial + 1}`}
        className="flex flex-col md:flex-row items-center gap-4 md:gap-8"
      >
        <div className="text-center">
          <p className="text-gray-600 text-lg md:text-xl">
            {testimonials[currentTestimonial].quote}
          </p>
          <h3 className="text-xl font-bold text-secondary mt-2">
            - {testimonials[currentTestimonial].name}
          </h3>
          <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].role}</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-base-200 py-8 text-center">
        <div className="container mx-auto">
          <p className="text-gray-600">
            © 2024 Edupreneurs. All rights reserved.
          </p>
          <ul className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
            <li><a href="#" className="text-gray-700 hover:text-primary">About Us</a></li>
            <li><a href="#" className="text-gray-700 hover:text-primary">Contact Us</a></li>
            <li><a href="#" className="text-gray-700 hover:text-primary">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-700 hover:text-primary">Terms of Service</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default EdupreneursLandingPage;