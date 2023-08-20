import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';
import 'chartjs-adapter-moment'; 
import './lineGraph.scss';

const LineGraph = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        axios
            .get('https://disease.sh/v3/covid-19/all')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const options = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                },
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Count',
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    };

    const chartData = {
        labels: [new Date(data.updated)],
        datasets: [
            {
                label: 'Cases',
                data: [data.cases],
                borderColor: 'rgb(75, 192, 192)',
                fill: false,
            },
            {
                label: 'Recovered',
                data: [data.recovered],
                borderColor: 'rgb(75, 192, 75)',
                fill: false,
            },
            {
                label: 'Deaths',
                data: [data.deaths],
                borderColor: 'rgb(192, 75, 75)',
                fill: false,
            },
        ],
    };

    return (
        <div className='lineChart'>
            <h2>Global COVID-19 Statistics</h2>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default LineGraph;