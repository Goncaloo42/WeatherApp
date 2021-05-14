import { toTextualDescription, getPosition, buildPath } from '../utils/Utils'
import {API_KEY, CURRENT_WEATHER_API, FORECAST_WEATHER_API, CITY_COORDINATES_API} from '../utils/Constants'

export const getCurrentWeather = async (coordinates) => {
    let currentWeather = {}
    try {
        const path = buildPath(CURRENT_WEATHER_API, [{ key: 'lat', value: coordinates.latitude }, { key: 'lon', value: coordinates.longitude }, { key: 'appid', value: API_KEY }])
        const response = await fetch(path)
        const data = await response.json()
        currentWeather = {
            date: new Date(data.dt * 1000).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
            location: data.name,
            temperature: data.main.temp.toFixed(),
            description: data.weather[0].description,
            windSpeed: data.wind.speed,
            windDirection: toTextualDescription(data.wind.deg),
            iconCode: data.weather[0].icon
        }
    } catch (error) {
        currentWeather = null
    }

    return currentWeather
}

export const getForecastWeather = async (coordinates) => {
    let forecastWeather = {}
    try {
        const path = buildPath(FORECAST_WEATHER_API, [{ key: 'lat', value: coordinates.latitude }, { key: 'lon', value: coordinates.longitude }, { key: 'appid', value: API_KEY }])
        const response = await fetch(path)
        const data = await response.json()

        forecastWeather = data.daily.slice(1).map((forecastDay) => {
            return {
                dayOfWeek: new Date(forecastDay.dt * 1000).toLocaleDateString("en-US", { weekday: 'long' }),
                dayOfMonth: new Date(forecastDay.dt * 1000).toLocaleDateString("en-US", { month: 'long', day: 'numeric' }),
                icon: forecastDay.weather[0].icon,
                temperature: forecastDay.temp.day.toFixed(),
                wind: forecastDay.wind_speed.toFixed()
            };
        })
    } catch (error) {
        forecastWeather = null
    }
    return forecastWeather
}

export const getUserCoordinates = async () => {
    let coordinates = []
    try {
        const position = await getPosition();
        coordinates.push(position.coords.latitude, position.coords.longitude)
    } catch (error) {
        coordinates = null
    }
    return coordinates
}

export const getCityCoordinates = async (city) => {

    let coordinates = {}
    try {
        const path = buildPath(CITY_COORDINATES_API, [{ key: 'q', value: city }, { key: 'appid', value: API_KEY }])
        const response = await fetch(path)
        const data = await response.json()

        coordinates = {
            country: data[0].country,
            latitude: data[0].lat,
            longitude: data[0].lon,
            name: data[0].name
        }

    } catch (error) {
        coordinates = null
    }
    return coordinates
}