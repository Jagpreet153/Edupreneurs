import { useState,useContext } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import ClassPackages from "./ClassPackages";
import axios from 'axios';
import toast from "react-hot-toast";
import { UserContext } from "../../userContext";
const CreateClassModal = () => {
  const [className, setClassName] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(ClassPackages[0]);
  const { user,addClass,setClasses } = useContext(UserContext);
  axios.defaults.withCredentials = true;
  const handleCreateClass = async () => {
    document.getElementById("create_class_modal").close();
        toast.loading("Creating class...");
    const requestCreateClassData = {
      email: user?.email,
      dateStart: new Date().toISOString(),
      packageName: selectedPackage.name,
      className: className,
      amount: selectedPackage.amount,
      maxStudents: selectedPackage.maxStudents,
      parent: selectedPackage.parents,
      role:"FACULTY",
  };
   

    try{
      const response = await axios.post("https://edupreneurs.vercel.app/api/v2/createClass", requestCreateClassData);
      if(response.data.message === 'Class created successfully'){
        toast.dismiss();
        toast.success("Class created successfully"); 
      }
      const code =await response.data.class.code;
      const updatedClassData = {
        ...requestCreateClassData,
        code: code
      };
      addClass(updatedClassData,code);

      // console.log(requestCreateClassData);
      // const classes =await response.data.class;
      // await addClass(classes);
    }
    catch(error){
      toast.dismiss();
      console.error("Error creating class:", error);
      toast.error("Failed to create class");
    }
    
  }

  return (
    <dialog id="create_class_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          
          >
            ✕
          </button>
        </form>
        <div>
          <div className="flex flex-col gap-4 p-4 ">
            {ClassPackages.map((classpackage, index) => (
              <div key={index} className="flex flex-col bg-secondary p-4">
                <input
                  type="radio"
                  name="selectedpackage"
                  className="radio bg-white border border-black"
                  defaultChecked={index === 0}
                  onChange={() => setSelectedPackage(classpackage)}
                />
                <div className="text-secondary-content text-xl">
                  {classpackage.name}
                </div>
                <div className="flex items-center text-success font-bold text-2xl justify-center">
                  <span>
                    <FaIndianRupeeSign />
                  </span>
                  <span>{classpackage.amount}/month</span>
                </div>
                <div className="text-secondary-content text-lg">
                  <span className="text-wrap">
                    Max {classpackage.maxStudents} Students Allowed
                  </span>
                </div>
                <div className="text-secondary-content text-lg">
                  <span className="text-wrap">Parents Dashboard: </span>
                  {classpackage.parents ? "Enabled" : "Not Enabled"}
                </div>
              </div>
            ))}
            <div className="flex gap-0 justify-center items-center">

            <input type="text" required name="className" onChange={(e) => setClassName(e.target.value)} placeholder="Enter Class Name Here" className="input input-bordered rounded-r-none w-full max-w-xs" />
            <button className="btn btn-secondary rounded-l-none" onClick={handleCreateClass}>
              Create Class
            </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default CreateClassModal;
