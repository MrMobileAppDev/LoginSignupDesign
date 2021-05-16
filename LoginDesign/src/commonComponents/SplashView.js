import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Animated, Text,TouchableOpacity } from 'react-native'
const SplashView = ({navigation}) => {
    const [animatedValue, setAnimatedValue] = useState(new Animated.Value(600))
    useEffect(() => {
        Animated.spring(
            animatedValue,
            {
                toValue: 1,
                velocity: 10,
                tension: 2,
                friction: 8,
                useNativeDriver: true
            }
        ).start()
    }, [])
    return (
        <Animated.View style={[styles.mainView, {
            transform: [
                {
                    translateY: animatedValue
                }
            ]
        }
        ]}>
            <Text style={styles.titleStyle}>Stay Connected with everyone!</Text>
            <Text style={styles.subTitleStyle}>Sign In with account!</Text>
            <View style={{alignItems:'flex-end'}}>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.textStyle}>Get Started {`${'>'}`}</Text>
            </TouchableOpacity>
            </View>
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        backgroundColor: '#ffff',
        borderRadius: 30,
        width: '100%',
        flex: 0.6,
    },
    titleStyle:{
        fontSize:30,
        fontWeight:'bold',
        marginTop:50,
        marginLeft:30,
        width:'80%',
        color:'rgba(0,43,66,0.8)'
    },
    subTitleStyle:{
        fontSize:15,
        marginTop:10,
        marginLeft:30,
        color:'rgba(0,0,0,0.5)'
    },
    buttonStyle: {
        backgroundColor: '#009adc',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius:10,
        width:'40%',
        marginRight:20,
        marginTop:50
    },
    textStyle:{
        fontWeight:'600',
        fontSize:15,
        color:'white'
    },

})
export default SplashView;