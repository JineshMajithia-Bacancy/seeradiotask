import React, { useState } from "react";
import Registration1 from "./RegistrationPage1";
import Registration2 from "./RegistrationPage2";
import Registration3 from "./RegistrationPage3";
import NavigationBar from "../NavBar/NavBar";
import { Card, CardBody } from "reactstrap";
import { useHistory } from "react-router";
import Topbar from "../NavBar/TopBar";
import Stepper from "../Stepper/CustomStepper";
const Registration = () => {
  const [page1, setPage1] = useState(true);
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);

  let history = useHistory();

  const page1SubmitHandler = (event) => {
    event.preventDefault();
    setPage1(false);
    setPage2(true);
  };

  const page1CancelHandler = () => {
    history.push("/Dashboard");
  };

  const page2SubmitHandler = () => {
    setPage2(false);
    setPage3(true);
  };

  const page2CancelHandler = () => {
    history.push("/Dashboard");
  };

  const page2PreviousHandler = (event) => {
    event.preventDefault();
    setPage2(false);
    setPage1(true);
  };

  const page3SubmitHandler = () => {
    history.push("/Dashboard");
  };

  const page3CancelHandler = () => {
    history.push("/Dashboard");
  };

  const page3PreviousHandler = () => {
    setPage3(false);
    setPage2(true);
  };

  return (
    <div>
      <Topbar />
      <NavigationBar />
      <Stepper activeStep="1" />
      <Card style={{ margin: "0 5%  5%  5%", borderRadius: "10px" }}>
        <CardBody>
          {page1 ? (
            <div>
              <Registration1
                page1SubmitHandler={page1SubmitHandler}
                page1CancelHandler={page1CancelHandler}
              />
            </div>
          ) : null}

          {page2 ? (
            <div>
              <Registration2
                page2CancelHandler={page2CancelHandler}
                page2PreviousHandler={page2PreviousHandler}
                page2SubmitHandler={page2SubmitHandler}
              />
            </div>
          ) : null}
          {page3 ? (
            <div>
              <Registration3
                page3PreviousHandler={page3PreviousHandler}
                page3CancelHandler={page3CancelHandler}
                page3SubmitHandler={page3SubmitHandler}
              />
            </div>
          ) : null}
        </CardBody>
      </Card>
    </div>
  );
};

export default Registration;
