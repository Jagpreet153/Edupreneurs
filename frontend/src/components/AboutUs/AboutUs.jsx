import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="bg-base-100 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="relative py-14">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">Our Mission</h2>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Card 1 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
            <img
              src="hands.webp"
              alt="Icon 1"
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">
              To provide a robust and intuitive platform that streamlines administrative tasks, enhances communication, and promotes collaborative learning.
            </h3>
          </div>
          {/* Mission Card 2 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
            <img
              src="globe.webp"
              alt="Icon 2"
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">
              To offer features that personalize learning experiences, track progress, and foster a love of learning.
            </h3>
          </div>
          {/* Mission Card 3 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
            <img
              src="building.webp"
              alt="Icon 3"
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">
              To provide accessible and affordable solutions to educators across the country, ensuring that every child has access to quality education.
            </h3>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Our Vision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ul className="list-disc list-inside text-gray-600">
              <li className="flex items-center font-semibold text-xl pb-4">
              Affordable, effective tools for educators to reach every learner.
              </li>
              <li className="flex items-center font-semibold text-xl pb-4">
              Cutting-edge technology for creative teaching and personalized learning.
              </li>
              <li className="flex items-center font-semibold text-xl pb-4">
              Ensure every student has access to the digital tools they need.
              </li>
              <li className="flex items-center font-semibold text-xl pb-4">
              Inspire students to explore their passions and reach their full potential.
              </li>
              <li className="flex items-center font-semibold text-xl pb-4">
              Connect educators, students, and parents in a supportive, interactive ecosystem. 
              </li>
            </ul>
          </div>
          <div className="hidden md:grid md:grid-cols-2 gap-2">
          <img
              src="img1.jpg"
              alt="Image 1"
              className="rounded-lg shadow-lg hexagon"
            />
            <img
              src="img2.jpg"
              alt="Image 2"
              className="rounded-lg shadow-lg hexagon"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 text-center">
        <p>Copyright © 2024 EduPreneurs. All rights reserved.</p>
      </div>
    </div>
  );
};

export default AboutUs;