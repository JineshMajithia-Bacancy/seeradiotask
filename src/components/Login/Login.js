import React from "react";
import { useState } from "react";
import { Label, Input, Button, Card, Col, InputGroup } from "reactstrap";
import { checkValidity } from "../CheckValidity/checkValidity";
import seeRadioIcon from "../assets/logo.png";
import { BsFillEyeSlashFill } from "react-icons/bs";
import axios from "axios";

const Login = (props) => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passVisible, setPassVisible] = useState(false);

  const onLoginHandler = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    axios
      .post(`http://localhost:3000/pub/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("loginResponse", JSON.stringify(res));
        console.log(localStorage.getItem("loginResponse"));
        props.history.push("/Dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeHandler = (type) => {
    if (type === "email") {
      let email = document.getElementById("email").value;
      if (checkValidity(type, email)) {
        setIsEmailValid(true);
      } else {
        setIsEmailValid(false);
      }
    }

    if (type === "password") {
      let password = document.getElementById("password").value;
      if (checkValidity(type, password)) {
        setIsPasswordValid(true);
      } else {
        setIsPasswordValid(false);
      }
    }
  };

  const checkDisabled = () => {
    if (isEmailValid && isPasswordValid) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div>
      <Card style={{ margin: "5% 35%", borderRadius: "10px" }}>
        <div style={{ margin: "10px 10px 10px 10px", alignContent: "center" }}>
          <Col>
            <img
              src={seeRadioIcon}
              style={{ margin: "1px", height: "100%", width: "100%" }}
              alt="icon"
            />
          </Col>
        </div>{" "}
        <div style={{ margin: "10px 10px 10px 10px" }}>
          <Label>
            Email <span style={{ color: "red" }}>*</span>
          </Label>
          <Input
            type="text"
            id="email"
            placeholder="Enter Email"
            onChange={() => onChangeHandler("email")}
          ></Input>
          <br />
          <Label>
            Password <span style={{ color: "red" }}>*</span>
          </Label>
          <InputGroup>
            <Input
              type={passVisible ? "text" : "password"}
              id="password"
              placeholder="Enter Password"
              required
              onChange={() => onChangeHandler("password")}
            ></Input>

            <Button
              style={{ backgroundColor: "lightgray" }}
              onClick={() => setPassVisible(!passVisible)}
            >
              {<BsFillEyeSlashFill />}
            </Button>
          </InputGroup>
          <br />
          <Button
            disabled={checkDisabled()}
            color="primary"
            style={{ margin: "auto" }}
            onClick={() => onLoginHandler()}
          >
            Login
          </Button>
          <br />
          <Label>Forgot Password?</Label>
        </div>
      </Card>
    </div>
  );
};

export default Login;
