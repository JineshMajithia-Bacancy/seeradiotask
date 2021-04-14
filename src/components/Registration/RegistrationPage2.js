import React, { useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Label,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { checkValidity } from "../CheckValidity/checkValidity";

const Registration2 = (props) => {
  const [dropdownOpenAdvertiser, setDropdownOpenAdvertiser] = useState(false);
  const [dropdownOpenMarket, setDropdownOpenMarket] = useState(false);

  const [titleValid, setTitleValid] = useState(false);
  const [landingUrlValid, setLandingUrlValid] = useState(false);
  const [priceValid, setPriceValid] = useState(false);
  const [descriptionValid, setDescriptionValid] = useState(false);
  const [budgetValid, setBudgetValid] = useState(false);

  const [aCategoryLabel, setACategoryLabel] = useState();
  const [aCategorySelect, setACategorySelect] = useState(false);

  const [mCategoryLabel, setMCategoryLabel] = useState();
  const [mCategorySelect, setMCategorySelect] = useState(false);

  const onChangeHandler = (type, input) => {
    if (type === "title") {
      if (checkValidity("name", input)) {
        setTitleValid(true);
      } else {
        setTitleValid(false);
      }
    }
    if (type === "landingUrl") {
      if (checkValidity("website", input)) {
        setLandingUrlValid(true);
      } else {
        setLandingUrlValid(false);
      }
    }
    if (type === "price") {
      if (checkValidity("number", input)) {
        setPriceValid(true);
      } else {
        setPriceValid(false);
      }
    }
    if (type === "description") {
      if (checkValidity("name", input)) {
        setDescriptionValid(true);
      } else {
        setDescriptionValid(false);
      }
    }

    if (type === "budget") {
      if (checkValidity("number", input)) {
        setBudgetValid(true);
      } else {
        setBudgetValid(false);
      }
    }
  };
  const aCategoryClickHandler = (value) => {
    setACategorySelect(true);
    setACategoryLabel(value);
  };

  const mCategoryClickHandler = (value) => {
    setMCategorySelect(true);
    setMCategoryLabel(value);
  };

  const toggleDropdown = (type) => {
    if (type === "Advertiser") {
      setDropdownOpenAdvertiser(!dropdownOpenAdvertiser);
    }
    if (type === "Market") {
      setDropdownOpenMarket(!dropdownOpenMarket);
    }
  };

  const nextDisabled = () => {
    if (
      budgetValid &&
      descriptionValid &&
      titleValid &&
      mCategorySelect &&
      aCategorySelect &&
      priceValid &&
      descriptionValid
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div style={({ backgroundColor: "#eaeaea" }, { display: "flex" })}>
      <Card style={{ margin: "1% 1% 1% 1%" }}>
        <Container>
          <h5 style={{ color: "blue" }}>Add New Orders</h5>
          <h6 style={{ background: "lightgrey" }}>Order</h6>
          <Row xs="2">
            <Col>
              <Label>Advertiser</Label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col>
              <Label>Title</Label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col>
              <Dropdown
                style={{ color: "lightgrey" }}
                size="sm"
                isOpen={dropdownOpenAdvertiser}
                toggle={() => toggleDropdown("Advertiser")}
              >
                <DropdownToggle style={{ color: "lightgrey" }} caret>
                  {aCategoryLabel || "Test Bacancy"}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={() => aCategoryClickHandler("Advertiser1")}
                  >
                    Advertiser1
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => aCategoryClickHandler("Advertiser2")}
                  >
                    Advertiser2
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="Title"
                size="sm"
                id="title"
                onChange={() =>
                  onChangeHandler(
                    "title",
                    document.getElementById("title").value
                  )
                }
              ></Input>
              {!titleValid ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Enter title
                </span>
              ) : null}
            </Col>
            <Col>
              <Label>Preferred Landing Page URL</Label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col>
              <Label>Price</Label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="www.testbacancy.com"
                size="sm"
                id="landingUrl"
                onChange={() =>
                  onChangeHandler(
                    "landingUrl",
                    document.getElementById("landingUrl").value
                  )
                }
              ></Input>
              {!landingUrlValid ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Enter title
                </span>
              ) : null}
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="Price"
                size="sm"
                id="price"
                onChange={() =>
                  onChangeHandler(
                    "price",
                    document.getElementById("price").value
                  )
                }
              ></Input>
              {!priceValid ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Enter Price
                </span>
              ) : null}
            </Col>
            <Col>
              <Label>Description</Label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col></Col>
            <Col>
              <Input
                type="textarea"
                placeholder="Description"
                size="sm"
                onChange={() =>
                  onChangeHandler(
                    "description",
                    document.getElementById("description").value
                  )
                }
                id="description"
              ></Input>
              {!descriptionValid ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Enter Description
                </span>
              ) : null}
            </Col>
          </Row>
          <br />
          <h6 style={{ background: "lightgrey" }}>Destribution</h6>
          <Row xs="2">
            <Col>
              <Label>Target Market</Label>
            </Col>
            <Col>
              <Label>Budget</Label>
              <span style={{ color: "red" }}>*</span>
            </Col>
            <Col>
              <Dropdown
                style={{ color: "lightgrey" }}
                size="sm"
                isOpen={dropdownOpenMarket}
                toggle={() => toggleDropdown("Market")}
              >
                <DropdownToggle style={{ color: "lightgrey" }} caret>
                  {mCategoryLabel || "Select Market"}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={() => mCategoryClickHandler("Market1")}
                  >
                    Market1
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => mCategoryClickHandler("Market2")}
                  >
                    Market2
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col>
              <Input
                onChange={() =>
                  onChangeHandler(
                    "budget",
                    document.getElementById("budget").value
                  )
                }
                type="text"
                placeholder="$0"
                size="sm"
                id="budget"
              ></Input>
              {!budgetValid ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Enter Description
                </span>
              ) : null}
            </Col>
          </Row>
          <br />
        </Container>
        <div style={{ display: "flex" }}>
          <Button
            color="primary"
            style={{ marginRight: "auto" }}
            onClick={(event) => props.page2PreviousHandler(event)}
          >
            Previous
          </Button>
          <Button
            color="secondary"
            style={{ marginLeft: "auto", marginRight: "auto" }}
            onClick={() => props.page2CancelHandler()}
          >
            Cancel
          </Button>
          <Button
            disabled={nextDisabled()}
            color="primary"
            style={{ marginLeft: "auto" }}
            onClick={() => props.page2SubmitHandler()}
          >
            Create Order
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Registration2;
