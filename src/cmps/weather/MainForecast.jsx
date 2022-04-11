import React, { useState } from 'react';

export const MainForecast = (props) => {
    const { mainForecast, favorites, onToggleFavorites } = props;
    const isFavorite = favorites.some(favorite => favorite.Key === mainForecast.Key);

    const [favorite, setFavorite] = useState(isFavorite);

    const handleFavorite = (val) => {
        setFavorite(val);
        onToggleFavorites(val);
    }

    if (!mainForecast) return <React.Fragment />

    return (
        <section className="main-forecast flex column">
            <div className="add-to-favorites flex space-between">
                <h3>{mainForecast.LocalizedName}</h3>
                {favorite ?
                    <button className="favorite" onClick={() => handleFavorite(false)}>Unfavorite</button> :
                    <button className="not-favorite" onClick={() => handleFavorite(true)}>Add To Favorites</button>}
            </div>
            <h2>{mainForecast.Text}</h2>
        </section>
    )
}