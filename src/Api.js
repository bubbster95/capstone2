import axios from "axios";

const BASE_URL = 'https://www.dnd5eapi.co/api/'

// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772
// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
class API {

    static async getResults(param, search) {
        let result
        console.log(param, `${BASE_URL}/search.php?s=${search}`)
        if (param === 'names') {
            result = await axios.get(`${BASE_URL}/${search}`);
            // result = await axios.get("https://baconipsum.com/api/?type=meat-and-filler")
            console.log('names', result)
        } else if (param === 'id') {
            result = await axios.get(`${BASE_URL}/lookup.php?i=${search}`);
        } else {
            result = await axios.get(`${BASE_URL}/filter.php?c=${search}`);
        }
        console.log(result)
    return result.data;
    }

}

export default API;
