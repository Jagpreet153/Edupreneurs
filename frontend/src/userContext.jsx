import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [classes, setClasses] = useState(() => {
    const storedClasses = localStorage.getItem("classes");
    return storedClasses ? JSON.parse(storedClasses) : [];
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("classes", JSON.stringify(classes));
  }, [classes]);


  const addClass = (newClass) => {
    console.log("Adding class:", newClass);
    console.log("Current classes before adding:", classes);
    setClasses((prevClasses) => {
      if (!Array.isArray(prevClasses)) {
        console.warn("prevClasses is not an array:", prevClasses);
        return [newClass];
      }
      return [...prevClasses, newClass];
    });
  };
  

  return (
    <UserContext.Provider value={{ user, setUser, classes, addClass }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;