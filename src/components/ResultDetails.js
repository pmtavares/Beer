import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const ResultDetails=({result}) =>
{
    return(
        <View>
            <Text style={styles.titleStyle}>{result.name}</Text>
           
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold"
    }
})


export default ResultDetails;