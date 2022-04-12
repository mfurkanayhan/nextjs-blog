import { useState, useEffect } from "react";

const Test = () => {
  const [name, setName] = useState("test name");
  const [surname, setSurname] = useState("test surname");

  useEffect(() => {
    console.log(name);
    setName("furkan");
    setSurname("ayhan");
    return () => {
      console.log("test unmounted");
    };
  }, []);

  return (
    <p>
      {name} - {surname}
    </p>
  );
};

export default Test;
