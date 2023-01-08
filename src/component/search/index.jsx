
import React, { useEffect, useState } from 'react'
import './style.css';
const Search = (props) => {

    const { getDataFromSearchComponent, apiCalledSucess, setApiCalledSucess } = props;
    const [inputvalue, setInputValue] = useState('')
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
            <button type='submit'>Search</button>
        </form>
    )
}
export default Search;
