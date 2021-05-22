import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import SplashView from '../commonComponents/SplashView'
import * as Animatable from 'react-native-animatable'
import Colors from '../config/Colors'
const Splash = ({ navigation }) => {
    return (
        <View style={styles.mainView}>
            <Text style={styles.textStyle}></Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Animatable.Image
                    animation='bounceIn'
                    duration={5000}
                    source={require('../assets/appLogo.png')}
                    style={styles.imageView}
                    resizeMode='contain'
                />
            </View>
            <SplashView navigation={navigation} />
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: Colors.navyBlue,
        justifyContent: 'space-between',
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 30,
        marginLeft: 20,
        color: Colors.white
    },
    imageView: {
        width: 300,
        height: 300,
        borderRadius: 400 / 2,
        borderWidth: 3,
        borderColor: 'white'
    }
})
export default Splash;
