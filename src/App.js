import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MultistepForm from "./components/MultistepForm";
import ReviewPage from "./components/ReviewPage";
import UserDetails from "./components/UserDetails";
function App() {
  const userDetails = {
    name: "",
    email: "",
    password: "",
    phone: "",
    facebook: "",
    twitter: "",
  };
  const [values, setValues] = useState(userDetails);
  const [step, setStep] = useState(1);
  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <MultistepForm
          values={values}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          setValues={setValues}
          handleInputChange={handleInputChange}
        />
      );
    case 2:
      return (
        <UserDetails
          values={values}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          setValues={setValues}
          handleInputChange={handleInputChange}
        />
      );
    case 3:
      return <ReviewPage values={values} handlePrevious={handlePrevious} />;
  }
}

export default App;
