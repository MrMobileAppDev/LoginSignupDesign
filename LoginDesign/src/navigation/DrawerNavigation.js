import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../screens/Dashboard'
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../config/Colors';
import Icon from 'react-native-vector-icons/Ionicons'
import Settings from '../screens/Settings'
import { DrawerContent } from '../navigation/DrawerContent'
const HomeDrawer = ({ navigation }) => {
    const HomeStack = createStackNavigator()
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Colors.navyBlue,
                shadowColor: 'transparent',
                elevation: 0
            },
            headerTintColor: Colors.white,
            headerLeft: () => (
                <Icon
                    name='ios-menu'
                    size={25}
                    color={Colors.white}
                    style={{
                        marginLeft: 10
                    }}
                    onPress={() =>
                        navigation.openDrawer()
                    } />)
        }}>
            <HomeStack.Screen name='Dashboard' component={Dashboard} />
        </HomeStack.Navigator>
    )
}
const SettingDrawer = ({ navigation }) => {
    const HomeStack = createStackNavigator()
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.navyBlue,
                    shadowColor: 'transparent',
                    elevation: 0
                },
                headerTintColor: Colors.white,
                headerLeft: () => (
                    <Icon
                        name='ios-menu'
                        size={25}
                        color={Colors.white}
                        style={{
                            marginLeft: 10
                        }}
                        onPress={() =>
                            navigation.openDrawer()
                        } />)
            }}>
            <HomeStack.Screen name='Settings' component={Settings} />
        </HomeStack.Navigator>
    )
}

const DrawerScreen = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} >
            <Drawer.Screen name='Home' component={HomeDrawer} />
            <Drawer.Screen name='Settings' component={SettingDrawer} />
        </Drawer.Navigator>
    )
}
export default DrawerScreen;