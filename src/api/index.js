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