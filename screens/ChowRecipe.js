import React from 'react';
import { StyleSheet, View, Text } from 'react-native'

const ChowRecipe = () => {
    return (
        <View style={styles.screen}>
            <Text>This is the recipe</Text>
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

export default ChowRecipe;
