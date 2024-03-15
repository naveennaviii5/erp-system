import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import {
    BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line
} from 'recharts';
import { useNavigate } from 'react-router-dom';

import product from './Product';


function Home() {
    const navigate = useNavigate();

    const handleProductManagementClick = () => {
        // Navigate to the product page
        navigate('/product');
    };

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <main className='main-container'>
            <style>
                {`
                .main-container {
                    padding: 20px;
                }

                .main-title {
                    margin-bottom: 20px;
                }

                .button-container {
                    display: flex;
                    justify-content: flex-end;
                    margin-bottom: 20px;
                }

                .main-cards {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 20px;
                }

                .card {
                    flex: 1;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                    text-align: center;
                }

                .card-inner {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 10px;
                }

                .card h3 {
                    margin: 0;
                    font-size: 16px;
                }

                .card h1 {
                    margin: 0;
                    font-size: 24px;
                }

                .charts {
                    /* Styles for charts section */
                }
                `}
            </style>

            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            {/* Buttons for Product Management and Order Management */}
            <div className="button-container">
                <Button variant="primary" className="mr-2" onClick={handleProductManagementClick} >Product Management</Button>
                <Button variant="secondary">Order Management</Button>
            </div>

            {/* Rest of the Home component */}
            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>TOTAL PRODUCTS</h3>
                        <BsFillArchiveFill className='card_icon' />
                    </div>
                    <h1>300</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ORDERS</h3>
                        <BsFillGrid3X3GapFill className='card_icon' />
                    </div>
                    <h1>12</h1>
                </div>
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </main>
    );
}

export default Home;
