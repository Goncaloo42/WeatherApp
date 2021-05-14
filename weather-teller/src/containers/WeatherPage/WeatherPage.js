import { useState, useEffect, useRef } from "react";
import {
  getCurrentWeather,
  getForecastWeather,
  getUserCoordinates,
  getCityCoordinates,
} from "../../services/Services";

import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import ForecastList from "../../components/ForecastList/ForecastList";
import ErrorModal from "../../components/UI/ErrorModal/ErrorModal";
import Spinner from "../../components/UI/Spinner/Spinner";
import CitySelector from "../../components/CitySelector/CitySelector";
import { usePersistedState } from "../../hooks/usePersistedState";

import {
  ERROR_TITLE_FETCH,
  ERROR_TITLE_INSERT,
  ERROR_MSG_FETCH_CURRENT,
  ERROR_MSG_FETCH__FORECAST,
  ERROR_FETCH_USER_COORDINATES,
  ERROR_INSERT_DUPLICATE,
  ERROR_INSERT_FORMAT,
  ERROR_FETCH_COORDINATES,
  ERROR_WRONG_COUNTRY,
  REGEX,
} from "../../utils/Constants";

const WeatherPage = () => {
  const [currentWeather, setCurrentWeather] = useState({});

  const [forecastWeather, setForecastWeather] = useState([]);

  const [coordinates, setCoordinates] = useState({});

  const [error, setError] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const [cities, setCities] = usePersistedState("cities", []);

  //input text value reference
  const newCityRef = useRef();

  //Get Current and Forecast Weather
  useEffect(() => {
    setError(null);
    if (Object.keys(coordinates).length !== 0) {
      const fetchCurrentWeather = async () => {
        const current = await getCurrentWeather(coordinates);
        if (current === null) {
          setError({
            title: ERROR_TITLE_FETCH,
            message: ERROR_MSG_FETCH_CURRENT,
          });
        } else {
          setCurrentWeather(current);
        }
      };
      fetchCurrentWeather();

      const fetchForecast = async () => {
        const forecast = await getForecastWeather(coordinates);
        if (forecast === null) {
          setError({
            title: ERROR_TITLE_FETCH,
            message: ERROR_MSG_FETCH__FORECAST,
          });
        } else {
          setForecastWeather(forecast);
          setIsLoading(false);
        }
      };
      fetchForecast();
    }
  }, [coordinates]);

  //Get User Device Coordinates
  useEffect(() => {
    setError(null);
    const fetchCoordinates = async () => {
      let coordinates = await getUserCoordinates();
      if (coordinates === null) {
        setError({
          title: ERROR_TITLE_FETCH,
          message: ERROR_FETCH_USER_COORDINATES,
        });
      } else {
        const [a, b] = coordinates;
        setCoordinates({
          latitude: a,
          longitude: b,
        });
      }
    };
    fetchCoordinates();
  }, []);

  //Clean city InputBox
  useEffect(() => {
    if (!isLoading) {
      newCityRef.current.value = "";
    }
  }, [cities, isLoading, error]);

  const errorHandler = () => {
    setError(null);
  };

  const deleteCityHandler = (cityName) => {
    setCities(cities.filter((city) => city !== cityName));
  };

  const addCityHandler = async () => {
    if (newCityRef.current.value.length !== 0) {
      setIsLoading(true);
      setError(false);
      let newCity = newCityRef.current.value;
      let countryCode = newCity.split(",")[1];
      if (newCity.match(REGEX)) {
        const found = cities.includes(newCity);
        if (!found) {
          const cityInfo = await getCityCoordinates(newCity);
          if (cityInfo !== null) {
            if (
              cityInfo.country.toUpperCase() ===
              countryCode.replace(/\s+/g, "").toUpperCase()
            ) {
              setCoordinates({
                latitude: cityInfo.latitude,
                longitude: cityInfo.longitude,
                name: cityInfo.name,
              });
              setCities((cities) => [
                ...cities,
                cityInfo.name + ", " + cityInfo.country,
              ]);
            } else {
              setError({
                title: ERROR_TITLE_INSERT,
                message: ERROR_WRONG_COUNTRY,
              });
            }
          } else {
            setError({
              title: ERROR_TITLE_INSERT,
              message: ERROR_FETCH_COORDINATES,
            });
          }
        } else {
          setError({
            title: ERROR_TITLE_INSERT,
            message: ERROR_INSERT_DUPLICATE,
          });
        }
      } else {
        setError({
          title: ERROR_TITLE_INSERT,
          message: ERROR_INSERT_FORMAT,
        });
      }
    }
    setIsLoading(false);
  };

  const citySelectedHandler = async (city) => {
    setIsLoading(true);
    setError(false);
    const cityInfo = await getCityCoordinates(city);

    if (cityInfo !== null) {
      setCoordinates({
        latitude: cityInfo.latitude,
        longitude: cityInfo.longitude,
        name: cityInfo.name,
      });
      setIsLoading(false);
    } else {
      setError({
        title: ERROR_TITLE_FETCH,
        message: ERROR_FETCH_COORDINATES,
      });
    }
  };

  //App starts by presenting a Spinner - isLoading starts as true
  let weatherPresentation = <Spinner />;

  //When user coordinates and weather are retrieved, isLoading is set to false, and the weather and cities are presented
  if (!isLoading) {
    weatherPresentation = (
      <>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
          }}
        >
          <CurrentWeather
            weather={currentWeather}
            location={
              coordinates.name ? coordinates.name : currentWeather.location
            }
          />
          <CitySelector
            cities={cities}
            clicked={citySelectedHandler}
            cityAdd={addCityHandler}
            cityDelete={deleteCityHandler}
            newCity={newCityRef}
          />
        </div>
        <ForecastList weatherList={forecastWeather} />
      </>
    );
  }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          dismiss={errorHandler}
        />
      )}
      {weatherPresentation}
    </>
  );
};

export default WeatherPage;
