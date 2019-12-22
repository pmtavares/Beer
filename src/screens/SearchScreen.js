import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';


const SearchScreen =() =>
{
    return(
        <View>
            <SearchBar />
            <Text>Search </Text>

        </View>
    )
}

const styles = StyleSheet.create({

})


export default SearchScreen;