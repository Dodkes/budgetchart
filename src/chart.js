import styles from './chart.module.css'
import { livingLabels, transportLabels, hobbyLabels } from './input';
//CHART IMPORTS
import { Doughnut, Pie } from 'react-chartjs-2'; //import Doughnut component
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'; //chart utilities have to be imported & registered
ChartJS.register(ArcElement, Tooltip);

function DoughnutChart(props){

    return(            
    <div className={styles.chartContainer}>
        <div className={styles.chartDoubleContainer}>
        <div className={styles.chartwidth}>
            <Doughnut data={props.dataLiving} />
                <ul className={styles.legend}>
                    <li><span className={styles.firstLabel}>X</span>{livingLabels[0]}</li>
                    <li><span className={styles.secondLabel}>X</span>{livingLabels[1]}</li>
                    <li><span className={styles.thirdLabel}>X</span>{livingLabels[2]}</li>
                    <li><span className={styles.fourthLabel}>X</span>{livingLabels[3]}</li>
                    <li><span className={styles.fifthLabel}>X</span>{livingLabels[4]}</li>
                    <li><span className={styles.sixthLabel}>X</span>{livingLabels[5]}</li>
                    <li><span className={styles.incomeLabel}>X</span>{livingLabels[6]}</li>
                </ul>
        </div>
        <div className={styles.chartwidth}>
            <Doughnut data={props.dataTransport} />
                <ul className={styles.legend}>
                        <li><span className={styles.firstLabel}>X</span>{transportLabels[0]}</li>
                        <li><span className={styles.secondLabel}>X</span>{transportLabels[1]}</li>
                        <li><span className={styles.fifthLabel}>X</span>{transportLabels[2]}</li>
                        <li><span className={styles.sixthLabel}>X</span>{transportLabels[3]}</li>
                        <li><span className={styles.incomeLabel}>X</span>{transportLabels[4]}</li>
                </ul>
        </div>
        </div>
        <div className={styles.chartDoubleContainer}>
        <div className={styles.chartwidth}>
            <Doughnut data={props.dataHobby} />
                <ul className={styles.legend}>
                        <li><span className={styles.firstLabel}>X</span>{hobbyLabels[0]}</li>
                        <li><span className={styles.secondLabel}>X</span>{hobbyLabels[1]}</li>
                        <li><span className={styles.thirdLabel}>X</span>{hobbyLabels[2]}</li>
                        <li><span className={styles.fourthLabel}>X</span>{hobbyLabels[3]}</li>
                        <li><span className={styles.fifthLabel}>X</span>{hobbyLabels[4]}</li>
                        <li><span className={styles.sixthLabel}>X</span>{hobbyLabels[5]}</li>
                        <li><span className={styles.incomeLabel}>X</span>{hobbyLabels[6]}</li>
                </ul>
        </div>
        <div className={styles.chartwidth}>
            <Pie data={props.dataSummary} />
                <ul className={styles.legend}>
                        <li className={styles.junk}>x</li>
                        <li className={styles.junk}>x</li>
                        <li className={styles.junk}>x</li>
                        <li><span className={styles.incomeLabel}>X</span>net income</li>
                        <li><span className={styles.firstLabel}>X</span>total costs</li>
                </ul>
        </div>
        </div>


    </div>
    )
}

export default DoughnutChart