import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 30

    },

    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#333333',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },

    text: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        lineHeight: 35,
    },
    formInput: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#333333',
        color: '#FFF',
        fontSize: 20,
        height: 40,
        borderRadius: 5,
        margin: 20,
        paddingLeft: 10

    },
    formText: {
        marginLeft: 20,
        fontWeight: 'bold',
    },
    formInputMemo: {
        height: 100,
        textAlignVertical: 'top',
        padding: 5,

    },
    formButton: {
        width: '90%',
        backgroundColor: '#333333',
        color: '#FFF',
        fontSize: 20,
        height: 60,
        borderRadius: 10,
        margin: 20,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formButtonText: {
        color: '#EEE',
        fontWeight: 'bold',
        fontSize: 30
    }
});