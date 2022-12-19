import React, {useState} from 'react';
import './App.css';
import CityInput from './components/CityInput.js';
import Watches from './components/Watches.js';
import PropTypes from 'prop-types';

let id = 0;

function App() {

  const [data, setData] = useState({});

    const [watches, setWatches] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        
        setData(prevData => ({...prevData, [name]: value, id: id}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setWatches(prevWatches => ([...prevWatches, data]));
        id++;
        e.target.reset();
      };

    const handleDelete = itemId => {
      setWatches(watches.filter(prevWatch => prevWatch.id !== itemId));
    };

  return (
    <div className="container">
      <CityInput
        setNewCity={e => handleChange(e)}
        addWatch={e => handleSubmit(e)} />
      <Watches
        data={watches}  
        onDelete={id => handleDelete(id)} />
    </div>
  );
};

App.propTypes = {
  data: PropTypes.array,
  setNewCity: PropTypes.func,
  addWatch: PropTypes.func,
  onDelete: PropTypes.func
};

export default App;
