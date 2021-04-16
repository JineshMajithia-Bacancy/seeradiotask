import React, { useState, useEffect } from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./StepperDiv.module.css";

const StyledDiv = {
  background: "white",
  color: "black",
  margin: "20px",
  height: "55px",
  width: "200px",
  clipPath: "polygon(0% 0%, 10% 50%, 0% 100%, 90% 100%, 100% 50%, 90% 0%)",
};

const StepperDiv = (props) => {
  const [classes, setClasses] = useState(StyledDiv);
  useEffect(() => {
    if (props.active) {
      setClasses({
        ...StyledDiv,
        background: "black",
        color: "white",
      });
    } else if (props.completed && !props.active) {
      console.log("completed");
      setClasses({
        ...StyledDiv,
        background: "#0275d8",
        color: "white",
      });
    } else {
      setClasses({
        ...StyledDiv,
        background: "white",
        color: "black",
      });
    }
  }, [props.active, props.completed, props]);

  return (
    <div style={classes}>
      {/* <div style={{display: "inline-flex"}}>
                {props.completed ? <FontAwesomeIcon icon={faCheckCircle} /> : null}
            </div> */}
      <div style={{ display: "inline-flex" }}>{props.children}</div>
    </div>
  );
};

export default StepperDiv;

/*
<StepperDiv active={active === "3"} completed={assetsForm}>
  Step 3
            <br />
            Add Assets
        </StepperDiv>
*/
