
import {useState, useEffect} from "react";
import axios from "axios";

import Info from "./Info";


const Data = () => {

    const [countries, setCountries] = useState([]);
    const [filterWord, setFilterWord] = useState("");
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then(response => {
                    const cs = response.data
                    setCountries(cs);
                    setFilteredCountries(countries)
                }
            )
    }, [])

    useEffect( () => {
        if (filteredCountries.length === 1) {
            const country = filteredCountries[0]
            const lat = country["latlng"][0]
            const lon = country["latlng"][1]
            const apiKey = process.env.REACT_APP_API_KEY
            const url = "https://api.openweathermap.org/data/2.5/weather?" + "lat=" + lat +
                "&lon=" + lon + "&appid=" + apiKey;
            axios
                .get(url)
                .then(response => {
                    const wd = response.data
                    const iconToken = wd["weather"][0]["icon"]
                    wd["icon"] = "http://openweathermap.org/img/w/" + iconToken + ".png"
                    setWeatherData(wd)
                })
        }
    }, [filterWord])

    useEffect(() => {
        const fCountries = countries.filter((el) => {
            return el["name"]["official"].toLowerCase()
                .includes(filterWord.toLowerCase())
        })
        setFilteredCountries(fCountries)
    }, [filterWord])

    const handleFilterChange = (event) => {
        setFilterWord(event.target.value)
    }

    const result = (
        <div>
            find countries <input value={filterWord} onChange={handleFilterChange}/>
        </div>);

    return (
        <div>
            {result}
            <ul>
                <Info filteredCountries={filteredCountries} setFilterWord={setFilterWord} weatherData={weatherData}/>
            </ul>
        </div>
    );
}

export default Data;