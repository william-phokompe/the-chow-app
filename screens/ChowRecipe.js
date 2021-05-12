import React from 'react';
import { StyleSheet, View, Text } from 'react-native'

import {MEALS} from '../data/mock-data';

const ChowRecipe = (props) => {
    const chowId = props.navigation.getParam("chowId");

    const selectedChow = MEALS.find(meal => meal.id === chowId)

    return (
        <View style={styles.screen}>
            <Text>{selectedChow.title}</Text>
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
