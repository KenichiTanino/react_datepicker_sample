import React from 'react';
import DateTimePicker from './components/datetimepicker';
import './App.css';

function App() {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150,
  };

  return (
    <div className="App">
      <div style={style}>
        <DateTimePicker />
      </div>
    </div>
  );
}

export default App;
