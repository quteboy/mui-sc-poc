import React, { Children, useState,PropType } from "react";

import Button from "@mui/material/Button";

const MyButton = ({label,type,onClick}) => {
  const [name, setMyname] = useState();
  const HandleClick = () => {
    // Do Something
    setMyname("");
  };
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        disableElevation
        disableRipple
        onClick={HandleClick}
        name={name}
      >
       
      </Button>
    </div>
  );
};
// MyButton.PropType={
    
// }
export default MyButton;
