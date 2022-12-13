
import Country from "./Country"
import Languages from "./Languages";
import Weather from "./Weather";

const Info = ({filteredCountries, setFilterWord, weatherData}) => {
    if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
        return (
            <div>
                <span>
                    {filteredCountries.map((country) =>
                        <Country key={filteredCountries.indexOf(country)} country={country} setFilterWord={setFilterWord}/>
                    )}
                </span>
            </div>
        )
    }
    else if(filteredCountries.length > 10) {
        return (<p>Too many matches, specify another filter</p>)
    }
    else if(filteredCountries.length === 1) {
        const country = filteredCountries[0]
        return (
            <div>
                <h2>{country["name"]["official"]}</h2>
                <p>capital {country["capital"]}</p>
                <p>area {country["area"]}</p>
                <p><strong>languages:</strong></p>
                <ul>
                    <Languages languages={country["languages"]}/>
                </ul>
                <div>
                    <img src={country["flags"]["png"]} alt="country-flag" width="180px" height="120px"/>
                </div>
                <Weather weatherData={weatherData} />
            </div>
        );
    }
}

export default Info;