import React from "react";
import ReactLottie from "react-lottie";
import * as animationData from "../assets/lottiefiles-logo.json";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const useStyles = makeStyles(() =>
  createStyles({
    lottieStyle: {
      display: "flex",
      width: "300px",
      height: "300px",
      justifyContent: "center",
      alignItems: "center"
    }
  })
);

const Lottie = ({ isStopped, isPaused }) => {
  const classes = useStyles();
  return (
    <>
      {isStopped ? (
        <h3 className={classes.lottieStyle}>Stopped</h3>
      ) : (
        <ReactLottie
          options={defaultOptions}
          height="100%"
          width="100%"
          isStopped={isStopped}
          isPaused={isPaused}
        />
      )}
    </>
  );
};
export default Lottie;
