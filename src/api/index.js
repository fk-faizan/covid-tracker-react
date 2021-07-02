import axios from 'axios';
const url = "https://api.covidtracking.com/v1/states/current.json";
const url2 = "https://restcountries.eu/rest/v2/all";

export function fetchData(dispatch) {
    axios.get(url)
        .then((response) => {
            const covidData = response.data
            dispatch({
                type: "COVID19DATA",
                data: covidData
            })
        })
        .catch((error) => {
            console.error("Error: ", error)
        })
}

export const fetchCountries = async () => {
    try {
        const {
            data: { countries },
        } = await axios.get(url2);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
};