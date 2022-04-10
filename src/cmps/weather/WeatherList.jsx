import { WeatherPreview } from './WeatherPreview';
import { Loading } from '../Loading';

export const WeatherList = (props) => {
    const { weatherList } = props;
    
    if(!weatherList) return <Loading />;

    return (
        <section className="info-list flex">
            {weatherList.map(weatherItem => {
                return (
                    <WeatherPreview weatherItem={weatherItem} />
                )
            })}
        </section>
    )
}