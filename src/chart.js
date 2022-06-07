import styles from './chart.module.css'
//CHART IMPORTS
import { chartData } from './input'
import { Doughnut } from 'react-chartjs-2'; //import Doughnut component
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; //po novom musime importovat a nizsie registrovat tieto veci
import { useState } from 'react';
ChartJS.register(ArcElement, Tooltip, Legend);

const labelData = ['rental', 'TV / phone / internet', 'maintenance / house modernisation', 
'savings / investings / mortgage', 'grocery', 'other living costs', 'public transport', 'fuel', 
'car maintenance / leasing', 'other transport costs', 'bars / restaurants / cafes',
'hairdresser / cosmetics', 'wellness / self care', 'doctor / medicine', 'sport', 'other hobby costs']

function DoughnutChart(){
const [data, setData] = useState({
    labels: labelData,
    datasets: [{
            data: chartData,
            backgroundColor: ['blueviolet','aqua'],
            borderColor: 'black',
            borderWidth: 1,
        }],
})
    function update() {
        setData({
            labels: labelData,
            datasets: [{
                    data: chartData,
                    backgroundColor: ['blueviolet','aqua'],
                    borderColor: 'black',
                    borderWidth: 1,
                }],
        })
    }
    return(
        <div>
            <h1 className={styles.color}>Doughnut Chart - unanimated</h1>
            <div className={styles.chartwidth}>
                <Doughnut data={data} />
                <button onClick={update}>Chart Update</button>
            </div>
        </div>
    )
}

export default DoughnutChart


//POKRACOVANIE
//Zistit ako pomocou onchange v <Input /> vyvolat funkciu ktora je v chart komponente