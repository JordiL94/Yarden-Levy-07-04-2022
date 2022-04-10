import { useEffect, useState } from 'react';

export const SearchBar = (props) => {
    const { onSearch, placeholder = "Search...", loadSuggestions } = props;
    const [inputVal, setInputVal] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = ({ target }) => {
        const { value } = target;
        setInputVal(value);
    }

    useEffect(() => {
        (async () => {
            if (inputVal === '') return;
            try {
                const suggestions = await loadSuggestions(inputVal);
                setSuggestions(suggestions);
                console.log(suggestions);
            } catch (err) {
                console.log('Encountered error retrieving suggestions:', err);
            }
        })()
    }, [inputVal])

    return (
        <section className="search">
            <form onSubmit={() => onSearch(inputVal)} className="search-bar flex" autoComplete="off" >
                <input type="text" value={inputVal} onChange={handleChange} placeholder={placeholder} />
                <button>🔍</button>
            </form>
            {suggestions.length &&
                <ul className="search-suggestions flex column">
                    {suggestions.map(suggestion => <li onClick={() => onSearch(suggestion)}>{suggestion.LocalizedName}</li>)}
                </ul>}
        </section>
    )
}