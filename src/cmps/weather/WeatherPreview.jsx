import { useHistory } from 'react-router-dom';
import { utils } from '../../services/utils.service.js';

export const WeatherPreview = ({ weatherItem, isFarenheit, fromFavorites, loadWeatherInfo }) => {
    const { Day, EpochDate, Temperature, Link } = weatherItem;
    let history = useHistory();

    const day = utils.getDay(EpochDate);

    const avgTemp = (Temperature.Maximum.Value + Temperature.Minimum.Value) / 2;
    const displayTemp = isFarenheit ? `${avgTemp.toFixed(1)}°F` : `${((avgTemp - 32) * (5 / 9)).toFixed(1)}°C`;

    const directToApp = async () => {
        if (!fromFavorites) return;
        await loadWeatherInfo(weatherItem);
        history.push('/');
    }

    return (
        <div className="weather-preview flex column" onClick={() => directToApp()}>
            <img src={require(`../../assets/img/weather-icons/${Day.Icon}.png`)} alt="placeholder" />
            <div className="daily-info">
                <h3>{day}</h3>
                <h2>{Day.IconPhrase}</h2>
                <h3>{displayTemp}</h3>
            </div>
            {fromFavorites && <h5>{weatherItem.LocalizedName}</h5>}
        </div>
    )
}