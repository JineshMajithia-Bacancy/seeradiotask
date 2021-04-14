import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const history = useHistory();

  return (
    <div style={{ fontSize: "12px" }}>
      <Navbar
        light
        expand="md"
        style={{ backgroundColor: "#0269d0d6", maxHeight: "30px" }}
      >
        <NavbarBrand href="/Dashboard">Dashboard</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Campaigns
              </DropdownToggle>
              <DropdownMenu style={{ fontSize: "12px" }} right>
                <DropdownItem>Videos in Production</DropdownItem>
                <DropdownItem>Campaigns in Market</DropdownItem>
                <DropdownItem>Completed Campaigns</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/components/">Advertisers</NavLink>
            </NavItem>
          </Nav>
          <Button
            style={{
              border: "1px black",
              padding: "auto",
              backgroundColor: "#3a3a9b",
              maxHeight: "25px",
              fontSize: "12px",
            }}
            onClick={() => {
              history.push("/Registration");
            }}
          >
            +Order
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
