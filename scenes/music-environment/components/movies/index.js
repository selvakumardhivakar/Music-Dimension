import React from "react";
import { Text } from "react-360";
import { musics } from "../../../../consts";
import { hideIfHome, usingAppContext } from "../../../../providers";
import { compose } from "recompose";
import style from "./style";

export default compose(
    usingAppContext,
    hideIfHome,
)(({ selectedZen }) => {
    const text = musics[selectedZen - 1].movie;
    return (
        <Text style={style.text}>
            { text }
        </Text>
    )
});