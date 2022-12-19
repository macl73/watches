import React from 'react';
import Watch from "./Watch.js"
import PropTypes from 'prop-types';

export default function Watches({data, onDelete}) {
    return(
        <div className="watches">
            {data.map((item, index) => <Watch key={index} onDelete={onDelete} offset={item.offset} name={item.city} id={item.id}/>)}
        </div>
    );
};

Watch.propTypes = {
    data: PropTypes.array,
    id: PropTypes.number,
    offset: PropTypes.string,
    name: PropTypes.string,
    onDelete: PropTypes.func
  };