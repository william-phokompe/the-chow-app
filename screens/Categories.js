import React from 'react';
import { StyleSheet, FlatList } from 'react-native'

const Categories = (props) => {
    console.log(props)
    return (
        <FlatList numColumns={2} />
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Categories;
