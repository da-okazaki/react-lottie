import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    buttonStyle: {
      display: "inline-block",
      margin: "10px auto"
    }
  })
);

const PrimaryButton = ({ label, color, onClick }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.buttonStyle}
      variant="contained"
      color={color}
      onClick={() => onClick()}
    >
      {label}
    </Button>
  );
};
export default PrimaryButton;
