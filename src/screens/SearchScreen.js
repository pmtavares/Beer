import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen =() =>
{
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

     const filterResultsByPrice = (price) =>{
        //Price $ // $$ // $$$
        return results.filter(result => {
            return result.price === price
        });
     }


    return(
        <View>
            <SearchBar 
                    term={term} 
                    onTermChange={(newTerm) => setTerm(newTerm) }
                    onTermSubmit={()=>searchApi(term)}/>
            <Text>We have found {results.length} results</Text>
            { errorMessage? <Text>{errorMessage}</Text> : null}

            <ResultsList title="Cost Effective" results={filterResultsByPrice('$')}/>
            <ResultsList title="Big Price" results={filterResultsByPrice('$$')}/>
            <ResultsList title="Big Spendier" results={filterResultsByPrice('$$$')}/>
        </View>
    )
}

const styles = StyleSheet.create({

})


export default SearchScreen;