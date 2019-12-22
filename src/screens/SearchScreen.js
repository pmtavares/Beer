import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen =() =>
{
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async () =>
    {
        try{
            await yelp.get('/search', {
                params:{
                    limit:50,
                    term: term,
                    location: 'nyc'
                }
            }).then((response)=>{
                setResults(response.data.businesses)
            })                
            .catch((error) => {console.log("Error here: " + error)});
            
        }
        catch(e)
        {
            console.log(e);
        }
        
        
    }

    return(
        <View>
            <SearchBar 
                    term={term} 
                    onTermChange={(newTerm) => setTerm(newTerm) }
                    onTermSubmit={()=>searchApi()}/>
            <Text>We have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})


export default SearchScreen;