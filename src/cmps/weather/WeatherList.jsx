import { WeatherPreview } from './WeatherPreview';
import { Loading } from '../Loading';

export const WeatherList = (props) => {
    const { weatherList, isFarenheit, fromFavorites, loadWeatherInfo } = props;

    if (!weatherList) return <Loading />;

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