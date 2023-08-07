import React, {useEffect, useState} from 'react';
import Sidebar from '../components/Sidebar';
import Container from "react-bootstrap/Container";
import {Table, Col, Row, Form, Input, Button, Modal, DatePicker, Form as AntForm} from 'antd';
import dayjs from 'dayjs';
import {getAllSecurities} from '../service/security-service';
import "../App.css";
// import {m_data} from '../data/Mock_data';
// import locale from "dayjs";

const MaturityAnalysis = () => {
    const [show, setShow] = useState(false);
    const [formInfor, setFormInfor] = useState({});
    const [list, setList] = useState([]);
    const [value, setValue] = useState(dayjs().format("YYYY/MM/DD"));
    const [bonds, setBonds] = useState([]);

    
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
            })};


    useEffect(()=> {
        const data = filterId(bonds); //change data source
        setList(data);
    }, []);

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const onFinish = (value) => {
        console.log(value);
    };




    // filter_method
    const filterId = (data, val) => {
        if (data.length > 0) {
            const getData = data.filter(item => {
                const itemDiff = dayjs(val || value).diff(
                    item.maturity_date,
                    "day"
                );
                return item.maturity_date && Math.abs(itemDiff)<= 5
            });
            return getData
        } else {
            return []
        }
    };

    const handleOk = () => {
        setFormInfor({});
        setShow(false);
    };
    const handleCancel = () => {
        setFormInfor({});
        setShow(false);
    };
    const onChangeValue = (val) => {
        console.log(val);
        setValue(val);
        const data = filterId(bonds, val);
        setList(data); // bonds->list
    };

    const formItemLayout = {
        labelCol: {
            xs: {span: 24},
            sm: {span: 6},
        },
        wrapperCol: {
            xs: {span: 24},
            sm: {span: 16},
        },
    };
    const formItemEditLayout = {
        labelCol: {
            xs: {span: 4},
            sm: {span: 6},
        },
        wrapperCol: {
            xs: {span: 24},
            sm: {span: 16},
        },
    };

    const setRow = (row, index) => {
        if (row.maturity_date) {
            const Diff = dayjs(value).diff(
                row.maturity_date,
                "day"
            );
            if (Math.abs(Diff)<= 5){
                if (Diff >= 0) {
                    return "red"
                } else {
                    return "blue"
                }
            } else {
                return  ""
            }
        } else {
            return  ""
        }
    };

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            align: "center"
        },
        {
            title: 'maturity_date',
            dataIndex: 'maturity_date',
            align: "center"
        },
        {
            title: 'isin',
            dataIndex: 'isin',
            align: "center"
        },
        {
            title: 'cusip',
            dataIndex: 'cusip',
            align: "center"
        },
    ];

    return (
        <div className='background-image'>

            <div className="Sidebar">
                <div className="SidebarList">
                    <Sidebar/>
                </div>
            </div>

            <div className="bodyWidth zdyTable">
                <Container>
                    <h1 className={'h1Margin text-center mt-4'}>Maturity Analysis</h1>

                    <Row gutter={[16]} className="margin">
                        <Col>
                            <span style={{color: "#fff", padding: "0 5px"}}>date: </span> 
                            <DatePicker
                            defaultValue={dayjs(value, "YYYY/MM/DD")} format="YYYY/MM/DD" onChange={onChangeValue}/>
                        </Col>
                    </Row>

                    <Table pagination={false} columns={columns} rowClassName={setRow} dataSource={list} onChange={onChange} onRow={(record) => {
                        return {
                            onClick: (event) => {
                                console.log("12", record)
                                setShow(true);
                                setFormInfor(record)
                            }, // 点击行
                        };
                    }}/>

                    <Modal title="Basic Infor" open={show} onOk={handleOk} onCancel={handleCancel}>
                        <Form
                            name="basic"
                            onFinish={onFinish}
                            {...formItemEditLayout}
                            initialValues={{
                                ...formInfor
                            }}
                        >
                            <Row gutter={[16, 16]}>

                                <Col span={24}>
                                    <Form.Item
                                        label="id"
                                        name="id"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>

                                <Col span={24}>
                                    <Form.Item
                                        label="isin"
                                        name="isin"
                                    >
                                        <Input placeholder="Basic usage"/>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={[16, 16]}>

                                <Col span={24}>
                                    <Form.Item
                                        label="cusip"
                                        name="cusip"
                                    >
                                        <Input placeholder="Basic usage"/>
                                    </Form.Item>
                                </Col>

                                <Col span={24}>
                                    <Form.Item
                                        label="issuer_name"
                                        name="issuer_name"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>

                            </Row>

                            <Row gutter={[16, 16]}>
                                <Col span={24}>
                                    <Form.Item
                                        label="maturity_date"
                                        name="maturity_date"
                                    >
                                        <Input placeholder="Basic usage"/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item
                                        label="coupon"
                                        name="coupon"
                                    >
                                        <Input placeholder="Basic usage"/>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={[16, 16]}>
                                <Col span={24}>
                                    <Form.Item
                                        label="type"
                                        name="type"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>

                                <Col span={24}>
                                    <Form.Item
                                        label="face_value"
                                        name="face_value"
                                    >
                                        <Input placeholder="Basic usage"/>
                                    </Form.Item>
                                </Col>

                                <Col span={24}>
                                    <Form.Item
                                        label="currency"
                                        name="currency"
                                    >
                                        <Input placeholder="Basic usage"/>
                                    </Form.Item>
                                </Col>

                                <Col span={24}>
                                    <Form.Item
                                        label="status"
                                        name="status"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>

                            </Row>

                        </Form>
                    </Modal>
                </Container>
            </div>
        </div>

    )
}

export default MaturityAnalysis


