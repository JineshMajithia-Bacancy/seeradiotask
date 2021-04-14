import React, { useState } from "react";

import { Card, CardTitle, Input, Label, Button, InputGroup } from "reactstrap";

import Topbar from "../NavBar/TopBar";

import Navbar from "../NavBar/NavBar";

import { BsFillEyeSlashFill } from "react-icons/bs";

import { checkValidity } from "../CheckValidity/checkValidity";

import axios from "axios";
import { useHistory } from "react-router";

const ChangePassword = (props) => {
  const history = useHistory();

  const [passVisible1, setPassVisible1] = useState(false);
  const [passVisible2, setPassVisible2] = useState(false);

  const [currentPasswordValid, setCurrentPasswordValid] = useState(false);
  const [newPasswordValid, setnewPasswordValid] = useState(false);
  const [newPasswordValid2, setnewPasswordValid2] = useState(false);

  const handleChangePassword = () => {
    let loginresponse = JSON.parse(localStorage.getItem("loginResponse"));
    let token = loginresponse.data.data.token;
    let currentPassword = document.getElementById("currentPassword").value;
    let newPassword = document.getElementById("newPassword").value;
    axios
      .post(
        `http://localhost:3000/api/person/changePassword`,
        {
          oldPassword: currentPassword,
          newPassword: newPassword,
        },
        { headers: { "x-token": token } }
      )
      .then((res) => {
        alert(res.data.data.message);
        history.push("/Dashboard");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleOnChange = (e, type) => {
    switch (type) {
      case "currentPassword":
        if (checkValidity("password", e.target.value)) {
          setCurrentPasswordValid(true);
        } else {
          setCurrentPasswordValid(false);
        }
      default:
        let npassword = document.getElementById("newPassword").value;
        let npassword2 = document.getElementById("newPassword2").value;
        if (
          checkValidity("password", npassword) &&
          checkValidity("password", npassword2) &&
          npassword === npassword2
        ) {
          setnewPasswordValid(true);
          setnewPasswordValid2(true);
        } else {
          setnewPasswordValid(false);
          setnewPasswordValid2(false);
        }
    }
  };
  return (
    <div style={{ fontSize: "12px" }}>
      <Topbar />
      <Navbar />
      <Card style={{ margin: "5% 30%", borderRadius: "10px" }}>
        <div style={{ padding: "5px 5px 5px 5px" }}>
          <CardTitle style={{ alignSelf: "center" }}>
            <h5 style={{ color: "blue" }}>Change Password</h5>
          </CardTitle>
          <Label style={{ alignSelf: "center" }}>Current Password</Label>
          <Input
            onChange={(e) => handleOnChange(e, "currentPassword")}
            id="currentPassword"
            type="text"
            placeholder="Current Password"
            style={{ borderColor: currentPasswordValid ? null : "red" }}
          ></Input>
          <Label style={{ alignSelf: "center", paddingTop: "2px" }}>
            New Password
          </Label>
          <InputGroup>
            <Input
              onChange={(e) => handleOnChange(e, "newPassword")}
              id="newPassword"
              type={passVisible1 ? "text" : "password"}
              placeholder="New Password"
              style={{ borderColor: newPasswordValid ? null : "red" }}
            ></Input>
            <Button
              style={{ backgroundColor: "lightgray" }}
              onClick={() => setPassVisible1(!passVisible1)}
            >
              {<BsFillEyeSlashFill />}
            </Button>
          </InputGroup>

          <Label style={{ alignSelf: "center", paddingTop: "2px" }}>
            Re-enter New Password
          </Label>
          <InputGroup>
            <Input
              onChange={(e) => handleOnChange(e, "newPassword")}
              id="newPassword2"
              type={passVisible2 ? "text" : "password"}
              placeholder="Re-enter New Password"
              style={{ borderColor: newPasswordValid2 ? null : "red" }}
            ></Input>
            <Button
              style={{ backgroundColor: "lightgray" }}
              onClick={() => setPassVisible2(!passVisible2)}
            >
              {<BsFillEyeSlashFill />}
            </Button>
          </InputGroup>
          <br />
          <Button
            onClick={() => handleChangePassword()}
            style={{
              marginLeft: "auto",
              color: "blue",
              backgroundColor: "lightskyblue",
              alignSelf: "center",
            }}
          >
            Change Password
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ChangePassword;
