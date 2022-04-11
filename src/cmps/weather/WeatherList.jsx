import { WeatherPreview } from './WeatherPreview';
import { Loading } from '../Loading';

export const WeatherList = (props) => {
    const { weatherList, isFarenheit } = props;
    
    if(!weatherList) return <Loading />;

    return (
        <section className="weather-list flex">
            {weatherList.map(weatherItem => {
                return (
                    <WeatherPreview weatherItem={weatherItem} isFarenheit={isFarenheit} />
                )
            })}
        </section>
    )
}