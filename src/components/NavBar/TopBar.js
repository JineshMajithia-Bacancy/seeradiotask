import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import {
  Nav,
  Navbar,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import seeRadioIcon from "../assets/logo.png";

const Topbar = (props) => {
  const history = useHistory();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };
  const [nameToDisplay, setNameToDisplay] = useState("");
  const [loginresponse, setLoginresponse] = useState();

  useEffect(() => {
    let loginresponse = JSON.parse(localStorage.getItem("loginResponse"));
    let nameToDisplay =
      loginresponse.data.data.personData.firstName +
      " " +
      loginresponse.data.data.personData.lastName;
    setNameToDisplay(nameToDisplay);
    setLoginresponse(loginresponse);
  }, []);

  const handlePasswordChange = () => {
    history.push("/changePassword");
  };
  return (
    <div>
      <Navbar>
        <Nav>
          <NavItem>
            <img
              src={seeRadioIcon}
              style={{ height: "50px", width: "150px" }}
              alt="icon"
            />
          </NavItem>
        </Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle size="sm" caret>
            {nameToDisplay}
          </DropdownToggle>
          <DropdownMenu style={{ fontSize: "12px" }} right>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem
              onClick={() => {
                history.push("/ChangePassword");
              }}
            >
              Change Password
            </DropdownItem>
            <DropdownItem>Company Detail</DropdownItem>
            <DropdownItem style={{ color: "red" }}>Sign out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Navbar>
    </div>
  );
};

export default Topbar;
