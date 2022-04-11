import React from 'react';

export const MainForecast = (props) => {
    const { currLocation, mainForecast, favorites, onToggleFavorites } = props;

    if (!mainForecast) return <React.Fragment />

    const isFavorite = favorites.some(favorite => favorite.Key === currLocation.Key);

    return (
        <section className="main-forecast">
            <h3>{mainForecast.LocalizedName}</h3>
            {isFavorite ?
                <button onClick={() => onToggleFavorites(true)}>Add To Favorites</button> :
                <button onClick={() => onToggleFavorites(false)}>Unfavorite</button>}
            <h2>{mainForecast.Text}</h2>
        </section>
    )
}