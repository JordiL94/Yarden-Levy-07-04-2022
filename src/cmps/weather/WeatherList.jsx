import { WeatherPreview } from './WeatherPreview';

export const WeatherList = (props) => {
    const { weatherList } = props;
    
    if(!weatherList) return <h2>Loading...</h2>

    return (
        <section className="info-list">
            {weatherList.map(weatherItem => {
                return (
                    <WeatherPreview weatherItem={weatherItem} />
                )
            })}
        </section>
    )
}