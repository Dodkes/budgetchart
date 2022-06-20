import styles from './chart.module.css'

//CHART IMPORTS
import { Doughnut } from 'react-chartjs-2'; //import Doughnut component
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; //po novom musime importovat a nizsie registrovat tieto veci
ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart(props){

    return(            
    <div className={styles.chartContainer}>
        <h1 className={styles.color}>Doughnut Chart - unanimated</h1>
        <div className={styles.chartwidth}>
            <Doughnut data={props.dataLiving} />
        </div>
        <div className={styles.chartwidth}>
            <Doughnut data={props.dataTransport} />
        </div>
        <div className={styles.chartwidth}>
            <Doughnut data={props.dataHobby} />
        </div>
    </div>
    )
}

export default DoughnutChart