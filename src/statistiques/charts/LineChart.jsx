import React, { useEffect,useState } from 'react'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function LineChart({ statsCharts }){
    const [data, setData] = useState(null);

    const chartColors = {
        green: '#75c181', // rgba(117,193,129, 1)
        blue: '#5b99ea', // rgba(91,153,234, 1)
        gray: '#a9b5c9',
        text: '#252930',
        border: '#e7e9ed'
    };

    const labels = data ? data.map(item => `Week ${item._id.week}/${item._id.year}`) : [];
    const userCounts = data ? data.map(item => item.count) : [];

    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Users Added per Week',
            backgroundColor: "rgba(117,193,129,0.2)",
            borderColor: "rgba(117,193,129, 0.8)",
            data: userCounts,
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                align: 'end',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                titleMarginBottom: 10,
                bodySpacing: 10,
                padding: 16,
                borderColor: chartColors.border,
                borderWidth: 1,
                backgroundColor: '#fff',
                bodyColor: chartColors.text,
                titleColor: chartColors.text,
                callbacks: {
                    label: function (context) {
                        return context.raw ;
                    }
                },
            },
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            x: {
                display: true,
                grid: {
                    drawBorder: false,
                    color: chartColors.border,
                },
                title: {
                    display: false,
                }
            },
            y: {
                display: true,
                grid: {
                    drawBorder: false,
                    color: chartColors.border,
                },
                title: {
                    display: false,
                },
                ticks: {
                    beginAtZero: true,
                    callback: function (value) {
                        return value.toLocaleString();
                    }
                },
            }
        }
    };

    useEffect(() => {
        setData(statsCharts.usersPerWeek)
    },[chartData]);

    return (
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <div className="app-card app-card-chart h-100 shadow-sm w-100">
                <div className="app-card-header p-3 border-0">
                    <h4 className="app-card-title text-center">Line Chart Demo</h4>
                </div>
                <div className="app-card-body p-4 d-flex justify-content-center align-items-center">
                    <div className="chart-container" style={{ position: 'relative', height: '300px', width: '600px' }}>
                        <Line data={chartData} options={options} />
                    </div>
                </div>
            </div>
        </div>
    )
}
