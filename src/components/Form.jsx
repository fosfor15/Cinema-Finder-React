import React, { useState } from 'react';
import '../styles/Form.css';

function Form(props) {
    const { title, handleTitleChange, type, handleTypeChange } = props;

    return (
        <div id="form">
            <div className="control-container">
                <label htmlFor="title-input">Title:</label>
                <input
                    type="text"
                    id="title-input"
                    placeholder="Enter title"
                    title="Enter title without repeating. Title starts with letters and digits."
                    value={ title }
                    onChange={ handleTitleChange }
                />
            </div>

            <div className="control-container">
                <label htmlFor="type-select">Type:</label>
                <select
                    id="type-select"
                    value={ type }
                    onChange={ handleTypeChange }
                >
                    <option value="film">Films</option>
                    <option value="tv_show">TV Show</option>
                    <option value="all">All</option>
                </select>
            </div>

            <button id="search-button">Search</button>
        </div>
    );
}

export default Form;
