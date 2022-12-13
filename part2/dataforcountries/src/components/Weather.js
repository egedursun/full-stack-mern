const Weather = ({weatherData}) => {

    const KELVIN = 273.15

    let temp = "Not Found"
    let speed = "Not Found"

    if (weatherData !== undefined){

        if(weatherData.hasOwnProperty("main")){
            temp = weatherData["main"]["temp"]
        }

        if(weatherData.hasOwnProperty("wind")){
            speed = weatherData["wind"]["speed"]
        }

        return (
            <div>
                <h2>Weather in {weatherData["name"]}</h2>
                <p>temperature {Math.round((temp - KELVIN) * 100) / 100} Celcius</p>
                <img src={weatherData["icon"]} width="90px" height="90px" alt="weather-icon"/>
                <p>wind {speed}</p>
            </div>
        );
    }
    else{
        return (
            <>
                <p>No Weather Data could have been retrieved.</p>
            </>
        );
    }
}

export default Weather