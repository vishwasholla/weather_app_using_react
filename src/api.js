
export const GeoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'API_KEY',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
//fetch above code from rapidapi.com
//get free geolocation api key @ rapidapi.com
//get free weather api key from api.openweathermap.org
export const GRO_API_URL = "GEO API URL"

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/";
export const WEATHER_API_KEY = 'WEATHER_API_KEY';

// try {
//     const response = fetch('/cities', GeoApiOptions)
//     const result = await response.text();
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }