import React, {Component} from 'react';
import {FlatList, Dimensions, StyleSheet} from 'react-native';
import Post from './Post';

export default class Feed extends Component {
    render() {
        const fotos = [
            {id: 1, usuario: 'Rafael'},
            {id: 2, usuario: 'Alberto'},
            {id: 3, usuario: 'Vitor'}
        ]
        return (
            <FlatList style = {styles.container}
                data = {fotos}
                keyExtractor = {item => String(item.id)} 
                renderItem = { ({item}) => 
                    <Post foto={item}/>
                }
            />
                
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
      },
});