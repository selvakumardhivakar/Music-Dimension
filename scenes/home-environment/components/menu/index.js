import React from "react";
import { hideIf, usingAppContext } from "../../../../providers";
import { compose } from "recompose";
import { View } from "react-360";
import style from "./style";

const hideMenu = hideIf(({ selectedZen }) => selectedZen !== 8);

export default compose(
    usingAppContext,
    hideMenu,
)(({ selectedZen, children }) => {
    Object.keys(children).forEach(function(key,index) {
        // console.log("HI"+key.props); 
    });

    // console.log("child" + selectedZen);
    return (
        <View style={style.view}>
            {children}
        </View>
    )
});