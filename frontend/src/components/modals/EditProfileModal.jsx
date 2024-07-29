/* eslint-disable react/prop-types */
import { useState,useContext } from "react";
import { UserContext } from "../../userContext";
import axios from "axios";
import toast from "react-hot-toast";
const EditProfileModal = ({ user }) => {
  const [name, setName] = useState(user?.name || "");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSaveChanges = async(e) => {
    e.preventDefault();
    // const formData = {
    //   name,
    //   email: user?.email,
    //   gender,
    //   dateOfBirth,
    // };
    // console.log("Form Data:", formData);
    try {
      const response = await axios.put("https://edupreneurs-backend.vercel.app/api/v2/editProfile", {
          withCredentials : true,
          name:name,
          email: user?.email,
          gender:gender,
          dateOfBirth:dateOfBirth,
      });
      setUser(response.data.user);
      if (response.data.message === 'Profile Edited') {
        toast.success("Saved Changes");
      } 
      else {
        toast.error("Failed to save changes");
      }
    } catch (error) {
      console.error("Error saving changes:", error);
      toast.error("Failed to change");
    }
    // Add logic to save the data, e.g., make an API call.
    document.getElementById("edit_profile_modal").close();
  };

  return (
    <dialog
      id="edit_profile_modal"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex flex-col items-center justify-center w-full">
          <label className="input input-bordered w-full border-secondary flex items-center gap-2 mt-4">
            Name:
            <input
              type="text"
              className="grow"
              defaultValue={user?.name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="input input-bordered w-full border-secondary flex items-center gap-2 mt-4">
            Email:
            <input type="text" className="grow" value={user?.email} disabled />
          </label>
          <div className="flex border rounded-sm border-secondary w-full items-center gap-2 mt-4 pl-4">
            Gender:
            <select
              className="select w-full"
              onChange={(e) => setGender(e.target.value)}
            >
              <option disabled selected>
                Choose
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
              <option>Prefer Not Say</option>
            </select>
          </div>
          <label className="input input-bordered border-secondary w-full flex items-center gap-2 mt-4">
            Date Of Birth:
            <input
              type="date"
              className="grow"
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </label>
          <button className="btn btn-primary mt-4" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default EditProfileModal;
