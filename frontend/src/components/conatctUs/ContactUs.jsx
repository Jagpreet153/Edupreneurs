import { useState } from "react";
import { IoPersonOutline, IoMailOutline } from "react-icons/io5";
import FAQs from "./FAQs";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // ... (Your backend API call here)
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className="bg-base-100 min-h-screen px-[4vw] py-8">
      <div className="container flex flex-col px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Contact Us
        </h2>
        <div className="flex lg:flex-row flex-col gap-8 py-8">
          <div className="flex flex-col basis-1/2 gap-4">
            <p>
              Welcome to the official contact page of EduPreneurs, where you can
              share all your queries, feedback, complaints, or any concerns you
              may have about our services, features, and programs.
            </p>
            <p>
              EduPreneurs, a leading business platform facilitating seamless
              communication between faculty, parents, and students, is here to
              assist you in resolving your issues. We are committed to
              addressing all queries within 7 days. You can reach us on our
              official contact number, [Contact Number], available 24/7. If the
              line is busy, it means we are helping another customer. We request
              you to call us again after 15 minutes so we can attend to your
              query or concern regarding any of our services. You can also reach
              out to us through the Contact Us section on our website. Your
              suggestions and feedback are invaluable to us and will help us
              enhance our platform to better serve you and the entire community.
            </p>
            <p>
              In case of any grievance, please contact us at [Contact Number] or
              write to us at [Support Email]. We are here to ensure you have a
              smooth and satisfying experience with EduPreneurs.
            </p>
            <p>
              Your input will help us improve and provide a better service for
              everyone involved.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 basis-1/2">
            <div className="flex flex-col gap-4">
              <div>
                <label className="input input-primary input-bordered flex items-center gap-2">
                  <IoPersonOutline />
                  <input
                    type="text"
                    id="name"
                    className=" w-full"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label className="input input-primary input-bordered flex items-center gap-2">
                  <IoMailOutline />
                  <input
                    type="email"
                    id="email"
                    className=" w-full"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
            </div>
            <div>
              <textarea
                id="message"
                placeholder="Message"
                className="textarea textarea-primary textarea-bordered textarea-lg w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="btn btn-secondary text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold pb-2">Frequently Asked Questions: </h1>
        {FAQs.map((faq, index) => (
          <div key={index} className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">{faq.ques}</div>
            <div className="collapse-content">
              <p>{faq.ans}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
