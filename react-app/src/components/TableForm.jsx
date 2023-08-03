import React,{ useState }from 'react';
import Sidebar from '../components/Sidebar';
import "../App.css";
// import { m_data } from '../data/Mock_data';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllSecurities } from '../service/security-service';
import { useEffect } from 'react';

const TableForm = () => {

  const [bonds,setBonds] = useState([]);

  useEffect(()=>{
        getBondsFromAPI();}, 
        []
);

    const getBondsFromAPI = ()=>{
      getAllSecurities()
      .then(res => {
          setBonds(res.data);
      })
      .catch(err => {
          setBonds([]);
          console.log(err);
      })
    }

    // const [contacts, setContacts] = useState(data);
    const [search, setSearch] = useState('');
  
    return (
        <div>   
        <Container>
          <h1 className='text-center mt-4'>Bonds Overview</h1>
          <Form>
            <InputGroup className='my-3'>
  
              {/* onChange for search */}
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search contacts'
              />
  
            </InputGroup>
          </Form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>isin</th>
                <th>Cusip</th>
                <th>issuerName</th>
                <th>maturityDate</th>
                <th>Coupon</th>
                <th>type</th>
                <th>facevalue</th>
                <th>Currency</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bonds
                .filter((item) => {
                  return search.toLowerCase() === ''
                    ? item
                    : item.cusip.toLowerCase().includes(search);
                })
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.isin}</td>
                    <td>{item.cusip}</td>
                    <td>{item.issuerName}</td>
                    <td>{item.maturityDate}</td>
                    <td>{item.coupon}</td>
                    <td>{item.type}</td>
                    <td>{item.faceValue}</td>
                    <td>{item.currency}</td>
                    <td>{item.status}</td>
    
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>

        </div>
    )
  
  }
  
  export default TableForm