import cn from 'classnames'
import './StatisticsItem.scss'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const StatisticsItem = ({ title, count, percent, className, color, dataPoints, dataLabels }) => {
    const classItem = cn(
        className,
        'statistics-item'
    )

    const data = {
        labels: dataLabels,
        datasets: [
            {
                label: title,
                data: dataPoints,
                fill: false,
                borderColor: "#fff",
                borderWidth: 1,
                pointBorderColor: "#fff",
                pointBorderWidth: 1,
                pointRadius: 4,
                tension: 0.4,
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    labelColor: function(tooltipItem, chart) {
                        return {
                            backgroundColor: color
                        }
                    },
                },
                position: 'nearest',
                boxWidth: 9,
                boxHeight: 9,
                backgroundColor: 'rgba(4, 0, 30, 0.8)',
                cornerRadius: 4,
                borderColor:'#000'
            }
        },
        layout: {
            padding: {
                bottom: 0
            }
        },
        scales: {
            y: {
                ticks: {
                    display: false
                },
                grid: {
                    drawBorder: false,
                    display: false
                }
            },
            x: {
                ticks: {
                    display: false
                },
                grid: {
                    drawBorder: false,
                    display: false
                }
            }
        },
    }

    return (
        <li className={classItem}>
            <p className="statistics-item__name">{title}</p>
            <div className="statistics-item__inner d-flex">
                <p className="statistics-item__count">{count}</p>
                <p className="statistics-item__percent">({percent}%)</p>
            </div>
            <div className="statistics-item__chart">
                <Line data={data} options={options} height='70' />
            </div>
        </li>
    )
}

export default StatisticsItem