import React, { useEffect, useState } from 'react';
import Statistiques from '../statistiques/statistiques'
import { useNavigate } from 'react-router-dom';
import StatsService from '../Services/StatsService';
import Cookies from 'js-cookie';

export default function Dashboard() {
    
    const navigate = useNavigate();
    const [stats, setStats] = useState({});
    const admin = JSON.parse(localStorage.getItem('admin_data'))
    const userId = admin.id

    useEffect(() => {
        const token = Cookies.get('access_token');
        if(!token){
            navigate('/Login')
        }
    }, []);
    return (
        <>
            <div className="app-wrapper">
                <div className="app-content pt-3 p-md-3 p-lg-4">
                    <div className="container-xl">
                        <h1 className="app-page-title">Overview</h1>
                        <Statistiques />
                    </div>
                </div>
            </div>
        </>
    )
}
