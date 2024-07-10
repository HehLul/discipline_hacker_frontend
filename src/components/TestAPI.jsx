import { useEffect } from "react";

function TestApi() {
  useEffect(() => {
    try {
      fetch("http://localhost:3000/data", { method: "GET", mode: "cors" })
        .then((response) => response.json())
        .then((data) => console.log(data));
    } catch (err) {
      console.error(err);
    }
  }, []);

  return <h1>Testing API</h1>;
}

export default TestApi;
