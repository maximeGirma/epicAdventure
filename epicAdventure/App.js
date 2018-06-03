

import React, { Component } from 'react';

import GameScreen from "./GameScreen";
import {View} from "react-native";

export default class App extends Component<Props> {




    render() {
        return(
            <View style={{flex : 1}}>
                <GameScreen/>
            </View>
        )
    }
}
