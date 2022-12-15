import React, {useState} from 'react';
import './App.css';
import CityInput from './components/CityInput.js';
import Watches from './components/Watches.js';
import PropTypes from 'prop-types';

function App() {

  const [data, setData] = useState({});

    const [watches, setWatches] = useState([]);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(prevData => ({...prevData, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setWatches(prevWatches => ([...prevWatches, data]));
        e.target.reset();
      };

    const handleDelete = e => {
      e.preventDefault();
      const itemToDelete = e.target.closest("div").className;
      setWatches(watches.filter(prevWatch => prevWatch.city !== itemToDelete));
    };

  return (
    <div className="container">
      <CityInput
        setNewCity={e => handleChange(e)}
        addWatch={e => handleSubmit(e)} />
      <Watches
        data={watches}  
        onDelete={e => handleDelete(e)} />
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
