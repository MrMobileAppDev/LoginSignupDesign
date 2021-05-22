import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Colors from '../config/Colors'
const Settings = ({navigation}) => {
    return (
        <View style={styles.mainView}>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent:'flex-end',
    }
})
export default Settings;