import React from "react";
import { View, Image, asset } from "react-360";
import { BaseButton } from "../../../../components";
import { usingAppContext } from "../../../../providers";
import { musics } from "../../../../consts";
import style from "./style";
// import ContinuousSlider from './volume' ;

export default usingAppContext(({ selectedZen, zenClicked }) => {
  return (  
    <View style={style.view}>
      <View>
      <BaseButton
          selectedZen={selectedZen}
          buttonClick={() => {
            zenClicked(8);
          }}
          text={musics[7].text}
          textStyle={style.text}
        />
      </View>
      <View style={{ padding: 20 }}>
        <BaseButton
          selectedZen={selectedZen}
          buttonClick={() => {
            zenClicked(9);
          }}
          text={"STOP"}
          textStyle={style.text}
        />
      </View>
      <View style={{ padding: 20 }}>
        <BaseButton 
          selectedZen={selectedZen}
          buttonClick={() => {
            zenClicked(selectedZen);
          }}
          text={"PLAY"}
          textStyle={style.text}
        />
      </View>
      {/* <View>
        <ContinuousSlider />
      </View> */}
    </View>
  )
});