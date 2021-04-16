import React, { useState, useEffect } from "react";
import { Container, Row, Col, Label, Input, Button } from "reactstrap";
import { checkValidity } from "../CheckValidity/checkValidity";
import {
  Card,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import axios from "axios";
const Registration1 = (props) => {
  const [dropdownOpenCategory, setDropdownOpenCategory] = useState(false);
  const [dropdownOpenCountry, setDropdownOpenCountry] = useState(false);
  const [dropdownOpenState, setDropdownOpenState] = useState(false);
  const [secondaryContactEnabled, setSecondaryContactEnabled] = useState(false);
  const [billingAddressEnabled, setBillingAddressEnabled] = useState(false);

  const [companyNameValid, setCompanyNameValid] = useState(false);
  const [companyWebsiteValid, setCompanyWebsiteValid] = useState(false);
  const [firstNameValid, setFirstameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [cityValid, setCityValid] = useState(false);
  const [postalValid, setPostalValid] = useState(false);
  const [addressValid, setAddressValid] = useState(false);
  const [iCategorySelect, setICategorySelect] = useState(false);
  const [cCategorySelect, setCCategorySelect] = useState(false);
  const [sCategorySelect, setSCategorySelect] = useState(false);

  const [iCategoryLabel, setICategoryLabel] = useState("Select...");
  const [cCategoryLabel, setCCategoryLabel] = useState("Select...");
  const [sCategoryLabel, setSCategoryLabel] = useState("Select...");

  const onChangeHandler = (type, input) => {
    console.log("In onChangeHandler " + type);
    if (type === "companyName") {
      if (checkValidity("name", input)) {
        setCompanyNameValid(true);
        console.log(companyNameValid);
      } else {
        setCompanyNameValid(false);
      }
    } else if (type === "companyWebsite") {
      console.log(companyWebsiteValid);
      if (checkValidity("website", input)) {
        setCompanyWebsiteValid(true);
        console.log(companyWebsiteValid);
      } else {
        setCompanyWebsiteValid(false);
      }
    } else if (type === "firstName") {
      if (checkValidity("name", input)) {
        setFirstameValid(true);
      } else {
        setFirstameValid(false);
      }
    } else if (type === "lastName") {
      if (checkValidity("name", input)) {
        setLastNameValid(true);
      } else {
        setLastNameValid(false);
      }
    } else if (type === "email") {
      if (checkValidity("email", input)) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
    } else if (type === "phone") {
      if (checkValidity("phone", input)) {
        setPhoneValid(true);
      } else {
        setPhoneValid(false);
      }
    } else if (type === "city") {
      if (checkValidity("name", input)) {
        setCityValid(true);
      } else {
        setCityValid(false);
      }
    } else if (type === "postal") {
      if (checkValidity("postal", input)) {
        setPostalValid(true);
      } else {
        setPostalValid(false);
      }
    } else if (type === "address") {
      if (checkValidity("address", input)) {
        setAddressValid(true);
      } else {
        setAddressValid(false);
      }
    }
  };

  const nextDisabled = () => {
    if (
      sCategorySelect &&
      cCategorySelect &&
      iCategorySelect &&
      companyNameValid &&
      companyWebsiteValid &&
      firstNameValid &&
      lastNameValid &&
      emailValid &&
      phoneValid &&
      cityValid &&
      postalValid
    ) {
      return false;
    } else {
      return true;
    }
  };

  const page1SubmitHandler = (event) => {
    let loginresponse = JSON.parse(localStorage.getItem("loginResponse"));
    axios
      .post(
        `http://localhost:3000/api/company/client`,
        {
          companyName: document.getElementById("companyName").value,
          industryID: "9754b9d4-1832-44e0-b186-08a431033c23",
          companyWebsite: document.getElementById("companyWebsite").value,
          companyType: "Client",
          contactAddress: {
            business: {
              address: document.getElementById("address").value,
              address2: document.getElementById("addressLine2").value,
              city: document.getElementById("city").value,
              postal: document.getElementById("postal").value,
              country: cCategoryLabel,
              state: sCategoryLabel,
              provinceID: 2,
            },
            billing: {
              address: "TEMP",
              address2: "TEMP",
              city: "TEMP",
              state: "TEMP",
              postal: "TEMP",
              country: "TEMP",
              provinceID: 0,
            },
            useSame: false,
          },
          addressType: "Billing",
          firstName: document.getElementById("firstName").value,
          lastName: document.getElementById("lastName").value,
          email: document.getElementById("email").value,
          phone: document.getElementById("phone").value,
          secondaryContact: {
            firstName: document.getElementById("secFirstName").value || "NA",
            lastName: document.getElementById("secLastName").value || "NA",
            email: document.getElementById("secEmail").value || "NA",
            phone: document.getElementById("secPhone").value || "NA",
          },
          roleCode: loginresponse.data.data.personData.roleCode,
          createdByPerson: loginresponse.data.data.personData.id,
        },
        { headers: { "x-token": loginresponse.data.data.token } }
      )
      .then((res) => {
        alert(res);
        props.page1SubmitHandler(event);
      })
      .catch((error) => {
        console.log(error.response.data);
        alert(error.response.data.errorMessage);
      });
  };

  const iCategorySelectHandler = (value) => {
    setICategorySelect(true);
    setICategoryLabel(value);
  };

  const cCategorySelectHandler = (value) => {
    setCCategorySelect(true);
    setCCategoryLabel(value);
  };

  const sCategorySelectHandler = (value) => {
    setSCategorySelect(true);
    setSCategoryLabel(value);
  };

  const toggleDropdown = (type) => {
    if (type === "Country") {
      setDropdownOpenCountry(!dropdownOpenCountry);
    }
    if (type === "Category") {
      setDropdownOpenCategory(!dropdownOpenCategory);
    }
    if (type === "State") {
      setDropdownOpenState(!dropdownOpenState);
    }
  };

  const billingAddressEnable = () => {
    setBillingAddressEnabled(!billingAddressEnabled);
  };

  const secondaryContactEnable = () => {
    setSecondaryContactEnabled(!secondaryContactEnabled);
  };

  return (
    <div style={({ backgroundColor: "#eaeaea" }, { display: "flex" })}>
      <Card style={{ margin: "1% 1% 1% 1%" }}>
        <Container>
          <h5 style={{ color: "blue" }}>Add New Advertiser</h5>
          <Row xs="2">
            <Col>
              <Label>Company Name</Label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col>
              <Label>Company Website Address</Label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="Company Name"
                size="sm"
                id="companyName"
                onChange={() =>
                  onChangeHandler(
                    "companyName",
                    document.getElementById("companyName").value
                  )
                }
              ></Input>
              {!companyNameValid ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Enter Company Name
                </span>
              ) : null}
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="e.g www.abc.com"
                size="sm"
                id="companyWebsite"
                onChange={() =>
                  onChangeHandler(
                    "companyWebsite",
                    document.getElementById("companyWebsite").value
                  )
                }
              ></Input>
              {!companyWebsiteValid ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Enter Company Website
                </span>
              ) : null}
            </Col>
          </Row>
          <Row xs="1">
            <Col>
              <Label>Industry Category</Label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col>
              <Dropdown
                style={{
                  backgroundColor: "lightgrey",
                  maxWidth: "48.5%",
                }}
                size={"sm"}
                isOpen={dropdownOpenCategory}
                toggle={() => toggleDropdown("Category")}
              >
                <DropdownToggle
                  style={{
                    backgroundColor: "lightgrey",
                    maxWidth: "540px",
                  }}
                  caret
                >
                  {iCategoryLabel}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={() => {
                      iCategorySelectHandler("Category1");
                    }}
                  >
                    Category1
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      iCategorySelectHandler("Category1");
                    }}
                  >
                    Category2
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              {!iCategorySelect ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Select Industry Category
                </span>
              ) : null}
            </Col>
          </Row>
          <br />
          <h6 style={{ background: "lightgrey" }}>Primary Contact</h6>
          <Row xs="2">
            <Col>
              <Label>First Name</Label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col>
              <Label>Last Name</Label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="First Name"
                size="sm"
                id="firstName"
                onChange={() =>
                  onChangeHandler(
                    "firstName",
                    document.getElementById("firstName").value
                  )
                }
              ></Input>
              {!firstNameValid ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Enter First Name
                </span>
              ) : null}
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="Last Name"
                size="sm"
                id="lastName"
                onChange={() =>
                  onChangeHandler(
                    "lastName",
                    document.getElementById("lastName").value
                  )
                }
              ></Input>
              {!lastNameValid ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Enter Last Name
                </span>
              ) : null}
            </Col>
            <Col>
              <Label>Email</Label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col>
              <Label>Phone</Label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="Enter email"
                size="sm"
                id="email"
                onChange={() =>
                  onChangeHandler(
                    "email",
                    document.getElementById("email").value
                  )
                }
              ></Input>
              {!emailValid ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Enter Email
                </span>
              ) : null}
            </Col>
            <Col>
              <Input
                type="phone"
                placeholder="Enter contact number"
                size="sm"
                id="phone"
                onChange={() =>
                  onChangeHandler(
                    "phone",
                    document.getElementById("phone").value
                  )
                }
              ></Input>
              {!phoneValid ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Enter Phone Number
                </span>
              ) : null}
            </Col>
          </Row>
          <br />
          <Row xs="1">
            <Col style={{}}>
              <Input
                type="checkbox"
                onChange={() => secondaryContactEnable()}
              ></Input>
              <h6 style={{ background: "lightgrey" }}>
                Secondary Contact (Optional)
              </h6>
            </Col>
            {secondaryContactEnabled ? (
              <Container>
                <Row xs="2">
                  <Col>
                    <Label>First Name</Label>
                  </Col>
                  <Col>
                    <Label>Last Name</Label>
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      placeholder="First Name"
                      size="sm"
                      id="secFirstName"
                    ></Input>
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      placeholder="Last Name"
                      size="sm"
                      id="secLastName"
                    ></Input>
                  </Col>
                  <Col>
                    <Label>Email</Label>
                  </Col>
                  <Col>
                    <Label>Phone</Label>
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      placeholder="Enter email"
                      size="sm"
                      id="secEmail"
                    ></Input>
                  </Col>
                  <Col>
                    <Input
                      type="phone"
                      placeholder="Enter contact number"
                      size="sm"
                      id="secPhone"
                    ></Input>
                  </Col>
                </Row>
                <br />
              </Container>
            ) : null}
          </Row>

          <h6 style={{ background: "lightgrey" }}>Business Address</h6>
          <Row xs="2">
            <Col>
              <Label>Address</Label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col>
              <Label>Address Line 2</Label>
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="Enter Address"
                size="sm"
                id="address"
                onChange={() =>
                  onChangeHandler(
                    "address",
                    document.getElementById("address").value
                  )
                }
              ></Input>
              {!addressValid ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Enter Address
                </span>
              ) : null}
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="Enter address line 2"
                size="sm"
                id="addressLine2"
              ></Input>
            </Col>
            <Col>
              <Label>City</Label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col>
              <Label>Country</Label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="Enter City"
                size="sm"
                id="city"
                onChange={() =>
                  onChangeHandler("city", document.getElementById("city").value)
                }
              ></Input>
              {!cityValid ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Enter City
                </span>
              ) : null}
            </Col>
            <Col>
              <Dropdown
                defaultValue="Country1"
                style={{ backgroundColor: "lightgrey", maxWidth: "540px" }}
                size="sm"
                isOpen={dropdownOpenCountry}
                toggle={() => toggleDropdown("Country")}
              >
                <DropdownToggle
                  style={{
                    backgroundColor: "lightgrey",
                    maxWidth: "540px",
                  }}
                  caret
                >
                  {cCategoryLabel}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => cCategorySelectHandler("US")}>
                    US
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => cCategorySelectHandler("Canada")}
                  >
                    Canada
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              {!cCategorySelect ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Select Country
                </span>
              ) : null}
            </Col>
            <Col>
              <Label>State/Province</Label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col>
              <Label>Postal</Label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col>
              <Dropdown
                style={{ backgroundColor: "lightgrey", maxWidth: "540px" }}
                size="sm"
                isOpen={dropdownOpenState}
                toggle={() => toggleDropdown("State")}
              >
                <DropdownToggle
                  style={{ backgroundColor: "lightgrey", maxWidth: "540px" }}
                  caret
                >
                  {sCategoryLabel}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={() => sCategorySelectHandler("State1")}
                  >
                    State1
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => sCategorySelectHandler("State2")}
                  >
                    State2
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              {!sCategorySelect ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Select State
                </span>
              ) : null}
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="Enter postal code"
                size="sm"
                id="postal"
                onChange={() =>
                  onChangeHandler(
                    "postal",
                    document.getElementById("postal").value
                  )
                }
              ></Input>
              {!postalValid ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Enter Postal Code
                </span>
              ) : null}
              <br />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                type="checkbox"
                onChange={() => billingAddressEnable()}
              ></Input>
              <h6 style={{ background: "lightgrey" }}>
                Billing Address (Optional)
              </h6>
              {billingAddressEnabled ? (
                <Row xs="2">
                  <Col>
                    <Label>Address</Label>
                  </Col>
                  <Col>
                    <Label>Address Line 2</Label>
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      placeholder="Enter Address"
                      size="sm"
                      id="address"
                    ></Input>
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      placeholder="Enter address line 2"
                      size="sm"
                      id="addressLine2"
                    ></Input>
                  </Col>
                  <Col>
                    <Label>City</Label>
                  </Col>
                  <Col>
                    <Label>Country</Label>
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      placeholder="Enter City"
                      size="sm"
                      id="city"
                    ></Input>
                  </Col>
                  <Col>
                    <Dropdown
                      style={{
                        backgroundColor: "lightgrey",
                        maxWidth: "540px",
                      }}
                      size="sm"
                      isOpen={dropdownOpenCountry}
                      toggle={() => toggleDropdown("Country")}
                    >
                      <DropdownToggle
                        style={{
                          backgroundColor: "lightgrey",
                          maxWidth: "540px",
                        }}
                        caret
                      >
                        {cCategoryLabel}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Country1</DropdownItem>
                        <DropdownItem>Country2</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </Col>
                  <Col>
                    <Label>State/Province</Label>
                  </Col>
                  <Col>
                    <Label>Postal</Label>
                  </Col>
                  <Col>
                    <Dropdown
                      style={{
                        backgroundColor: "lightgrey",
                        maxWidth: "540px",
                      }}
                      size="sm"
                      isOpen={dropdownOpenState}
                      toggle={() => toggleDropdown("State")}
                    >
                      <DropdownToggle
                        style={{
                          backgroundColor: "lightgrey",
                          maxWidth: "540px",
                        }}
                        caret
                      >
                        Select...
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>State1</DropdownItem>
                        <DropdownItem>State2</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      placeholder="Enter postal code"
                      size="sm"
                      id="postal"
                    ></Input>
                  </Col>
                </Row>
              ) : null}
            </Col>
          </Row>
          <br />
        </Container>
        <div style={{ display: "flex" }}>
          <Button
            color="secondary"
            style={{ marginLeft: "10px" }}
            onClick={(event) => props.page1CancelHandler(event)}
          >
            Cancel
          </Button>
          <Button
            disabled={nextDisabled()}
            color="primary"
            style={{ marginLeft: "auto" }}
            // onClick={(event) => props.page1SubmitHandler(event)}
            onClick={(event) => page1SubmitHandler(event)}
          >
            Create Advertiser
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Registration1;
