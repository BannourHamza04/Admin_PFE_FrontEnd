import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatsService from '../../Services/StatsService';
import Cookies from 'js-cookie';

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
        } catch (error) {
            console.error('Error fetching Stats:', error);
        }
    };

    useEffect(() => {
        fetchStats()
    },[stats]);

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
                        <h4 className="stats-type mb-1">Number of Posts</h4>
                        <div className="stats-figure">{stats.countPosts}</div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="app-card app-card-stat shadow-sm h-100">
                    <div className="app-card-body p-3 p-lg-4">
                        <h4 className="stats-type mb-1">Number of Likes</h4>
                        <div className="stats-figure">{stats.countLikes}</div>
                    </div>
                    <a className="app-card-link-mask" href="#"></a>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="app-card app-card-stat shadow-sm h-100">
                    <div className="app-card-body p-3 p-lg-4">
                        <h4 className="stats-type mb-1">number of comments per post</h4>
                        <div className="stats-figure">{stats.avgCommentsPerPost}</div>
                    </div>
                    <a className="app-card-link-mask" href="#"></a>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="app-card app-card-stat shadow-sm h-100">
                    <div className="app-card-body p-3 p-lg-4">
                        <h4 className="stats-type mb-1">Average number of posts per user</h4>
                        <div className="stats-figure">{stats.avgPostsPerUser}</div>
                    </div>
                    <a className="app-card-link-mask" href="#"></a>
                </div>
            </div>

            <div className="col-6 col-lg-3">
                <div className="app-card app-card-stat shadow-sm h-100">
                    <div className="app-card-body p-3 p-lg-4">
                        <h4 className="stats-type mb-1">Average age of users</h4>
                        <div className="stats-figure">{stats.avgAge}</div>
                    </div>
                    <a className="app-card-link-mask" href="#"></a>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="app-card app-card-stat shadow-sm h-100">
                    <div className="app-card-body p-3 p-lg-4">
                        <h4 className="stats-type mb-1">User with the most followers</h4>
                        <div className="stats-figure">{stats.topFollowerUser}</div>
                        <div className="stats-meta">
                            {/* {stats.topFollowerUser.name} */}
                        </div>
                    </div>
                    <a className="app-card-link-mask" href="#"></a>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="app-card app-card-stat shadow-sm h-100">
                    <div className="app-card-body p-3 p-lg-4">
                        <h4 className="stats-type mb-1">number of nationalities</h4>
                        <div className="stats-figure">{stats.countNationalities}</div>
                    </div>
                    <a className="app-card-link-mask" href="#"></a>
                </div>
            </div>
        </div>
    )
}
