import React, { useEffect,useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

export default function DoughnutChart({statsCharts}) {
    const [data, setData] = useState(null);
    const generateRandomColor = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); 
        return randomColor;
    };

    const getChartColors = (numColors) => {
        const chartColors = [];
        for (let i = 0; i < numColors; i++) {
            chartColors.push(generateRandomColor());
        }
        return chartColors;
    };

    const chartData = {
        labels: data ? data.map(item => item._id) : [],
        datasets: [{
            data: data ? data.map(item => item.averageAge) : [],
            backgroundColor: getChartColors(data ? data.length : 0),
            label: 'Average Age by Nationality'
        }]
    };

    useEffect(() => {
        setData(statsCharts.avgAgeByNationality)
    },[chartData]);

    return (
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <div className="app-card app-card-chart h-100 shadow-sm w-100">
                <div className="app-card-header p-3 border-0">
                    <h4 className="app-card-title text-center">Doughnut Chart Demo</h4>
                </div>
                <div className="app-card-body p-4 d-flex justify-content-center align-items-center">
                    <div className="chart-container" style={{ position: 'relative', height: '300px', width: '300px' }}>
                        <Doughnut data={chartData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

