// import Chatbot from "./chatbot/chatbot";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../userContext";
import { Link } from "react-router-dom";

function Dashboard() {
  const { classes, user } = useContext(UserContext);
  const [localClasses, setLocalClasses] = useState([]);
  console.log(classes);

  useEffect(() => {
    if (Array.isArray(classes) && user && user.email) {
      // Filter classes to only include those created by the current user
      const userClasses = classes.filter((cls) => cls?.email === user.email);
      console.log("User-specific classes:", userClasses);
      setLocalClasses(userClasses);
    } else {
      console.log("Unable to filter classes: ", { classes, user });
      setLocalClasses([]);
    }
  }, [classes, user]);

  return (
    <div>
      {/* <Chatbot /> */}
      <div className="p-8">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4`}
        >
          {localClasses && localClasses.length > 0 ? (
            localClasses.map((item, index) => (
              <div
                key={index}
                className="card flex-auto z-0 bg-secondary text-neutral-content"
              >
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{item?.className}</h2>
                  <p>Package Name: {item?.packageName}</p>
                  <p>Role: {item?.role}</p>
                  <p>Max Students: {item?.maxStudents}</p>
                  <p>Parent: {item?.parent ? "Enabled" : "Disabled"}</p>
                  <p>Class Code: {item?.code}</p>
                  <div className="card-actions justify-end">
                    <Link
                      to={
                        user.email === "sanghaibiraj@gmail.com"
                          ? "/cs101/teacherdashboard"
                          : user.email === "jagpreet@gmail.com"
                          ? "/cs101/studentdashboard/rty123"
                          : user.email === "riyaz@gmail.com"
                          ? "/cs101/parentdashboard/sde451"
                          : user.email === "shiwangi@gmail.com"
                          ? "/cs101/studentdashboard/yht564"
                          : "/cs101/parentdashboard/pyc901"
                      }
                    >
                      <button className="btn btn-primary">Open</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center">
              No classes available.
              {/* {JSON.stringify(classes)} */}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
