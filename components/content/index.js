import React from "react";
import { View } from "react-360";
import { HomeEnvironment, MusicEnvironment } from "../../scenes";
import { withAppContext } from "../../providers";

const AppContent = withAppContext(() => (
   <View>
        <HomeEnvironment />
        <MusicEnvironment />
   </View>
));

export default AppContent;