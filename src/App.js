import React, { useState } from "react";
import "./styles.css";

import Lottie from "./components/Lottie";
import PrimaryButton from "./components/PrimaryButton";

export default function App() {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="AppStyle">
      <Lottie isStopped={isStopped} isPaused={isPaused} />

      <div className="inlineBlock">
        <PrimaryButton
          label="stop"
          color="primary"
          onClick={() => setIsStopped(true)}
        />

        <PrimaryButton
          label="play"
          color="primary"
          onClick={() => {
            setIsStopped(false);
            setIsPaused(false);
          }}
        />

        <PrimaryButton
          label="pause"
          color="primary"
          onClick={() => setIsPaused(isPaused ? false : true)}
        />
      </div>
    </div>
  );
}
