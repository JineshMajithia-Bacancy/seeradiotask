import "./CustomStepper.css";
import { Row, Col } from "reactstrap";
const CustomStepper = (props) => {
  //let step = props.activeStep;
  console.log(props.activeStep);
  let step = props.activeStep;
  console.log(step);
  let style = {
    complete: {
      one: "step ml-auto completeStep",
      two: "step completeStep",
    },
    active: {
      one: "step ml-auto activeStep",
      two: "step activeStep",
      three: "step mr-auto activeStep",
    },
    incomplete: {
      two: "step incompleteStep",
      three: "step mr-auto incompleteStep",
    },
  };
  return (
    <div className="d-flex flex-rows my-5" style={{ fontSize: "12px" }}>
      <div
        className={
          step === 1
            ? style.active.one
            : step === 2
            ? style.complete.one
            : style.complete.one
        }
      >
        <p style={{ textAlign: "center" }}>
          Step 1<br />
          Add Advertiser
        </p>
      </div>
      <div
        className={
          step === 1
            ? style.incomplete.two
            : step === 2
            ? style.active.two
            : style.complete.two
        }
      >
        <p style={{ textAlign: "center" }}>
          Step 2<br />
          Add Order
        </p>
      </div>
      <div
        className={
          step === 1
            ? style.incomplete.three
            : step === 2
            ? style.incomplete.three
            : style.active.three
        }
      >
        <p style={{ textAlign: "center" }}>
          Step 3 <br />
          Add Assets
        </p>
      </div>
    </div>
  );
};
export default CustomStepper;
