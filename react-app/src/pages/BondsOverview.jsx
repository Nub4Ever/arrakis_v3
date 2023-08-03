import React,{ useState }from 'react';
import Sidebar from '../components/Sidebar';
import "../App.css";
import TableForm from '../components/TableForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllSecurities } from '../service/security-service';

const BondsOverview = () => {

  // const [contacts, setContacts] = useState(data);
  // const [search, setSearch] = useState('');
//   const [bonds,setBonds] = useState([]);

//   useEffect(()=>{
//         getBondsFromAPI();}, 
//         []
// );

// const getBondsFromAPI = ()=>{
//   getAllSecurities()
//   .then(res => {
//       setBonds(res.data);
//   })
//   .catch(err => {
//       setBonds([]);
//       console.log(err);
//   })
// }

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


