import { useState } from "react";

export const SearchBar = (props) => {
    const { onSearch, placeholder = "Search..." } = props;
    const [inputVal, setInputVal] = useState(null);

    const handleChange = ({ target }) => {
        const { value } = target;
        setInputVal(value);
    }

    return (
        <form onSubmit={onSearch(inputVal)} className="search-bar flex">
            <input type="text" value={inputVal} onChange={handleChange} placeholder={placeholder} />
            <button>🔍</button>
        </form>
    )
}