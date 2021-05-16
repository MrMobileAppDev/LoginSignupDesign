import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SignUpChild from '../commonComponents/SignupChild'
const SignUp = ({navigation}) => {
    return (
        <View style={styles.mainView}>
            <Text style={styles.textStyle}>Welcome to Sign Up!</Text>
            <SignUpChild  navigation={navigation}/>
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
export default SignUp;