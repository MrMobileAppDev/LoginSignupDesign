import React from 'react'
import { View, StyleSheet, Text,ActivityIndicator } from 'react-native'
import { useState,useEffect } from 'react/cjs/react.development'
import LoginChild from '../commonComponents/LoginChild'
import Colors from '../config/Colors'
const LoginDesign = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            navigation.navigate('DrawerScreen')
        }, 1000);
    }, [isLoading])

    const onSuccess = ()=>{
        setIsLoading(true)
    }
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' />
            </View>
        )
    }
    return (
        <View style={styles.mainView}>
            <Text style={styles.textStyle}>Welcome!</Text>
            <LoginChild navigation={navigation} onLogin={()=>onSuccess()}/>
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