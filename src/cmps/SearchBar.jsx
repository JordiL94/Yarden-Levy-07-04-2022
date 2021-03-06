import React, { useEffect, useState } from 'react';

export const SearchBar = (props) => {
    const { onSearch, placeholder = "Search...", onGetSuggestions, suggestions } = props;

    const [inputVal, setInputVal] = useState('');

    const handleChange = ({ target }) => {
        const { value } = target;
        const allowed = /[a-zA-Z ]/;
        const charIdx = value.length - 1;
        if (charIdx === -1 || allowed.test(value[charIdx])) setInputVal(value);
    }

    const handleSearch = (val) => {
        onSearch(val);
        setInputVal('');
    }

    useEffect(() => {
        if (inputVal.length < 2) return;
        onGetSuggestions(inputVal);
    }, [inputVal])

    return (
        <section className="search">
            <form onSubmit={() => { if (inputVal.length > 2) handleSearch(inputVal) }} className="search-bar flex" autoComplete="off" >
                <input type="text" value={inputVal} onChange={handleChange} placeholder={placeholder} />
                <button><span className="fa-solid magnifying-glass"></span></button>
            </form>
            {suggestions?.length && inputVal.length >= 2 ?
                <ul className="search-suggestions clean-list flex column">
                    {suggestions.map(suggestion => <li onClick={() => handleSearch(suggestion)}
                        key={suggestion.Key}>{`${suggestion.LocalizedName}, ${suggestion.Country.ID}`}</li>)}
                </ul> : <React.Fragment />}
        </section>
    )
}