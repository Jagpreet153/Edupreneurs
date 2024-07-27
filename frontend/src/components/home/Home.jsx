import { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
import side from "../../assets/side.svg";
import interactive from "../../assets/interactive.jpeg";
import community from "../../assets/comm.jpeg";
import testimonials from "./Testimonials";
import ClassPackages from "../modals/ClassPackages"; // Make sure to import your packages
import { FaIndianRupeeSign } from "react-icons/fa6";

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) =>
        prevTestimonial === testimonials.length - 1 ? 0 : prevTestimonial + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-base-200 font-sans min-h-screen w-[90vw] mx-auto">
      {/* Hero Section */}
      <section className="py-16 h-[100svh] px-4 bg-base-100 flex flex-col md:flex-row justify-center items-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-left">
            <h1 className="text-5xl font-bold text-primary mb-4">
              Edupreneurs: Connecting Education
            </h1>
            <h2 className="text-2xl font-medium text-secondary mb-8">
              India`s Leading Educational Platform for Teachers, Students, and
              Parents
            </h2>
            <div className="flex gap-2">
              <a
                href="/login"
                className="text-white bg-primary hover:bg-secondary font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out"
              >
                Get Started ❯
              </a>
              <a
                href="#packages"
                className="text-white bg-primary hover:bg-secondary font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out"
              >
                Our Plans ❯
              </a>
            </div>
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
      <section className="lg:p-32 p-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">
            Key Features of Edupreneurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8 text-center">
            {/* Feature 1 */}
            <div className="card card-compact rounded-xl shadow-lg bg-base-100 hover:scale-105 transition duration-300 ease-in-out ">
              <figure className="px-10 pt-10 ">
                <img
                  src={interactive}
                  alt="Feature 1"
                  className="rounded-lg "
                />
              </figure>
              <div className="card-body">
                <h3 className="text-xl font-bold text-secondary">
                  Seamless Communication and Collaboration:
                </h3>
                <p className="text-gray-600">
                  Edupreneurs bridges the communication gap between faculty,
                  students, and parents, enabling real-time updates on student
                  progress, attendance, and academic performance. Faculty can
                  easily share important announcements, schedules, and feedback,
                  fostering a collaborative environment that supports student
                  success.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="card card-compact rounded-xl shadow-lg bg-base-100 hover:scale-105 transition duration-300 ease-in-out ">
              <figure className="px-10 pt-10">
                <img src={community} alt="Feature 2" className="rounded-lg" />
              </figure>
              <div className="card-body">
                <h3 className="text-xl font-bold text-secondary">
                  Comprehensive Student Management:
                </h3>
                <p className="text-gray-600">
                  Faculty can efficiently manage student information, track
                  attendance, and evaluate academic performance through
                  intuitive dashboards. The platform also allows for automated
                  test creation, grading, and detailed performance analytics,
                  streamlining administrative tasks and freeing up valuable time
                  for educators to focus on teaching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 bg-base-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">
            Our Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 p-8">
            {ClassPackages.map((pkg, index) => (
              <div
                key={index}
                className="card card-compact rounded-xl shadow-lg shadow-secondary bg-base-100 hover:scale-105 transition duration-300 ease-in-out p-8"
              >
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 text-center">
                  <strong>Price:</strong>
                  <span className="flex w-full items-center justify-center">
                    <FaIndianRupeeSign />
                    {pkg.amount} / month
                  </span>
                </p>
                <p className="text-gray-600 text-center">
                  <strong>Max Students:</strong> {pkg.maxStudents}
                </p>
                <p className="text-gray-600 text-center">
                  <strong>Parental Access:</strong> {pkg.parents ? "Yes" : "No"}
                </p>
                <a
                  href="/signup"
                  className="text-white bg-primary hover:bg-secondary font-bold py-2 px-4 rounded-md mt-4 block mx-auto text-center transition duration-300 ease-in-out"
                >
                  Choose Plan
                </a>
              </div>
            ))}
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
              <h3 className="text-xl text-center font-bold text-secondary my-4">
                Enhanced Parental Involvement:
              </h3>
              <p className="text-gray-600 text-center">
                Edupreneurs keeps parents informed and engaged in their child`s
                academic journey. With easy access to attendance records, test
                results, and progress reports, parents can actively participate
                in their child`s education, fostering a supportive home
                environment that contributes to better academic outcomes.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg transition duration-300 ease-in-out p-4">
              <h3 className="text-xl text-center font-bold text-secondary my-4">
                Improved Efficiency for Faculty:
              </h3>
              <p className="text-gray-600 text-center">
                By automating administrative tasks such as attendance tracking,
                test creation, and grading, Edupreneurs significantly reduces
                the workload on faculty. This allows educators to focus more on
                teaching and mentoring students, ultimately enhancing the
                quality of education provided.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg transition duration-300 ease-in-out p-4">
              <h3 className="text-xl text-center font-bold text-secondary my-4">
                Better Student Performance Monitoring:
              </h3>
              <p className="text-gray-600 text-center">
                Students benefit from clear and immediate feedback on their
                performance. Edupreneurs provides detailed analytics and
                insights into academic progress, helping students identify areas
                of improvement and allowing faculty to tailor their teaching
                strategies to meet individual needs, resulting in a more
                personalized and effective learning experience.
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
                    currentTestimonial === 0
                      ? testimonials.length - 1
                      : currentTestimonial - 1
                  )
                }
              >
                ❮
              </button>
              <button
                className="btn btn-circle btn-ghost"
                onClick={() =>
                  setCurrentTestimonial(
                    currentTestimonial === testimonials.length - 1
                      ? 0
                      : currentTestimonial + 1
                  )
                }
              >
                ❯
              </button>
            </div>
            <div
              id={`slide${currentTestimonial + 1}`}
              className="flex flex-col md:flex-row items-center px-16 gap-4 md:gap-8"
            >
              <div className="text-center">
                <p className="text-gray-600 text-lg md:text-xl">
                  {testimonials[currentTestimonial].quote}
                </p>
                <h3 className="text-xl font-bold text-secondary mt-2">
                  - {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentTestimonial].role}
                </p>
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
            <li>
              <a href="/about" className="text-gray-700 hover:text-primary">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-700 hover:text-primary">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-primary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-primary">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;
