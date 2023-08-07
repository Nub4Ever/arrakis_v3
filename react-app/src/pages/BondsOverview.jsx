import React,{ useState }from 'react';
import Sidebar from '../components/Sidebar';
import "../App.css";
import TableForm from '../components/TableForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css"

const BondsOverview = () => {



  return (
      <div>
          <div className='background-image'>
            <Sidebar />
          </div>
          <div className="bodyWidth">
            <TableForm />
          </div>

      </div>
  )

}

export default BondsOverview


