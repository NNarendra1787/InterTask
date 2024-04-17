import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [response, setResponse] = useState(null);
  const navi = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const handlePhone = (event) => {
    event.preventDefault();
    setPhone(event.target.value);
  };
  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };
  const handleCompany = (event) => {
    event.preventDefault();
    setCompany(event.target.value);
  };

  const RegisterUser = async (clientData) => {
    const url = "https://firstintertaskback-end.onrender.com/data/register";
    const res = await axios.post(url, clientData);
    setResponse(res.data);
    console.log(res.data);

    if (res.data.token) {
      console.log(res.data.token);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("name", res.data.name);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("company", res.data.company);

      navi("/dashboard");
      console.log(response);
    } else {
      window.alert("Already Register User 🙋‍♂️");
      navi("/login");
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const clientData = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      company: company,
    };
    setName("");
    setEmail("");
    setPassword("");
    setPassword("");
    setCompany("");
    RegisterUser(clientData);
  };

  return (
    <div className="MainPage">
      <section className="squatal">
        <div className="reTopPart">
          <h3 className="head h3">Create your Popx Account</h3>
        </div>
        <section className="Form">
          <label>Full Name <span>*</span></label>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              required="true"
              autoComplete="Name"
              autoCorrect="name"
              value={name}
              onChange={handleName}
              placeholder="Enter Full Name"
            />
          </div>
          <label>Phone number <span>*</span></label>
          <div>
            <input
              type="number"
              name="name"
              id="name"
              required="true"
              autoComplete="Name"
              autoCorrect="name"
              value={phone}
              onChange={handlePhone}
              placeholder="Enter Full Name"
            />
          </div>
          <label>Email address <span>*</span></label>
          <div>
            <input
              type="email"
              name="name"
              id="name"
              required="true"
              autoComplete="Name"
              autoCorrect="name"
              value={email}
              onChange={handleEmail}
              placeholder="Enter email"
            />
          </div>
          <label>Password <span>*</span></label>
          <div>
            <input
              type="password"
              name="name"
              id="name"
              required="true"
              autoComplete="Name"
              autoCorrect="name"
              value={password}
              onChange={handlePassword}
              placeholder="Enter Full Name"
            />
          </div>
          <label>Company Name <span>*</span></label>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              required="true"
              autoComplete="Name"
              autoCorrect="name"
              value={company}
              onChange={handleCompany}
              placeholder="Enter your Compnay name"
            />
          </div>
          <div className="radio">
            <div className="lable">
              <p>Are you an Agency <span>*</span>?</p>
            </div>
            <div className="buttons">
               <input type="radio" name="radio" id="check" /> Yes
               <input type="radio" name="radio" id="check" /> No
            </div>
          </div>
        </section>
        <button onClick={HandleSubmit} className="btn4">
          Create Account
        </button>
      </section>
    </div>
  );
}

export default Register;
