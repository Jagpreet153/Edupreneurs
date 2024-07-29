import { useState, useContext } from "react";
import { UserContext } from "../../userContext";
import axios from "axios";
import toast from "react-hot-toast";
const JoinClassModal = () => {
  const [isParent, setIsParent] = useState(false);
  const [classCode, setClassCode] = useState("");
  const [studentMail, setStudentMail] = useState("");
  const { user } = useContext(UserContext);

  const handleJoinClass = async (e) => {
    e.preventDefault();
    const requestJoinClassData = {
      classCode,
      role: isParent ? "parent" : "student",
      email: user?.email,
      studentEmail: isParent ? studentMail : null,
    }
    try{
      const response = await axios.post("http://localhost:3000/api/v2/checkClasscode", requestJoinClassData);
      if(response.data.message === 'Class found'){
        toast.success("Class joined successfully");
      }
    }
    catch(error){
      console.error("Error joining class:", error);
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
