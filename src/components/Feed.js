import React, {Component} from 'react';
import {FlatList, Dimensions, StyleSheet} from 'react-native';
import Post from './Post';

export default class Feed extends Component {

    constructor() {
        super();
        this.state = {
            fotos: []
        }
    }

    async apiFetch() {
        const resposta = await fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael');
        const json = await resposta.json();
        this.setState({fotos: json});
    }

    componentDidMount() {
        /*fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
        .then(resposta => resposta.json())
        .then(json => this.setState({fotos: json}));*/

        this.apiFetch();
    }

    render() {
        return (
            <FlatList style = {styles.container}
                data = {this.state.fotos}
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