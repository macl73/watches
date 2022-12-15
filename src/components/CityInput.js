import React from 'react';
import PropTypes from 'prop-types';

export default function CityInput({setNewCity, addWatch}) {

    return (
        <form className="city-input" onSubmit={addWatch}>
            <input type="text" name="city" onChange={setNewCity} />
            <input type="text" name="offset" onChange={setNewCity} />
            <input type="submit" value="Добавить" />
        </form>
    );
};

CityInput.propTypes = {
    addWatch: PropTypes.func,
    onDelete: PropTypes.func
};