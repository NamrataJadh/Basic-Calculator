import React from "react";
// import Input from './Input'
// import Button from './Buttons'
import Weekdays from "./Weekdays";
import Weekend from "./Weekend";

const Parent = (props) => {
 
function getDaYfn(data){
    console.log(data);
    console.log('entered')
}

  if (props.day >= 1 && props.day <= 5) {
    return <Weekdays  getDay={getDaYfn} />;
  } else {
    return <Weekend />;
  }
};

export default Parent;
