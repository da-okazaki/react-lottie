import React, { useState } from "react";
import "./styles.css";
import Lottie from "react-lottie";
import * as animationData from "./assets/lottiefiles-logo.json";

import { Button } from "@material-ui/core";

const buttonStyle = {
  display: "inline-block",
  margin: "10px auto"
};

const LottieStyle = {
  display: "flex",
  width: "300px",
  height: "300px",
  justifyContent: "center",
  alignItems: "center"
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default function App() {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="AppStyle">
      <>
        {isStopped ? (
          <h3 style={LottieStyle}>Stopped</h3>
        ) : (
          <Lottie
            options={defaultOptions}
            height="100%"
            width="100%"
            isStopped={isStopped}
            isPaused={isPaused}
          />
        )}
      </>
      <div className="inlineBlock">
        <Button
          variant="contained"
          color="primary"
          style={buttonStyle}
          onClick={() => setIsStopped(true)}
        >
          stop
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={buttonStyle}
          onClick={() => {
            setIsStopped(false);
            setIsPaused(false);
          }}
        >
          play
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={buttonStyle}
          onClick={() => setIsPaused(isPaused ? false : true)}
        >
          pause
        </Button>
      </div>
    </div>
  );
}
