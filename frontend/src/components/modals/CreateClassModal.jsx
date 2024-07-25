import { useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import ClassPackages from "./ClassPackages";

const CreateClassModal = () => {
  const [selectedPackage, setSelectedPackage] = useState(ClassPackages[0]);

  const handleCreateClass = async () => {
    const requestCreateClassData = {
      packageId: selectedPackage.id,
    };
  };

  return (
    <dialog id="create_class_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            // onClick={onClose}
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
