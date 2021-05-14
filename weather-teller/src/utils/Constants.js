//Services.js
export const API_KEY = 'd085513cc47eea52f7fcec12f5e02193'
export const CURRENT_WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather?units=metric'
export const FORECAST_WEATHER_API = 'http://api.openweathermap.org/data/2.5/onecall?units=metric&exclude=minutely,hourly,alerts,current'
export const CITY_COORDINATES_API = 'http://api.openweathermap.org/geo/1.0/direct?limit=1'

//Layout.js
export const APP_TITLE = 'WeatherTeller'
export const APP_FOOTER = '© 2021 The WeatherTeller. All rights reserved.'

//WeatherPage.js
//Fetch
export const ERROR_TITLE_FETCH = 'Fetch Failed'
export const ERROR_MSG_FETCH_CURRENT = 'Error fetching the Current Weather'
export const ERROR_MSG_FETCH__FORECAST = 'Error fetching the Forecast Weather'
export const ERROR_FETCH_USER_COORDINATES = 'Error getting your device coordinates'
export const ERROR_FETCH_COORDINATES = 'Please select a real city name'
//Insert
export const REGEX = '[a-zA-Z ]+,\\s?[a-zA-Z]{2,3}'
export const ERROR_TITLE_INSERT = 'Insert Failed'
export const ERROR_INSERT_DUPLICATE = 'Error inserting duplicate City'
export const ERROR_INSERT_FORMAT = 'Error inserting a city with the wrong format! Format: "CityName","CountryCode" (e.g. Leiria, PT)'
export const ERROR_WRONG_COUNTRY = 'Please verify you inserted the correct country code'

//InputBox.js
export const CITY_FORMAT_HINT = 'Format: CityName, CountryCode (Ex: Leiria, PT)'
export const ADD_CITY_HINT = 'Add City'

//City.js
export const DELETE_CITY_HINT = 'Delete City'