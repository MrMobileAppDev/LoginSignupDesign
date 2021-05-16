import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import LoginChild from '../commonComponents/LoginChild'
const LoginDesign = ({navigation}) => {
    
    return (
        <View style={styles.mainView}>
            <Text style={styles.textStyle}>Welcome!</Text>
            <LoginChild navigation={navigation} />
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#0063a0',
        justifyContent:'flex-end',
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:30,
        marginBottom:30,
        marginLeft:20,
        color:'#ffff'
    }
})
export default LoginDesign;