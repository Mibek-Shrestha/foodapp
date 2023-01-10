
import React, { useEffect, useState, useContext } from 'react'
import { ThemeContext } from '../../App';
import './style.css';
const Search = (props) => {

    const { getDataFromSearchComponent, apiCalledSucess, setApiCalledSucess } = props;
    const [inputvalue, setInputValue] = useState('')
    const { theme } = useContext(ThemeContext)
    const handleInputvalue = (event) => {
        const { value } = event.target;
        setInputValue(value);
    }
    console.log(inputvalue);
    const handleSubmit = (event) => {
        event.preventDefault()
        getDataFromSearchComponent(inputvalue)
    }
    useEffect(() => {
        if (apiCalledSucess) {
            setInputValue('')
            setApiCalledSucess('false')
        }
    }, [apiCalledSucess])
    return (
        <form className='Search' onSubmit={handleSubmit}>
            <input name="search" onChange={handleInputvalue} value={inputvalue} placeholder='Search Recipies' id='search' />
            <button type='submit' style={theme ? { backgroundColor: "#12343b" } : {}}>Search</button>
        </form>
    )
}
export default Search;
