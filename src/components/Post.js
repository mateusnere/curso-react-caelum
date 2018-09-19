import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: this.props.foto
        }
    }

    carregaIcone(likeada) {
        return likeada ? require('../../resources/img/s2-checked.png') : 
        require('../../resources/img/s2-checked.png');
    }

    

    render() {

        const { foto } = this.state;

        return(
            
            <View>
                <View style={styles.cabecalho}>
                    <Image source = {{uri: foto.urlPerfil}}
                        style = {styles.fotoDePerfil} />
                    <Text>{foto.loginUsuario}</Text>
                </View>
                <Image source = {{uri: foto.urlFoto}}
                        style = {styles.foto} />
                <View style={styles.rodape}>
                    <TouchableOpacity onPress={() => console.warn('Botao funcionando!')}>
                        <Image style={styles.botaoDeLike} 
                            source={require('../../resources/img/s2.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    fotoDePerfil: {
        marginRight: 10,
        borderRadius: 20,
        width: 40,
        height: 40,
    },
    foto: {
        width: width,
        height: width,
    },
    rodape: {
        margin: 10,
    },
    botaoDeLike: {
        height: 40,
        width: 40,
    },
});