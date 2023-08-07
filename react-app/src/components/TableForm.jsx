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
            sorter: (a, b) =>  a.id.length - b.id.length,
        },
        {
            title: 'cusip',
            dataIndex: 'cusip',
            sorter: (a, b) =>  a.id.length - b.id.length,
        },
        {
            title: 'issuerName',
            dataIndex: 'issuerName',
            sorter: (a, b) =>  a.id.length - b.id.length,
        },
        {
            title: 'maturityDate',
            dataIndex: 'maturityDate',
            sorter: (a, b) =>  a.id.length - b.id.length,
        },
        {
            title: 'coupon',
            dataIndex: 'coupon',
            sorter: (a, b) =>  a.id.length - b.id.length,
        },
        {
            title: 'type',
            dataIndex: 'type',
            sorter: (a, b) =>  a.id.length - b.id.length,
        },
        {
            title: 'faceValue',
            dataIndex: 'faceValue',
            sorter: (a, b) =>  a.id.length - b.id.length,
        },
        {
            title: 'currency',
            dataIndex: 'currency',
            sorter: (a, b) =>  a.id.length - b.id.length,
        },
        {
            title: 'status',
            dataIndex: 'status',
            sorter: (a, b) =>  a.id.length - b.id.length,
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
        <div>
            <Container>
                <h1 className={'h1Margin text-center mt-4'}>Bonds Overview</h1>
                <Form style={{display: "none"}}>
                    <InputGroup className='my-3'>

                        {/* onChange for search */}
                        <Form.Control
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Search Bonds'
                        />

                    </InputGroup>
                </Form>

                <Table striped bordered hover style={{display: "none"}}>
                    <thead>
                    <tr>
                        <th data-sortable="true">id</th>
                        <th>Isin</th>
                        <th>Cusip</th>
                        <th>Issuer Name</th>
                        <th>maturityDate</th>
                        <th>Coupon</th>
                        <th>Type</th>
                        <th>Facevalue</th>
                        <th>Currency</th>
                        <th>Status</th>
                        {/* <th>Book_id</th> */}
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
                                {/* <td>{item.book_id}</td> */}

                            </tr>
                        ))}
                    </tbody>
                </Table>

                <AntForm
                    name="basic"
                    className="query"
                    onFinish={onFinish}
                    {...formItemLayout}
                >
                    <Row gutter={[16,16]}>

                        <Col span={8}>
                            <AntForm.Item
                                label="id"
                                name="id"
                            >
                                <Input />
                            </AntForm.Item>
                        </Col>

                        <Col span={8}>
                            <AntForm.Item
                                label="isin"
                                name="isin"
                            >
                                <Input placeholder="Basic usage" />
                            </AntForm.Item>
                        </Col>

                        <Col span={8}>
                            <AntForm.Item
                                label="cusip"
                                name="cusip"
                            >
                                <Input placeholder="Basic usage" />
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
                                label="maturityDate"
                                name="maturityDate"
                            >
                                <Input placeholder="Basic usage" />
                            </AntForm.Item>
                        </Col>

                        <Col span={8}>
                            <AntForm.Item
                                label="coupon"
                                name="coupon"
                            >
                                <Input placeholder="Basic usage" />
                            </AntForm.Item>
                        </Col>

                    </Row>

                    <Row gutter={[16,16]}>

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
                                label="faceValue"
                                name="faceValue"
                            >
                                <Input placeholder="Basic usage" />
                            </AntForm.Item>
                        </Col>

                        <Col span={8}>
                            <AntForm.Item
                                label="currency"
                                name="currency"
                            >
                                <Input placeholder="Basic usage" />
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

                        {/* <Col span={8}>
                            <AntForm.Item
                                label="book_id"
                                name="book_id"
                            >
                                <Input />
                            </AntForm.Item>
                        </Col> */}

                        <Col span={16} className='formBtn'>
                            <Button type="primary" htmlType="submit">Search</Button>
                        </Col>
                    </Row>

                </AntForm>

                {/*bonds ||*/}
                <AntTable columns={columns} pagination={false}  dataSource={bonds} onChange={onChange}   onRow={(record) => {
                    return {
                        onClick: (event) => {
                            console.log("12", record)
                            setShow(true);
                            setFormInfor(record)
                        }, // 点击行
                    };
                }} />

                <Modal title="Basic Infor" open={show} onOk={handleOk} onCancel={handleCancel}>
                    <AntForm
                        name="basic"
                        onFinish={onFinish}
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
