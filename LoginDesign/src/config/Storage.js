import AsyncStorage from '@react-native-async-storage/async-storage'


export const readData = async (key) => {
    const result = await AsyncStorage.getItem(key)
    try {
        if (result != null) {
            return result
        }
        else {
            return ""
        }
    }
    catch (e) {
        console.log(e)
    }
}

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log(error);
    }
    console.log('  done.');
};