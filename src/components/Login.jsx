import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./css/Login.css";
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebaseConfig";
// import { useNavigate } from "react-router-dom";


function Login(props) {
  const [Login, setLogin] = useState({
    userName: "",
    password: "",
  });

  // const navigate=useNavigate();

  const[show,setShow]=useState(false);

  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");

  const handleChange = (event) => {
    setLogin((prevValue) => {
      return {
        ...prevValue,
        [event.target.name]: event.target.value,
      };
    });
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    setShow(true);
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha",{});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const data = await user.confirm(otp);
      console.log(data);
      localStorage.setItem('user', data.user['accessToken'])
      // localStorage.setItem('refresh', data.user['refreshToken'])
      props.setToken(true);
      // navigate('/');
      
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  return (
    <div className="login">
      <div className="login-main-container">
        <form>
          {/* <div className="logo-and-detail">
            <img src="images/user.png" alt="" className="login-logo" />
            <p>User Name</p>
          </div>

          <input
            type="text"
            name="userName"
            className="login-inputs"
            onChange={handleChange}
          />

          <div className="logo-and-detail">
            <img
              src="images/lock.png"
              alt=""
              className="login-logo"
              onChange={handleChange}
            />
            <p>Password</p>
          </div>

          <input type="password" name="password" className="login-inputs" /> */}
           
           <p className="paragraph">Enter Phone Number</p>

          <PhoneInput
            className="phoneNumber-component"
            country={"et"}
            onChange={(phone) => setPhone("+" + phone)}
            value={phone}
          />
          <button className="login-button" onClick={sendOtp}>
            Send Otp
          </button>
          <div id="recaptcha"></div>

          <div style={show?{display:'block'}:{display:"none"}}>
            <input
              type="text"
              className="login-inputs"
              placeholder="Enter Otp"
              onChange={(e) => setOtp(e.target.value)}
            />
            <button className="login-button" onClick={verifyOtp}>
              Verify Otp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
