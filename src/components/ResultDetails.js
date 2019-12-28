import React from 'react';
import {StyleSheet,Image, Text, View} from 'react-native';


const ResultDetails=({result}) =>
{
    return(
        <View style={styles.constainer}>
            <Image source={{uri: result.image_url}} style={styles.imageStyle} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
           
        </View>
    )
}

const styles = StyleSheet.create({
    constainer:{
        marginLeft: 15
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold"
    },
    imageStyle: {
        width: 200,
        height: 120,
        borderRadius: 5,
        marginBottom: 5
    },
    nameStyle:{
        fontSize: 15,
        fontWeight: "bold"
    }
})


export default ResultDetails;