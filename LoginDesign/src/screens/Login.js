import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import LoginChild from '../commonComponents/LoginChild'
import Colors from '../config/Colors'
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
        backgroundColor: Colors.navyBlue,
        justifyContent:'flex-end',
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:30,
        marginBottom:30,
        marginLeft:20,
        color:Colors.white
    }
})
export default LoginDesign;