export function WeatherPreview(props) {
    const { weatherItem } = props;

    return (
        <div className="info-preview">
            <img src="" alt="placeholder" />
            <div>
                <h2>{weatherItem.weather}</h2>
                <h3>{weatherItem.date}</h3>
                <h3>{weatherItem.degrees}</h3>
            </div>
            <button>? Read More</button>
        </div>
    )
}