import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer iH9yQ0jgXjSPZNhryQinx1k3UXdls0Bdub_F2WVtWHXrNH3ZroD-5-Mh_HOAIMtCCQRoh5FvYrjRQkRqSM-yq3KFL7qFVruuJV6SF3E5Q5xBZSkaFU2a24qFR7b_XXYx'
    }
});