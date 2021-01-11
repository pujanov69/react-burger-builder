import React from "react";

import classes from "./BuildControl.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Chhese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => <div className={classes.BuildControls}>
    {controls.map(ctrl => )}
</div>;

export default buildControls;
