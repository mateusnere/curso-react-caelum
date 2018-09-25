import React, {Component} from 'react';
import {
    Dimensions,
    View,
    TextInput,
    StyleSheet,
    Button,
    Text,
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            usuario: '',
            senha: '',
        }
    }

    efetuaLogin = () => {
        const uri = 'https://instalura-api.herokuapp.com/api/public/login';

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({
                login: this.state.usuario,
                senha: this.state.senha
            }),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        }

        fetch(uri, requestInfo).then(response => {
            if(response.ok) {
                return response.text();
            } else {
                throw new Error('Não foi possível efetuar login');
            }
        }).then(token => console.warn(token));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Instalura</Text>
                <View style={styles.form}>
                    <TextInput 
                        autoCapitalize='none'
                        style={styles.input}
                        placeholder="Usuário..."
                        onChangeText={texto => this.setState({usuario: texto})} />
                    
                    <TextInput 
                        autoCapitalize='none'
                        secureTextEntry={true}
                        style={styles.input}
                        placeholder="Senha..."
                        onChangeText={texto => this.setState({senha: texto})} />

                    <Button title='Login' onPress={this.efetuaLogin} />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: width * 0.8
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 26,
    }
})