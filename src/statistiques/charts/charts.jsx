import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import PieChart from './PieChart';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';
import BarChart from './BarChart';
import React, { useEffect, useState } from 'react';
import StatsService from '../../Services/StatsService';
import Cookies from 'js-cookie';

export default function Charts() {

    const token = Cookies.get('access_token');
    const [statsCharts, setStatsCharts] = useState({});
    const admin = JSON.parse(localStorage.getItem('admin_data'))

    const fetchStats = async () => {
        try {
            if (!token) {
                console.error('Token not found in cookies');
                return;
            }
            const headers = {
                'Authorization': `Bearer ${token}`
            };
            const response = await StatsService.getStatsCharts(headers)
            setStatsCharts(response.data.statsCharts);
            console.log(statsCharts)
        } catch (error) {
            console.error('Error fetching Stats:', error);
        }
    };

    useEffect(() => {
        fetchStats()
    },[]);

    return (
        <>
            <div className="app-wrapper">
                <div className="app-content pt-3 p-md-3 p-lg-4">
                    <div className="container-xl">
                        <h1 className="app-page-title">Overview</h1>
                        <div className="row g-4 mb-4">
                            <PieChart statsCharts={statsCharts}/>
                            <DoughnutChart statsCharts={statsCharts}/>
                            <LineChart statsCharts={statsCharts}/>
                            <BarChart statsCharts={statsCharts}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
