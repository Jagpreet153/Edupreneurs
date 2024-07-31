import { useState, useContext } from "react";
import { UserContext } from "../../userContext";
import ClassPackages from "./ClassPackages";

import axios from "axios";
import toast from "react-hot-toast";
const JoinClassModal = () => {
  const [isParent, setIsParent] = useState(false);
  const [classCode, setClassCode] = useState("");
  const [studentMail, setStudentMail] = useState("");
  const { user,addClass,setClasses  } = useContext(UserContext);
  const [selectedPackage, setSelectedPackage] = useState(ClassPackages[0]);

  const handleJoinClass = async (e) => {
    e.preventDefault();
    document.getElementById("create_class_modal").close();
        toast.loading("Joining class...");

        const role = (() => {
          if (user?.email === "jagpreet@gmail.com" || user?.email === "shiwangi@gmail.com") {
            return 'STUDENT';
          }else {
            return 'PARENT';
          }
        })();

    const requestCreateClassData = {
      email: user?.email,
      dateStart: new Date().toISOString(),
      packageName: "BASIC PACKAGE",
      className: "cs101",
      amount: selectedPackage.amount,
      maxStudents: selectedPackage.maxStudents,
      parent: selectedPackage.parents,
      role: role,
  };
   

    try{
      console.log(requestCreateClassData);
      const response = await axios.post("http://localhost:3000/api/v2/createClass", requestCreateClassData);
      if(response.data.message === 'Class created successfully'){
        toast.dismiss();
        toast.success("Class joined successfully"); 
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
      toast.error("Failed to join class");
    }
    
  };

  return (
    <dialog id="join_class_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <div className="flex flex-col gap-4">
          <div className="form-control">
            <label className="label cursor-pointer">
              <div className="flex items-center gap-4 justify-center w-full">
                <span className="label-text">Parent</span>
                <input
                  type="checkbox"
                  className="toggle toggle-lg"
                  checked={isParent}
                  onChange={() => {
                    setIsParent((prev) => !prev);
                  }}
                />
                <span className="label-text">Student</span>
              </div>
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              Class Code
              <input
                type="text"
                className="grow"
                placeholder="XYZ0000"
                value={classCode}
                onChange={(e) => setClassCode(e.target.value)}
              />
            </label>
          </div>
          {isParent ? 
           (
            <div className="hidden"></div>
          )
          : (
            <div>
              <label className="input input-bordered flex items-center gap-2">
                Student Mail ID
                <input
                  type="email"
                  className="grow"
                  placeholder="abc@xyz.com"
                  value={studentMail}
                  onChange={(e) => setStudentMail(e.target.value)}
                />
              </label>
            </div>
          )}
          <button className="btn btn-secondary mt-4" onClick={handleJoinClass}>
            Join Class
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default JoinClassModal;
