import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'


const Meals = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Hello from meals</Text>
            <Button title='show recipe' onPress={_ => {
                props.navigation.navigate('Recipe')
            }}/>
            <Button title="go back" onPress={_ => {
                props.navigation.goBack();
            }} />
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
