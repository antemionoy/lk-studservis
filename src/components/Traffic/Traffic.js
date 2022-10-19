import './Traffic.scss'
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

const filter = [
    {
        name: 'За сегодня',
        value: 'today'
    },
    {
        name: 'За неделю',
        value: 'week'
    },
    {
        name: 'За месяц',
        value: 'month'
    },
    {
        name: 'За год',
        value: 'year'
    },
]


const Traffic = () => {
    // ChartJS.register(CategoryScale);/

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Second dataset",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                borderColor: "#742774"
            }
        ]
    };
    return (
        <section className="traffic">
            <div className="traffic__container container">
                <div className="traffic__content section">
                    <div className="traffic__top d-flex">
                        <div className="traffic__info">
                            <h2 className='traffic__title title title_h2'>Активность</h2>
                            <p className='traffic__range'>15 Июня - 21 Июня </p>
                        </div>
                        <ul className="traffic__filter">

                        </ul>
                    </div>
                    <div className="traffic__middle">
                        <Line data={data} />
                    </div>
                    <div className="traffic__bottom"></div>
                </div>
            </div>
        </section>
    )
}

export default Traffic