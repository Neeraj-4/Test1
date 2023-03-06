import axios from 'axios';

const URL = '';

export const Authantication = async(data)=>{
try {
     return await axios.post(`${URL}/wish`,data)
} catch (error) {
    console.log('Error on callling API',error);
}
}
