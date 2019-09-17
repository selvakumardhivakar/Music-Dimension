import React from "react";
import { View, Text } from "react-360";
import style from "./style";

const Title = (props) => {
    return (
        <View style={style.view}>
            <Text style={style.text}>
                Music Speaks!
            </Text>
        </View>
    )
}

export default Title;