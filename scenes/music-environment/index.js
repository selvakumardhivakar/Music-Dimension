import React from "react";
import { View } from "react-360";
import { Movies, HomeButton } from "./components";

const MusicEnvironment = () => (
    <View style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "orange",
        transform: [{ translate: [250, 0, -100] }],
        marginTop: 200,
    }}>
        <HomeButton />
        <Movies />
    </View>
);

export default MusicEnvironment;