import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Feed extends Component {
    render() {
        return (
            <View>
                <Text>
                    Mateus
                </Text>

                <Image source={require('../../resources/img/alura.png')} 
                    style={{width: width, height:width}} />
            </View>
        );
    }
}