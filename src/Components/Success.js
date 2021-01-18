import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Success.css";
import ChefSteppers from "../Components/assets/chefRegisSteppers.png";
import { black } from "material-ui/styles/colors";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "0%",
    bgColor: "black",
  },

  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Registration",
    "Verification & Next Steps",
    "Profile Creation Successful",
  ];
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Stepper
        style={{ backgroundColor: "transparent" }}
        className="Success-main"
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="shine">
        <h1>Thanks for registering! We will get in touch with you shortly.</h1>
      </div>
      <div className="selectionCriteria">
        <h3>Selection Criteria</h3>
        <p>Our Promise to Consumers is Trusted & Verified Home Chefs. Our Team visits every Home Chef house to check for Hygiene and Food Quality. They will be happy to share the opportunity in person.</p>
        <ul>
          <li>A home chef who has passion to cook.</li>
          <li>A home chef who maintains a high standard of hygine.</li>
          <li>A home chef who is particular about his quality & standards.</li>
        </ul>
      </div>
    </div>
  );
}
