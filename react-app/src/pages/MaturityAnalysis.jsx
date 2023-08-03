import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Calendar from '../components/Calendar';
import "../App.css";

const MaturityAnalysis = () => {


  const [custom_date, setCustomDate] = useState('');

  const handleUserPickDate = (date) => {
    if (date) {
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      setCustomDate(formattedDate);
    } else {
      setCustomDate('');
    }
  };

  return (
    <div className='background-image'>

      <div> 
        <Sidebar />
      </div>

      <div className = 'calendar-container'>
      <div className = 'calendar-content'>

        <h1>Date Picker</h1>
        <Calendar onDateSelect={handleUserPickDate} />
        {custom_date && <p>User entered date: {custom_date}</p>}
    </div>
    </div>

    </div>
  )
}

export default MaturityAnalysis
