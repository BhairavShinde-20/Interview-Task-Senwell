import { useState } from "react";
import "./Form.css";
import { Facebook } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Submithandler = (e) => {
    e.preventDefault();

    const dataObj = {
      email,
      password,
    };
    console.log(dataObj);
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="container">
        <div className="left_h">
          <h2>Welcome at Senwell Solution</h2>
        </div>
        <div className="right_h">
          <form onSubmit={Submithandler}>
            <h3>Welcome</h3>
            <p>Login into your account to continue</p>
            <input
              className="in"
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <br />
            <br />
            <input
              className="in"
              type="password"
              placeholder="Enter your Passoword"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <br />
            <br />
            <div className="sub">
              <input className="submitbtn" type="submit" />{" "}
            </div>
            <p>don't have an account <a href="https://senwellsys.com/">Sign In!</a></p> 

            <div className="icon">
              <Facebook /> &nbsp; &nbsp;
              <Twitter />
              &nbsp; &nbsp;
              <Linkedin />
              &nbsp; &nbsp;{" "}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
