import React, {useState, useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import {Table as AntTable} from "antd";
import Container from "react-bootstrap/Container";

// import {usertable} from "../data/Mock_usertbale";
// import {bookuser} from "../data/Mock_bookuser";
// import {bookName} from "../data/Mock_book";
// import {m_data} from "../data/Mock_data";

import {getAllSecurities,getAllBookUsers,getAllBooks,getAllUsers} from '../service/security-service';


import "../App.css";



const MyPortfolio = () => {
    const [list, setList] = useState([]);
    const [bonds, setBonds] = useState([]);
    const [users, setUsers] = useState([]);
    const [books, setBooks] = useState([]);
    const [bookusers, setBookusers] = useState([]);

    // 
    useEffect(() => {
        getBondsFromAPI();

        
        },
        []
    );

    const getBondsFromAPI = () => {
        //bonds
        getAllSecurities()
            .then(res => {
                setBonds(res.data);
            })
            .catch(err => {
                setBonds([]);
                console.log(err);
            })

        //bookusers
        getAllBookUsers()
            .then(res => {
                setBookusers(res.data);
            })
            .catch(err => {
                setBookusers([]);
                console.log(err);
            })

        getAllBooks()
            .then(res => {
                setBooks(res.data);
            })
            .catch(err => {
                setBooks([]);
                console.log(err);
            })

        getAllUsers()
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => {
                setUsers([]);
                console.log(err);
            })   
        
        };






    // Filter call
    const getInforList = () => {
        //const email = "wlude3@tripod.com"; // temporarily a definite one, will change automatically later
        const email = localStorage.getItem("userEmail");
        // const useId = filterId(usertable, "email", email, "user_id").length > 0 ? filterId(usertable, "email", email, "user_id")[0] : "";
        // const bookArr = filterId(bookuser, "user_id", useId, "book_id");
        const useId = filterId(users, "email", email, "id").length > 0 ? filterId(users, "email", email, "id")[0] : "";
        console.log(useId)
        const bookArr = filterId(bookusers, "userId", useId, "bookId");
        console.log(bookArr);
        if (bookArr.length > 0) {
            const bookNameArr = filterObjectsByProperty(books, bookArr, "id");
            console.log('ola');
            console.log(bookNameArr);
            const list = filterObjectsByProperty(bonds, bookNameArr, "bookName",'name');
            console.log('Olala');
            console.log(list);
            setList(list)
        } else {
            setList([])
        }
    };

    // Filter Method
    const filterId = (data, p, compare, rp) => {
        if (data.length > 0) {
            const getData = data.filter(item => {
                return item[p] == compare
            });
            return getData.map(item => item[rp])
        } else {
            return []
        }
    };

    const filterObjectsByProperty = (array1, array2, property, property2) => {
        const filteredArray = [];

        for (let obj1 of array1) {
            const obj1Property = obj1[property];

            for (let obj2 of array2) {
                const obj2Property = property2 ? obj2[property2] : obj2;

                if (obj1Property === obj2Property) {
                    filteredArray.push(obj1);
                    break; // 如果找到了匹配的对象，跳出第二层循环
                }
            }
        }

        return filteredArray;
    }


    useEffect(() => {
        getInforList();
    }, []);

    // const formItemLayout = {
    //         labelCol: {
    //             xs: { span: 24 },
    //             sm: { span: 6 },
    //         },
    //         wrapperCol: {
    //             xs: { span: 24 },
    //             sm: { span: 24 },
    //         },
    //     };
    //     const formItemEditLayout = {
    //         labelCol: {
    //             xs: { span: 4 },
    //             sm: { span: 6 },
    //         },
    //         wrapperCol: {
    //             xs: { span: 24 },
    //             sm: { span: 16 },
    //         },
    //     };

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'isin',
            dataIndex: 'isin',
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
            sorter: (a, b) => b.issuerName.localeCompare(a.issuerName),
        },
        {
            title: 'maturityDate',
            dataIndex: 'maturityDate',
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
            sorter: (a, b) => b.currency.localeCompare(a.currency),
        },
        {
            title: 'status',
            dataIndex: 'status',
            sorter: (a, b) => b.status.localeCompare(a.status),
        },
        {
            title: 'bookName',
            dataIndex: 'bookName',
            sorter: (a, b) =>  b.status.localeCompare(a.status),
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    // const [search, setSearch] = useState('');
    // const onChange = (pagination, filters, sorter, extra) => {
    //     console.log('params', pagination, filters, sorter, extra);
    // };
    // const onFinish = (value) =>{
    //     console.log(value);
    // };
    // const handleOk = () => {
    //     setFormInfor({});
    //     setShow(false);
    // };
    // const handleCancel = () => {
    //     setFormInfor({});
    //     setShow(false);
    // };

    return (
        <div className='background-image'>
            <Sidebar/>

            <div className="bodyWidth">

                <Container>
                    <h1 className={'h1Margin text-center mt-4'}>My Portfolio</h1>
                    <AntTable columns={columns} dataSource={list} onChange={onChange} pagination={false} scroll={{ x: "100%" }}/>
                </Container>
            </div>

        </div>
    )
}

export default MyPortfolio
