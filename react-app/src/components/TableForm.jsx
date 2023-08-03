import React,{ useState }from 'react';
import Sidebar from '../components/Sidebar';
import "../App.css";
import { m_data } from '../data/Mock_data';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableForm = () => {

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
                <th>Cusip</th>
                <th>Counterparty</th>
                <th>Currency</th>
                <th>Coupon</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {m_data
                .filter((item) => {
                  return search.toLowerCase() === ''
                    ? item
                    : item.cusip.toLowerCase().includes(search);
                })
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.cusip}</td>
                    <td>{item.counterparty}</td>
                    <td>{item.currency}</td>
                    <td>{item.coupon}</td>
                    <td>{item.date}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>

        </div>
    )
  
  }
  
  export default TableForm