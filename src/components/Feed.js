import React, {Component} from 'react';
import {View, FlatList, Text, Image, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Feed extends Component {
    render() {
        const fotos = [
            {id: 1, usuario: 'Rafael'},
            {id: 2, usuario: 'Alberto'},
            {id: 3, usuario: 'Vitor'}
        ]
        return (
            <FlatList style = {{marginTop: 20}}
                keyExtractor = {item => item.id} 
                data = {fotos}
                renderItem = { ({item}) => 
                    <View>
                        <Text>{item.usuario}</Text>
                        <Image source = {require('../../resources/img/alura.png')}
                            style = {{width: width, height: width}} />
                    </View>
                }
            />
                
        );
    }
}