import React from 'react';
import "./style.css";

import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";

const Progress = () => {
const step1Content = <h1></h1>;
  const step2Content = <h1></h1>;
  const step3Content = <h1></h1>;

  function step2Validator() {
    return true;
  }

  function step3Validator() {
    // return a boolean
  }
    return (
        <div>
            <StepProgressBar
        startingStep={0}
        steps={[
          {
            label: "service",
            name: "Service",
            content: step1Content,
            
          },
          {
            label: "cards",
            name: "cards",
            content: step2Content
          },
          {
            label: "shipping",
            name: "shipping",
            content: step3Content,
            validator: step2Validator
          },
          {
            label: "payment",
            name: "payment",
            content: step3Content
          },
          {
            label: "review",
            name: "review",
            content: step3Content
          }
        ]}
      />
            
        </div>
    );
};

export default Progress;