import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TextInput, ActivityIndicator } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../config/Colors'
const CommonTextInput = (props) => {

    const [eyeOff, setEyeOff] = useState(true)
    const [emailValid, setEmailValid] = useState(false)
    const onEyeClick = () => {
        setEyeOff(!eyeOff)
    }
    const onTextChange = (value) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
        setEmailValid(reg.test(value) ? true : false)
    }
    const loginPress = ()=>{
        props.onLogin()
    }
    return (
        <View>
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.emailText}>Email</Text>
                <View style={styles.textInputView}>
                    <FontAwesome
                        name='user-o'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Email'
                        style={styles.inputStyle}
                        onChangeText={(val) => onTextChange(val)}
                    />
                    <View style={{ marginRight: 20 }}>
                        {
                            emailValid &&
                            <Feather
                                name='check-circle'
                                color="green"
                                size={20}
                            />
                        }

                    </View>
                </View>
                <View style={styles.separatorLine} />
            </View>
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.emailText}>Password</Text>
                <View style={styles.textInputView}>
                    <FontAwesome
                        name='lock'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Password'
                        style={styles.inputStyle}
                        secureTextEntry={eyeOff}
                    />
                    <View style={{ marginRight: 20 }}>
                        <TouchableOpacity onPress={onEyeClick}>
                            <Feather
                                name={eyeOff ? 'eye-off' : 'eye'}
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.separatorLine} />
                <TouchableOpacity>
                    <Text style={styles.forgotStyle}>Forgot Password ?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => loginPress()} >
                <Text style={styles.textStyle}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyleSignUp} onPress={() => props.navigation.navigate('SignUp')}>
                <Text style={styles.textStyleSignUp}>Sign Up</Text>
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    textInputView: {
        marginLeft: 20,
        marginTop: 10,
        flexDirection: 'row',
    },
    inputStyle: {
        paddingLeft: 10,
        color: '#05375a',
        flex: 1,

    },
    emailText: {
        fontSize: 15,
        marginTop: 30,
        marginLeft: 20,
        color: '#000'
    },
    separatorLine: {
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },
    buttonStyle: {
        backgroundColor: Colors.blueButton,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 15,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 70
    },
    buttonStyleSignUp: {
        borderWidth: 1,
        borderColor: Colors.blueButton,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 15,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20
    },
    textStyle: {
        fontWeight: '600',
        fontSize: 20,
        color: 'white'
    },
    textStyleSignUp: {
        fontWeight: '600',
        fontSize: 20,
        color: Colors.blueButton
    },
    forgotStyle: {
        marginTop: 10,
        marginLeft: 20,
        color: Colors.navyBlue
    }
})
export default CommonTextInput