import React from 'react'
import {
    Avatar,
    Text,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SetttingIcon from 'react-native-vector-icons/Feather'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { View, SafeAreaView, StyleSheet,ActivityIndicator, Modal } from 'react-native'
import Colors from '../config/Colors'
import { useState } from 'react'
import { useEffect } from 'react'
export function DrawerContent(props) {
    console.log(props.navigation)
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const onTogglePress=()=>{
        setIsDarkTheme(!isDarkTheme)
    }
   
    return (
        <View style={{ flex: 1 }}>
            
            <DrawerContentScrollView {...props}>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.profileIcon}>
                            <Avatar.Image source={require('../assets/appLogo.png')}
                                size={90}
                            />
                        </View >
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.profileName}>Vaibhav Sadana</Text>
                            <Text style={styles.profileUserName}>@vs_mobiledev</Text>
                        </View>
                    </View>
                    <View style={styles.followView}>
                        <View style={styles.paragraphView}>
                            <Paragraph style={styles.paragraphText}>80</Paragraph>
                            <Caption style={styles.captionText}>Followers</Caption>
                        </View>
                        <View style={styles.paragraphView}>
                            <Paragraph style={styles.paragraphText}>100</Paragraph>
                            <Caption style={styles.captionText}>Following</Caption>
                        </View>
                    </View>
                    <Drawer.Section>
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon name="home-outline" color={color} size={size} />
                            )}
                            label="Home"
                            onPress={() => {{props.navigation.navigate('Dashboard') } }}
                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon name="account-outline" color={color} size={size} />
                            )}
                            label="Profile"
                            onPress={() => { }}
                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon name="bookmark-outline" color={color} size={size} />
                            )}
                            label="Bookmarks"
                            onPress={() => { }}
                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <SetttingIcon name="settings" color={color} size={size} />
                            )}
                            label="Setting"
                            onPress={() => {props.navigation.navigate('Settings') }}
                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon name="account-check-outline" color={color} size={size} />
                            )}
                            label="Support"
                            onPress={() => { }}
                        />
                    </Drawer.Section>
                    <Drawer.Section title='Prefrences'>
                        <TouchableRipple>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginBottom:20 }}>
                                <Text style={{ fontWeight: '700', fontSize: 15, marginLeft: 15 }}>Dark Theme</Text>
                                <Switch style={{ marginRight: 15 }} value={isDarkTheme} onValueChange={onTogglePress}/>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>

            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomSection}>
                <Drawer.Item
                    icon={({ color, size }) => (
                        <Icon name="exit-to-app" color={color} size={size} />
                    )}
                    label="Sign Out"
                    onPress={() => { 
                        props.navigation.navigate('Login')
                    }}
                />
            </Drawer.Section>
        </View>
    )
}
const styles = StyleSheet.create({
    bottomSection: {
        marginBottom: 25,
        borderTopColor: Colors.borderColor,
        borderTopWidth: 1,
    },
    profileIcon: {
        marginLeft: 10,
        alignItems: 'flex-start'
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10,
        color: Colors.blackO
    },
    profileUserName: {
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 10,
        marginTop: 5,
        color: Colors.black1
    },
    followView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    paragraphView: {
        flexDirection: 'row',
        marginTop: 10
    },
    paragraphText: {
        fontSize: 15,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    captionText: {
        fontSize: 15,
        marginLeft: 5
    }
})