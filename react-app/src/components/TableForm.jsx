import React, {useState, useEffect} from 'react';
import {Table as AntTable, Col, Row, Form as AntForm, Input, Button, Modal } from 'antd';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getAllSecurities} from '../service/security-service';
import "../styles/index.css"
import "../App.css";
// import { m_data } from '../data/Mock_data';


const TableForm = () => {

    const [bonds, setBonds] = useState([]);
    const [show, setShow] = useState(false);
    const [formInfor, setFormInfor] = useState({});


    useEffect(() => {
            getBondsFromAPI();
        },
        []
    );

    const getBondsFromAPI = () => {
        getAllSecurities()
            .then(res => {
                setBonds(res.data);
            })
            .catch(err => {
                setBonds([]);
                console.log(err);
            })
    };


    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
        },
    };
    const formItemEditLayout = {
        labelCol: {
            xs: { span: 4 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'isin',
            dataIndex: 'isin',
            // sorter: (a, b) =>  a.id.length - b.id.length,
            sorter: (a, b) => b.isin.localeCompare(a.isin),
        },
        {
            title: 'cusip',
            dataIndex: 'cusip',
            sorter: (a, b) => b.cusip.localeCompare(a.cusip),
        },
        {
            title: 'issuerName',
            dataIndex: 'issuerName',
            // sorter: (a, b) =>  a.id.length - b.id.length,
            sorter: (a, b) => b.issuerName.localeCompare(a.issuerName),
        },
        {
            title: 'maturityDate',
            dataIndex: 'maturityDate',
            // sorter: (a, b) =>  a.id.length - b.id.length,
            sorter: (a, b) => new Date(b.maturityDate) - new Date(a.maturityDate),
        },
        {
            title: 'coupon',
            dataIndex: 'coupon',
            sorter: (a, b) =>  a.coupon - b.coupon,
        },
        {
            title: 'type',
            dataIndex: 'type',
            // sorter: (a, b) =>  a.id.length - b.id.length,
            sorter: (a, b) => b.type.localeCompare(a.type),

        },
        {
            title: 'faceValue',
            dataIndex: 'faceValue',
            sorter: (a, b) =>  a.faceValue - b.faceValue,
        },
        {
            title: 'currency',
            dataIndex: 'currency',
            // sorter: (a, b) =>  a.id.length - b.id.length,
            sorter: (a, b) => b.currency.localeCompare(a.currency),
        },
        {
            title: 'status',
            dataIndex: 'status',
            // sorter: (a, b) =>  a.id.length - b.id.length,
            sorter: (a, b) => b.status.localeCompare(a.status),
        },
        // {
        //     title: 'book_id',
        //     dataIndex: 'book_id',
        //     sorter: (a, b) =>  a.id.length - b.id.length,
        // },
    ];

    // const [contacts, setContacts] = useState(data);
    const [search, setSearch] = useState('');
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    const onFinish = (value) =>{
        console.log(value);
    };
    const handleOk = () => {
        setFormInfor({});
        setShow(false);
    };
    const handleCancel = () => {
        setFormInfor({});
        setShow(false);
    };
    return (
        <div style={{ maxWidth: '150vh', maxHeight: '100vh', overflow: 'auto' }}>
            <Container>
                <h1 className={'h1Margin text-center mt-4'}>Bonds Overview</h1>

              
 
                <AntForm name="basic" className="query" onFinish={onFinish} {...formItemLayout}>
                    <Row gutter={[16,16]}>

                        <Col span={8}>
                            <AntForm.Item label="id" name="id">
                                <Input />
                            </AntForm.Item>
                        </Col>

                        <Col span={8}>
                            <AntForm.Item
                                label="isin"
                                name="isin"
                            >
                                <Input />
                            </AntForm.Item>
                        </Col>

                        <Col span={8}>
                            <AntForm.Item
                                label="cusip"
                                name="cusip"
                            >
                                <Input/>
                            </AntForm.Item>
                        </Col>

                    </Row>

                    <Row gutter={[16,16]}>
                        <Col span={8}>
                            <AntForm.Item
                                label="issuerName"
                                name="issuerName"
                            >
                                <Input />
                            </AntForm.Item>
                        </Col>
                        
                        <Col span={8}>
                            <AntForm.Item
                                label="type"
                                name="type"
                            >
                                <Input />
                            </AntForm.Item>
                        </Col>

                        <Col span={8}>
                            <AntForm.Item
                                label="bookName"
                                name="bookName"
                            >
                                <Input />
                            </AntForm.Item>
                        </Col>



                    </Row>

                    <Row gutter={[16,16]}>

                        <Col span={8}>
                            <AntForm.Item
                                label="status"
                                name="status"
                            >
                                <Input />
                            </AntForm.Item>
                        </Col>

                        <Col span={8}>
                            <AntForm.Item
                                label="currency"
                                name="currency"
                            >
                                <Input />
                            </AntForm.Item>
                        </Col>

                        <Col span={8}>
                            <Form >
                                <InputGroup >

                                    {/* onChange for search */}
                                    <Form.Control
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder='Global-Search'
                                        // style={{ fontSize: '14px', height: '40px', borderRadius: '4px' }}
                                    />

                                </InputGroup>
                            </Form>
                        </Col>

                        </Row>

                        <Col span={16} className='formBtn'>
                            <Button type="primary" htmlType="submit">
                                Search
                            </Button>
                        </Col>
                </AntForm>
                
            
                {/*bonds ||*/}
                 
                <AntTable columns={columns} 
                          pagination={false}  
                          dataSource={bonds}
                          onChange={onChange}   
                          onRow={(record) => {
                                    return {
                                            onClick: (event) => {
                                            console.log("12", record)
                                            setShow(true);
                                            console.log("show", record)
                                            setFormInfor(record)}, // 点击行
                                          };}} />
       

                <Modal title="Basic Infor" open={show} onOk={handleOk} onCancel={handleCancel}>
                    <AntForm name="basic" onFinish={onFinish}
                        {...formItemEditLayout}
                        initialValues={{
                            ...formInfor
                        }}
                    >
                        <Row gutter={[16,16]}>
                            <Col span={24}>
                                <AntForm.Item
                                    label="id"
                                    name="id"
                                >
                                    <Input />
                                </AntForm.Item>
                            </Col>
                            <Col span={24}>
                                <AntForm.Item
                                    label="isin"
                                    name="isin"
                                >
                                    <Input placeholder="Basic usage" />
                                </AntForm.Item>
                            </Col>
                        </Row>
                        <Row gutter={[16,16]}>
                            <Col span={24}>
                                <AntForm.Item
                                    label="cusip"
                                    name="cusip"
                                >
                                    <Input placeholder="Basic usage" />
                                </AntForm.Item>
                            </Col>
                            <Col span={24}>
                                <AntForm.Item
                                    label="issuerName"
                                    name="issuerName"
                                >
                                    <Input />
                                </AntForm.Item>
                            </Col>
                        </Row>
                        <Row gutter={[16,16]}>
                            <Col span={24}>
                                <AntForm.Item
                                    label="maturityDate"
                                    name="maturityDate"
                                >
                                    <Input placeholder="Basic usage" />
                                </AntForm.Item>
                            </Col>
                            <Col span={24}>
                                <AntForm.Item
                                    label="coupon"
                                    name="coupon"
                                >
                                    <Input placeholder="Basic usage" />
                                </AntForm.Item>
                            </Col>
                        </Row>
                        <Row gutter={[16,16]}>
                            <Col span={24}>
                                <AntForm.Item
                                    label="type"
                                    name="type"
                                >
                                    <Input />
                                </AntForm.Item>
                            </Col>
                            <Col span={24}>
                                <AntForm.Item
                                    label="faceValue"
                                    name="faceValue"
                                >
                                    <Input placeholder="Basic usage" />
                                </AntForm.Item>
                            </Col>
                            <Col span={24}>
                                <AntForm.Item
                                    label="currency"
                                    name="currency"
                                >
                                    <Input placeholder="Basic usage" />
                                </AntForm.Item>
                            </Col>

                            <Col span={24}>
                                <AntForm.Item
                                    label="status"
                                    name="status"
                                >
                                    <Input />
                                </AntForm.Item>
                            </Col>

                            {/* <Col span={24}>
                                <AntForm.Item
                                    label="book_id"
                                    name="book_id"
                                >
                                    <Input />
                                </AntForm.Item>
                            </Col> */}

                        </Row>
                    </AntForm>
                </Modal>
                
            </Container>

        </div>
    )

}

export default TableForm
