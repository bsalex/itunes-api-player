import React from 'react';

import './Search.css';

const SearchComponent = ({value, onChange}) => {
    return <input className="search" placeholder="Search text" type="text" value={value} onInput={(e) => onChange(e.target.value)} />;
};

export default SearchComponent;
