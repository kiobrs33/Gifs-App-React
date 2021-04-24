import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories((cats => [inputValue,...cats]));
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}  >
            <h4 style={styleH2}> {inputValue} </h4>
            <input 
                value={inputValue}
                onChange={handleOnChange}
                type='text'
                placeholder='Search Name'
            />
        </form>
    )
}

const styleH2 = {
    color:'#3498DB'
};

AddCategory.propTypes ={
    setCategories : PropTypes.func.isRequired
}
