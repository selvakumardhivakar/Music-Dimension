import React from "react";
import { withState, withHandlers, compose } from "recompose";
import { Environment, asset, NativeModules } from "react-360";
const { AudioModule } = NativeModules;
import { musics } from "../consts";

const withStateAndHandlers = compose(
    withState("selectedZen", "zenClicked", 8),
    withHandlers({
        zenClicked: (props) => (id, evt, text) => {
            if (id==9 ) {
                AudioModule.stopEnvironmental();
            }
            else{
            Environment.setBackgroundImage(asset(musics[id - 1].image));
            if (musics[id - 1].audio !== null && musics[id - 1].audio !== undefined) {
                AudioModule.playEnvironmental({
                    source: asset(musics[id - 1].audio),
                });
            } else {
                AudioModule.stopEnvironmental();
            }
            props.zenClicked(selectedZen => id);
        }
        }
    }),
)

export default withStateAndHandlers;