import styles from './chart.module.css'
//CHART IMPORTS
import { myData } from './input'
import { Doughnut } from 'react-chartjs-2'; //import Doughnut component
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; //po novom musime importovat a nizsie registrovat tieto veci
ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart(){

    return(
        <div>
            <h1 className={styles.color}>Doughnut Chart - unanimated</h1>
            <div className={styles.chartwidth}>
                <Doughnut data={myData} />
               {/* <button onClick={update}>Chart Update</button> */}
            </div>
        </div>
    )
}

export default DoughnutChart

//Pomocou export viem presuvat data obojstranne -> skusit hladat export usestate
//podla navodov treba asi pouzit usecontext
//Problem je ze data treba poslat do ineho js suboru tym padom klasicky poslat usestate nejde

//Podla usecontext premenna v usestate sa da poslat hocikde, neviem ci aj funkcia usestate, preto
//usestate by mala byt asi definovana tam kde mam onchange event a premenna len presunuta do chart