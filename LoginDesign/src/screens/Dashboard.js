import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Colors from '../config/Colors'
const Dashboard = ({navigation}) => {
    return (
        <View style={styles.mainView}>
            <Text style={styles.textStyle}>Welcome!</Text>
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
export default Dashboard;