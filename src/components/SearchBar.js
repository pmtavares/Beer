import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Feather } from '@expo/vector-icons';

const SearchBar=({term, onTermChange, onTermSubmit}) =>
{
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput placeholder="Search" autoCapitalize='none' autoCorrect={false}
                        onEndEditing={() => onTermSubmit()}
                        style={styles.inputStyle} value={term} 
                        onChangeText={(newTerm) => onTermChange(newTerm)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 40,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle:
    {
        borderColor: 'black',
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})


export default SearchBar;