import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Animated, Text } from 'react-native'
import Colors from '../config/Colors'
import CommonSignup from './CommonSignUp'
const SignupChild = ({navigation}) => {
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
            <CommonSignup navigation={navigation}/>
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        backgroundColor: Colors.white,
        borderRadius: 30,
        width: '100%',
        flex: 0.7,
    },


})
export default SignupChild;