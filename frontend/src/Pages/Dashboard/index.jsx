import React from 'react';
import SideBar from '../../Components/SideBar';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";
  
import './Dashboard.css';
function Dashboard() {

      
    const data = [
        {
            month: 'Jan',
            kwh: 4000,
        },
        {
            month: 'Feb',
            kwh: 3000,
        },
        {
            month: 'Mar',
            kwh: 2000,
        },
        {
            month: 'Apr',
            kwh: 2780,
        },
        {
            month: 'May',
            kwh: 1890,
        },
        {
            month: 'Jun',
            kwh: 2390,
        },
        {
            month: 'Jul',
            kwh: 3490,
        },
        {
            month: 'Aug',
            kwh: 4000,
        },
        {
            month: 'Sep',
            kwh: 3000,
        },
        {
            month: 'Oct',
            kwh: 2000,
        },
        {
            month: 'Nov',
            kwh: 2780,
        },
        {
            month: 'Dec',
            kwh: 1890,
        },
    ];

    const width = window.innerWidth - 300;
    const height = window.innerHeight - 600;
    
    
  return (
    <>
        <div className='dashboard__main'>
            <SideBar />
            <AreaChart
                width={width}
                height={height}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="kwh" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>

        {/* <TopBar /> */}
    </>
  );
}

export default Dashboard;
