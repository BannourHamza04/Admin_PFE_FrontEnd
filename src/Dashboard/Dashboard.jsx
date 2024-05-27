import React from 'react'
import Statistiques from '../statistiques/statistiques'
export default function Dashboard() {
    return (
        <>
            <div className="app-wrapper">
                <div className="app-content pt-3 p-md-3 p-lg-4">
                    <div className="container-xl">
                        <h1 className="app-page-title">Overview</h1>
                            <Statistiques />
                            <div className="row g-4 mb-4">
                <div className="col-12 col-lg-6">
                    <div className="app-card app-card-chart h-100 shadow-sm">
                        <div className="app-card-header p-3">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-auto">
                                    <h4 className="app-card-title">Line Chart Example</h4>
                                </div>
                                <div className="col-auto">
                                    <div className="card-header-action">
                                        <a href="charts.html">More charts</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="app-card-body p-3 p-lg-4">
                            <div className="mb-3 d-flex">
                                <select className="form-select form-select-sm ms-auto d-inline-flex w-auto" defaultValue="1">
                                    <option value="1" >This week</option>
                                    <option value="2">Today</option>
                                    <option value="3">This Month</option>
                                    <option value="3">This Year</option>
                                </select>
                            </div>
                            <div className="chart-container">
                                <canvas id="canvas-linechart" ></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="app-card app-card-chart h-100 shadow-sm">
                        <div className="app-card-header p-3">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-auto">
                                    <h4 className="app-card-title">Bar Chart Example</h4>
                                </div>
                                <div className="col-auto">
                                    <div className="card-header-action">
                                        <a href="charts.html">More charts</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="app-card-body p-3 p-lg-4">
                            <div className="mb-3 d-flex">
                                <select className="form-select form-select-sm ms-auto d-inline-flex w-auto" defaultValue="1">
                                    <option value="1" >This week</option>
                                    <option value="2">Today</option>
                                    <option value="3">This Month</option>
                                    <option value="3">This Year</option>
                                </select>
                            </div>
                            <div className="chart-container">
                                <canvas id="canvas-barchart" ></canvas>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
                    </div>
                </div>
            </div>

        </>
    )
}
