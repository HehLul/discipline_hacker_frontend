import React, { useEffect, useState } from "react";
import "../styles/App.css";

function App() {
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const urlSearchString = window.location.search;
    const params = new URLSearchParams(urlSearchString);
    setSuccess(params.get("success"));
  }, []);

  if (success === "true") {
    return <>Your order has been placed successfully!</>;
  } else if (success === "false") {
    return <>Your order has been canceled.</>;
  }

  const launchDate = "July, 31st 2024"; // Set your launch date here

  return (
    <>
      <div className="listing">
        <h1>DisciplineAlert</h1>
        <h2>Achieve your ambitions and stay focused with DisciplineAlert.</h2>
        <p className="feature">
          <strong>Instant Personalized Support:</strong> Stay disciplined
          against distractions or get a quick motivation boost anytime.
        </p>

        <p className="feature">
          <strong>Create Personal Mindset Boards:</strong> Design boards for
          specific situations and motivation.
        </p>

        <p className="feature">
          <strong>Set Timers and Alarms:</strong> Schedule mindset board pings.
        </p>

        <p className="feature">
          <strong>On-Demand Mindset Boards:</strong> Retrieve your mindset board
          whenever needed.
        </p>
        <h3>
          For only $15.99, enjoy <u>lifetime access</u> to the app with{" "}
          <u>premium features</u>.
        </h3>
        <p>
          This special offer will end once the launch date arrives, so don't
          miss out!
        </p>
        <form
          action="http://localhost:3000/stripe/create-checkout-session"
          method="POST"
        >
          <button type="submit">Pre-order</button>
        </form>
        <p>
          <small>
            We offer a 100% money-back guarantee because your satisfaction is
            our top priority!
          </small>
        </p>
        <p className="launchdate">
          <strong>Launch Date:</strong> {launchDate}
        </p>
      </div>
    </>
  );
}

export default App;

