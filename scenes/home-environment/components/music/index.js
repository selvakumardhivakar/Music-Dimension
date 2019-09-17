import React from "react";
import ZenButton from "../zen-button";
import { usingAppContext } from "../../../../providers";
import { musics } from "../../../../consts";
import { compose } from "recompose";
import { View } from "react-360";

export default compose(
    usingAppContext
)(({ zenClicked }) => {
    return (
        <View >
            {
                musics.map((music) => (
                    <ZenButton
                        selectedZen={music.id}
                        key={music.id}
                        buttonClick={() => {
                            zenClicked(music.id);
                        }}
                        text={music.text}
                    />
                ))
            }
        </View>
    )
})