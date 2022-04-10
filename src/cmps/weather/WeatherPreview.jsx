import { utils } from '../../services/utils.service.js';

export const WeatherPreview = ({ weatherItem }) => {
    const { Day, EpochDate, Temperature, Link } = weatherItem;

    const formattedDate = utils.getDate(EpochDate);

    const avgTemp = (Temperature.Maximum.Value + Temperature.Minimum.Value) / 2;

    return (
        <div className="weather-preview flex column">
            <img src="" alt="placeholder" />
            <div className="daily-info">
                <h2>{Day.IconPhrase}</h2>
                <h3>{formattedDate}</h3>
                <h3>{avgTemp}</h3>
            </div>
            <a href={Link}>Read More</a>
        </div>
    )
}