import { useState,useContext } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import ClassPackages from "./ClassPackages";
import axios from 'axios';
import toast from "react-hot-toast";
import { UserContext } from "../../userContext";
const CreateClassModal = () => {
  const [selectedPackage, setSelectedPackage] = useState(ClassPackages[0]);
  const { user,addClass,setClasses } = useContext(UserContext);
  const handleCreateClass = async () => {
    document.getElementById("create_class_modal").close();
        toast.loading("Creating class...");
    const requestCreateClassData = {
      email: user?.email,
      dateStart: new Date().toISOString(),
      packageId: selectedPackage.id,
      className: selectedPackage.name,
      amount: selectedPackage.amount,
      maxStudents: selectedPackage.maxStudents,
      parent: selectedPackage.parents,
      role:"FACULTY"
  };
   

    try{
      const response = await axios.post("http://localhost:3000/api/v2/createClass", requestCreateClassData);
      if(response.data.message === 'Class created successfully'){
        toast.dismiss();
        toast.success("Class created successfully"); 
      }
      const code =await response.data.class.code;
      // console.log("New class data from backend:", newClass);
      addClass(requestCreateClassData,code);
      console.log(requestCreateClassData);
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
          <div className="flex flex-col gap-4 p-4">
            {ClassPackages.map((classpackage, index) => (
              <div key={index} className="flex flex-col bg-primary p-2">
                <input
                  type="radio"
                  name="selectedpackage"
                  className="radio radio-accent"
                  defaultChecked={index === 0}
                  onChange={() => setSelectedPackage(classpackage)}
                />
                <div className="primary-content text-xl">
                  {classpackage.name}
                </div>
                <div className="flex items-center text-success font-bold text-2xl justify-center">
                  <span>
                    <FaIndianRupeeSign />
                  </span>
                  <span>{classpackage.amount}/month</span>
                </div>
                <div className="primary-content text-lg">
                  <span>
                    Max {classpackage.maxStudents} Students Allowed
                  </span>
                </div>
                <div className="primary-content text-lg">
                  <span>Parents Dashboard: </span>
                  {classpackage.parents ? "Enabled" : "Not Enabled"}
                </div>
              </div>
            ))}
            <button className="btn btn-secondary mt-4" onClick={handleCreateClass}>
              Create Class
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default CreateClassModal;
