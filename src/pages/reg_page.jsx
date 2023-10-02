import React, { useState, useRef } from "react";
import images from "../imag_array/images";
import "./reg_page.css";
import FormInput from "../components/Form";

function RegisterPage() {
  const inputRefs = {
    Name: useRef(),
    UserName: useRef(),
    Email: useRef(),
    Mobile: useRef(),
  };

  const [Name, setName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");



  const [NameError, setNameError] = useState("");
  const [UserNameError, setUserNameError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [MobileError, setMobileError] = useState("");
  const [CheckBoxError, setCheckBoxError] = useState("");


  const [isChecked, setIsChecked] = useState(false);
  const [inputErrors, setInputErrors] = useState({
    Name: "",
    UserName: "",
    Email: "",
    Mobile: "",
    check: "",
  });

  // const handleClick = () => {
  //   if (isChecked) {
  //     const inputData = {
  //       Name: inputRefs.Name.current.value,
  //       UserName: inputRefs.UserName.current.value,
  //       Email: inputRefs.Email.current.value,
  //       Mobile: inputRefs.Mobile.current.value,
  //     };
  //     localStorage.setItem("inputData", JSON.stringify(inputData));
  //     console.log(localStorage.getItem("inputData"), "*****");
  //   } else {
  //     setCheckBoxError(true);

  //   }
  // };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const validateInputs = () => {
    // Initialize the error flag
    let noErrors = true;
  
    // Reset all error states before validation
    setNameError(false);
    setUserNameError(false);
    setEmailError(false);
    setMobileError(false);
    setCheckBoxError(false);
  
    // Validate Name input
    if (Name.length === 0) {
      setNameError(true);
      noErrors = false; // Set the flag to false if there's an error
    }
  
    // Validate UserName input
    if (UserName.length === 0) {
      setUserNameError(true);
      noErrors = false;
    }
  
    // Validate Email input
    if (Email.length === 0) {
      setEmailError(true);
      noErrors = false;
    }
  
    // Validate Mobile input
    if (Mobile.length === 0) {
      setMobileError(true);
      noErrors = false;
    }
  
    // Validate the checkbox
    if (!isChecked) {
      setCheckBoxError(true);
      noErrors = false;
    }
  
    // If no errors occurred, store the data
    if (noErrors) {
      const inputData = {
        Name: inputRefs.Name.current.value,
        UserName: inputRefs.UserName.current.value,
        Email: inputRefs.Email.current.value,
        Mobile: inputRefs.Mobile.current.value,
      };
      localStorage.setItem("inputData", JSON.stringify(inputData));
      console.log(localStorage.getItem("inputData"), "*****");
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    validateInputs();

    // if (isChecked) {
    //   handleClick();
    // }
  };

  return (
    <div className="Reg_cont">
      <div>
        <img src={images.img1} className="left-aligned-image" />
        <h1 className="Left_header">Discover new things on </h1>
        <h1 className="left_header_bottom">Superapp</h1>
      </div>
      <div className="Reg">
        <h1>Super app</h1>
        <p className="Reg_info">Create your new account</p>

        <form>
  <div className="form-field">
    <input
      onChange={(e) => {
        setName(e.target.value);
        setNameError(false);
      }}
      ref={inputRefs.Name}
      placeholder="Name"
    />
    {NameError ? <label>Field is required</label> : ""}
  </div>


  <div className="form-field">
    <input
      onChange={(e) => {
        setUserName(e.target.value);
        setUserNameError(false);
      }}
      ref={inputRefs.UserName}
      placeholder="UserName"
    />
      {UserNameError ? <label>Field is required</label> : ""}

  </div>


  <div className="form-field">
    <input
      onChange={(e) => {
        setEmail(e.target.value);
        setEmailError(false);
      }}
      ref={inputRefs.Email}
      placeholder="Email"
    />
      {EmailError ? <label>Field is required</label> : ""}

  </div>

  <div className="form-field">
    <input
      onChange={(e) => {
        setMobile(e.target.value);
        setMobileError(false);
      }}
      ref={inputRefs.Mobile}
      placeholder="Mobile"
    />
      {MobileError ? <label>Field is required</label> : ""}

  </div>

</form>



        <div className="checkbox">
        <input
            type="checkbox"
            // onChange={(e) => {
            //   setEmail(e.target.value);
            //   setEmailError(false);
            // }}
            className="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {CheckBoxError?<label>Check this box if you want to proceed</label>:"ljkljlk"}
          <p className="checkbox_text">
            {" "}
            Share my registration data with Superapp
          </p>
        </div>

        <button onClick={handleSubmit}>SIGN UP</button>
        <p>
          By clicking on Sign up. you agree to Superapp{" "}
          <span>
            Terms and
            <br /> Conditions of Use
          </span>
        </p>
        <p>
          To learn more about how Superapp collects, uses, shares and <br />
          protects your personal data please head Superapp
          <span>
            Privacy
            <br /> Policy
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
