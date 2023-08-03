import React,{ useState }from 'react';
import Sidebar from '../components/Sidebar';
import "../App.css";
import TableForm from '../components/TableForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const BondsOverview = () => {

  // const [contacts, setContacts] = useState(data);
  // const [search, setSearch] = useState('');

  return (
      <div>   
          <div className='background-image'>
            <Sidebar />
          </div>
          <div>
            <TableForm />
          </div>

      </div>
  )

}

export default BondsOverview


