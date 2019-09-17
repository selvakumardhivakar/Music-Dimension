import React from "react";
import hideIf from "./hideIf";

const hideIfHome = hideIf((props) => props.selectedZen === 8);

export default hideIfHome;