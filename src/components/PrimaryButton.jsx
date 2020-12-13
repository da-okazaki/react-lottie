import React, { useState } from "react";
import { Button } from "@material-ui/core";

const PrimaryButton = ({ onClick }) => {
  return {
    <Button
      variant="contained"
      color="primary"
      style={buttonStyle}
      onClick={() => {onClick}}
    >
      test
    </Button>
  };
};
export default PrimaryButton;
