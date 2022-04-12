import React, { useEffect, useState } from 'react';

export const SearchBar = (props) => {
    const { onSearch, placeholder = "Search...", onGetSuggestions, suggestions } = props;

    const [inputVal, setInputVal] = useState('');

    const handleChange = ({ target }) => {
        const { value } = target;
        setInputVal(value);
    }

    useEffect(() => {
        if(inputVal.length < 2) return;
        onGetSuggestions(inputVal);
    }, [inputVal])

    return (
        <section className="search">
            <form onSubmit={() => {if(inputVal.length > 2) onSearch(inputVal)}} className="search-bar flex" autoComplete="off" >
                <input type="text" value={inputVal} onChange={handleChange} placeholder={placeholder} pattern="[a-zA-Z]" />
                <button><span className="fa-solid magnifying-glass"></span></button>
            </form>
            {suggestions?.length && inputVal.length >=2 ?
                <ul className="search-suggestions clean-list flex column">
                    {suggestions.map(suggestion => <li onClick={() => onSearch(suggestion)} key={suggestion.Key}>{suggestion.LocalizedName}</li>)}
                </ul> : <React.Fragment />}
        </section>
    )
}