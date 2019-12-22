import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Feather } from '@expo/vector-icons';

const SearchBar=() =>
{
    return(
        <View style={styles.background}>
            <Feather name="search" size={30}/>
            <Text>Search Bar </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 40,
        borderRadius: 5,
        marginHorizontal: 15 
    }
})


export default SearchBar;