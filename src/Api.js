import axios from "axios";

const BASE_URL = 'https://www.dnd5eapi.co/api/'

class API {
    static async getResults(search) {
        let result = await axios.get(`${BASE_URL}/spells/${search}`);
        return result.data;
    }

}

export default API;
