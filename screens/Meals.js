import React from 'react';
import { StyleSheet, View, Text } from 'react-native'

const Meals = () => {
    return (
        <View style={styles.screen}>
            <Text>Hello from meals</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Meals;
