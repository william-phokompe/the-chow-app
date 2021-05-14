import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

const DefaultText = (props) => {
    return (
        <Text>
            {props.children}
        </Text>
    );
}


const styles = StyleSheet.create({
    text: {
        fontFamily: 'bebas-neue-reg'
    }
})

export default DefaultText;
