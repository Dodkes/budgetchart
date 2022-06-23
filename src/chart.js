import styles from './chart.module.css'

//CHART IMPORTS
import { Doughnut } from 'react-chartjs-2'; //import Doughnut component
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'; //po novom musime importovat a nizsie registrovat tieto veci
ChartJS.register(ArcElement, Tooltip);

function DoughnutChart(props){

    return(            
    <div className={styles.chartContainer}>
        {/* <h1 className={styles.color}>Doughnut Chart - unanimated</h1> */}
        <div className={styles.chartwidth}>
            <Doughnut data={props.dataLiving} />
                <ul className='legend'>
                    <li><span className={styles.firstLabel}>X</span>rental</li>
                    <li><span className={styles.secondLabel}>X</span>TV / phone / internet</li>
                    <li><span className={styles.thirdLabel}>X</span>maintenance / house modernisation</li>
                    <li><span className={styles.fourthLabel}>X</span>savings / investings / mortgage</li>
                    <li><span className={styles.fifthLabel}>X</span>grocery</li>
                    <li><span className={styles.sixthLabel}>X</span>other living costs</li>
                </ul>
        </div>
        <div className={styles.chartwidth}>
            <Doughnut data={props.dataTransport} />
            <ul className='legend'>
                    <li><span className={styles.firstLabel}>X</span>public transport</li>
                    <li><span className={styles.secondLabel}>X</span>fuel</li>
                    <li><span className={styles.fifthLabel}>X</span>car maintenance / leasing</li>
                    <li><span className={styles.sixthLabel}>X</span>other transport costs</li>
                </ul>
        </div>
        <div className={styles.chartwidth}>
            <Doughnut data={props.dataHobby} />
            <ul className='legend'>
                    <li><span className={styles.firstLabel}>X</span>bars / restaurants / cafes</li>
                    <li><span className={styles.secondLabel}>X</span>hairdresser / cosmetics</li>
                    <li><span className={styles.thirdLabel}>X</span>wellness / self care</li>
                    <li><span className={styles.fourthLabel}>X</span>doctor / medicine</li>
                    <li><span className={styles.fifthLabel}>X</span>sport</li>
                    <li><span className={styles.sixthLabel}>X</span>other hobby costs</li>
                </ul>
        </div>
    </div>
    )
}

export default DoughnutChart