import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GRO_API_URL, GeoApiOptions } from '../../api';
const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);
    const loadOptions = (inputValue) => {
        return fetch(`${GRO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, GeoApiOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch(err => console.log(err));
    };
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return (
        <AsyncPaginate
            placeholder="search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}
export default Search;