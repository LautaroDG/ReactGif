import React, { useState } from 'react'
import PropTypes from 'prop-types'



export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("");

    const inputChange = e => {
        setInputValue(e.target.value);
    };

    const presionarEnter = e => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue,...cats]);
            setInputValue("");
        }
    }

    return (
        <form onSubmit={presionarEnter}>
            <input 
                type="text"
                value={inputValue}
                onChange={inputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
