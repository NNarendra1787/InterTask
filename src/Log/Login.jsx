import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [response, setResponse] = useState(null);
  const navi = useNavigate();

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const LoginUser = async (userData) => {
    const url = "https://firstintertaskback-end.onrender.com/data/login";
    const res = await axios.post(url, userData);
    setResponse(res.data);
    console.log(res.data);

    if (res.data.token) {
      console.log(res.data.token);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("name", res.data.userData.name);
      localStorage.setItem("email", res.data.userData.email);
      localStorage.setItem("userId", res.data.userData._id);

      navi("/dashboard");
      console.log(response);
    } else {
      window.alert("Invalid Credential");
      navi("/");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    setEmail("");
    setPassword("");
    LoginUser(userData);
  };

  return (
    <div className="MainPage">
      <section className="squatal">
        <div className="topPart">
          <h3 className="head h3">Signin to your PopX account</h3>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <section className="Form">
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
              placeholder="Enter email address"
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
              placeholder="Enter password"
            />
          </div>
          <button onClick={submitHandler} className="btn3">
            Login
          </button>
        </section>
      </section>
    </div>
  );
}

export default Login;
