import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import ResultDetails from './ResultDetails';
import {withNavigation} from 'react-navigation';

const ResultsList =({title, results, navigation}) =>
{
    if(!results.length)
    {
        return null;
    }
    return(
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList horizontal data={results} keyExtractor={result=>result.id }
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate('ResultsShow', {id: item.id})}>
                            <ResultDetails result={item} />
                        </TouchableOpacity>
                        
                    )
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    container:
    {
        marginBottom: 10
    }
})


export default withNavigation(ResultsList);