const Country = ({country, setFilterWord}) => {

    const handleFilterClick = (name) => {
        setFilterWord(name);
    }

    return (
        <li>
            {country["name"]["official"]}
            <button onClick={() => handleFilterClick(country["name"]["official"])}>hello</button>
        </li>
    );
}

export default Country