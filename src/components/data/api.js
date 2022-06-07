import Requests from "./requests";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

class RestApi {
    getByName(query) {
        const url = `${BASE_URL}/search.php?s=${query}`;
        return Requests.get(url);
    }

    getCategoryFilters() {
        const url = `${BASE_URL}/list.php?c=list`;
        return Requests.get(url);
    }

    getGlassFilters() {
        const url = `${BASE_URL}/list.php?g=list`;
        return Requests.get(url);
    }

    getIngredientFilters() {
        const url = `${BASE_URL}/list.php?i=list`;
        return Requests.get(url);
    }
}

export default new RestApi();