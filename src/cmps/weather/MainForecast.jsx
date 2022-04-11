import React from 'react';

export const MainForecast = (props) => {
    const { currLocation, mainForecast, favorites, onToggleFavorites } = props;

    if (!mainForecast) return <React.Fragment />

    const isFavorite = favorites.some(favorite => favorite.Key === currLocation.Key);

    return (
        <section className="main-forecast">
            {currLocation ? <h3>{currLocation.LocalizedName}</h3> : <h3>Your Location</h3>}
            {isFavorite ?
                <button onClick={() => onToggleFavorites(currLocation, true)}>Add To Favorites</button> :
                <button onClick={() => onToggleFavorites(currLocation, false)}>Unfavorite</button>}
            <h2>{mainForecast.Text}</h2>
        </section>
    )
}