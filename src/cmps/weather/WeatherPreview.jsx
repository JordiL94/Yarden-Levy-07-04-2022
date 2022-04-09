import { utils } from '../../services/utils.service.js';

export const WeatherPreview = ({ weatherItem }) => {
    const { Day, EpochDate, Temperature } = weatherItem;

    const formattedDate = utils.getDate(EpochDate);

    const avgTemp = (Temperature.Maximum.value + Temperature.Minimum.value) / 2;

    return (
        <div className="info-preview flex column">
            <img src="" alt="placeholder" />
            <div>
                <h2>{Day.IconPhrase}</h2>
                <h3>{formattedDate}</h3>
                <h3>{avgTemp}</h3>
            </div>
            <button>? Read More</button>
        </div>
    )
}