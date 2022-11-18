
import { useEffect, useState } from "react";

fetch("https://randomuser.me/api")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

function App() {
  const [name, setName] = useState("xxx");

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://randomuser.me/api");
      const data = await response.json();
      setName(data.results[0].name.first);
    };
    fetchUser();
  }, []);

  //* 2 parameters
  //* 1st - callback
  //* 2nd - array of dependencies -> when dependecy change -> useEffect runs again
  //* omit 2nd parameter -> useEffect runs all the time
  // useEffect(() => {
  //   fetch("https://randomuser.me/api")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setName(data.results[0].name.first);
  //     });
  // }, []); //* an empty dependency array -> run once

  return (
    <>
      <h1>Fetching</h1>
      <p>Name: {name}</p>
    </>
  );
}

//? React ---(fetch)---> Server --- (JSON) --> React

export default App;
