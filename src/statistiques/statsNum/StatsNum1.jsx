import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatsService from '../../Services/StatsService';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'

export default function StatsNum() {

    const token = Cookies.get('access_token');
    const navigate = useNavigate();
    const [stats, setStats] = useState({});
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
            const response = await StatsService.getStates(headers)
            setStats(response.data.stats);
            console.log(stats)
        } catch (error) {
            console.error('Error fetching Stats:', error);
        }
    };

    useEffect(() => {
        if(!token){
            navigate('/Login')
        }
        fetchStats()
    }, []);
    
    return (
        <div className="row g-4 mb-4">
            <div className="col-6 col-lg-3">
                <div className="app-card app-card-stat shadow-sm h-100">
                    <div className="app-card-body p-3 p-lg-4">
                        <h4 className="stats-type mb-1">Number of Users</h4>
                        <div className="stats-figure"> {stats.countUsers} </div>
                    </div>
                    <a className="app-card-link-mask" href="#"></a>
                </div>
            </div>

            <div className="col-6 col-lg-3">
                <div className="app-card app-card-stat shadow-sm h-100">
                    <div className="app-card-body p-3 p-lg-4">
                        <h4 className="stats-type mb-1">Expenses</h4>
                        <div className="stats-figure">$2,250</div>
                        <div className="stats-meta text-success">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg> 5% </div>
                    </div>
                    <a className="app-card-link-mask" href="#"></a>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="app-card app-card-stat shadow-sm h-100">
                    <div className="app-card-body p-3 p-lg-4">
                        <h4 className="stats-type mb-1">Projects</h4>
                        <div className="stats-figure">23</div>
                        <div className="stats-meta">
                            Open</div>
                    </div>
                    <a className="app-card-link-mask" href="#"></a>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="app-card app-card-stat shadow-sm h-100">
                    <div className="app-card-body p-3 p-lg-4">
                        <h4 className="stats-type mb-1">Invoices</h4>
                        <div className="stats-figure">6</div>
                        <div className="stats-meta">New</div>
                    </div>
                    <a className="app-card-link-mask" href="#"></a>
                </div>
            </div>
        </div>
    )
}
