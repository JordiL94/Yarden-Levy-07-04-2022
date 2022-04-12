import React from 'react';
import { WeatherPreview } from './WeatherPreview';

export const WeatherList = (props) => {
    const { weatherList, isFarenheit, fromFavorites, loadWeatherInfo } = props;

    if (!weatherList) return <React.Fragment />;

    return (
        <section className="weather-list flex">
            {weatherList.map((weatherItem, idx) => {
                return (
                    <WeatherPreview weatherItem={weatherItem} isFarenheit={isFarenheit}
                        loadWeatherInfo={loadWeatherInfo} fromFavorites={fromFavorites} 
                        key={`${weatherItem.Key}, ${idx}`} />
                )
            })}
        </section>
    )
}