import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import Splash from '../screens/Splash'
import DrawerScreen from '../navigation/DrawerNavigation'
import Colors from '../config/Colors'
const Routes = () => {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
            }}>
                <Stack.Screen
                    name='Splash'
                    component={Splash}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen name='Login' component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name='SignUp' component={SignUp}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name='DrawerScreen' component={DrawerScreen} options={{
                        headerShown: false
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes