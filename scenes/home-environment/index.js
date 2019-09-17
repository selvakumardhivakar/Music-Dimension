import React from "react";
import { View } from "react-360";
import { Title, Menu, Music } from "./components";

const HomeEnvironment = () => (
    <View>
        <Menu>
            {/* <Title /> */}
            <Music />
        </Menu> 
    </View>
);

export default HomeEnvironment;