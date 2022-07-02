import { FcHome } from "react-icons/fc"; //icon
import { FcPuzzle } from "react-icons/fc"; //icon
import { FcInTransit } from "react-icons/fc"; //icon
import DoughnutChart from './chart'
import { useState } from 'react'

//chart data variables
let livingData, hobbyData
livingData  = [0, 0, 0, 0, 0, 0, 0]
hobbyData = [0, 0, 0, 0, 0, 0, 0]
let transportData = [0, 0, 0, 0, 0]

//chart costs variables -> means chart data computed
let livingCosts, transportCosts, hobbyCosts, income, netIncome, totalCosts
livingCosts = transportCosts = hobbyCosts = income = netIncome = totalCosts = 0

//chart colors variables
const colorsArray = ['#00FFFF','#b2ffff', '#f2ffff', '#e2caf8', '#bf8aef', '#8A2BE2', '#333333']
const [cyan, midCyan, lightCyan, lightPurple, midPurple, purple, black] = colorsArray

//whole app labels -> means chart, inputs, legend
const livingLabels = ['rental', 'TV / phone / internet', 'maintenance / house modernisation', 'savings / investings / mortgage', 'grocery', 'other living costs', 'income' ]
const transportLabels = ['public transport', 'fuel', 'car maintenance / leasing', 'other transport costs', 'income']
const hobbyLabels = ['bars / restaurants / cafes', 'hairdresser / cosmetics', 'wellness / self care', 'doctor / medicine', 'sport', 'other hobby costs', 'income']
export { livingLabels, transportLabels, hobbyLabels }

function InputItem(props){
    function handleChange(event){
        let activeInput
        (event.target.value === '' || event.target.value < 0) ? activeInput = 0 : activeInput = event.target.value
        
        let livingIndex = livingLabels.indexOf(event.target.id)
        let transportIndex = transportLabels.indexOf(event.target.id)
        let hobbyIndex = hobbyLabels.indexOf(event.target.id)

        if ( livingIndex >= 0 ) { livingData[livingIndex] = parseInt(activeInput) } 
        else if ( transportIndex >= 0 ) { transportData[transportIndex] = parseInt(activeInput) } 
        else if ( hobbyIndex >= 0 ) { hobbyData[hobbyIndex] = parseInt(activeInput) }

        if (event.target.id === livingLabels[6]) { income = parseInt(activeInput) }     

        updateCosts()
        function updateCosts() {
        livingCosts = hobbyCosts = transportCosts = 0

        for (let i = 0; i < livingData.length - 1; i++) {
                livingCosts += livingData[i]
                hobbyCosts += hobbyData[i]
        }

        for (let i = 0; i < transportData.length - 1; i++) {
            transportCosts += transportData[i]
        }

        livingCosts > income ? livingData[6] = 0 : livingData[6] = income - livingCosts
        transportCosts > income ? transportData[4] = 0 : transportData[4] = income - transportCosts
        hobbyCosts > income ? hobbyData[6] = 0 : hobbyData[6] = income - hobbyCosts
        
        totalCosts = livingCosts + transportCosts + hobbyCosts
        //console.log(totalCosts)
        totalCosts > income ? netIncome = 0 : netIncome = income - totalCosts
    }
        props.myFunc()
    }
    
    return(
        <label className='grid-item' title={props.title}>
                <div className="inputName">{props.title}</div>
                <input type='number' placeholder="0 €" id={props.title} onChange={handleChange}/>
        </label>
    )
}

function Input(){
    const [dataLiving, setDataLiving] = useState({
        labels: livingLabels,
        datasets: [{
                data: livingData,
                backgroundColor: [cyan, midCyan, lightCyan, lightPurple, midPurple, purple, black],
                borderColor: 'black',
                borderWidth: 1,
            }],
    })

    const [dataTransport, setDataTransport] = useState({
        labels: transportLabels,
        datasets: [{
                data: transportData,
                backgroundColor: [cyan, midCyan, midPurple, purple, black],
                borderColor: 'black',
                borderWidth: 1,
            }],
    })

    const [dataHobby, setDataHobby] = useState({
        labels: hobbyLabels,
        datasets: [{
                data: hobbyData,
                backgroundColor: [cyan, midCyan, lightCyan, lightPurple, midPurple, purple, black],
                borderColor: 'black',
                borderWidth: 1,
            }],
    })

    const [dataSummary, setDataSummary] = useState({
        labels: [ 'total costs', 'net income'],
        datasets: [{
                data: [totalCosts, netIncome],
                backgroundColor: [cyan, black],
                borderColor: 'black',
                borderWidth: 1,
            }],      
    })

    const updateChart = () => {
        setDataLiving({
            labels: livingLabels,
            datasets: [{data: livingData}],
        })

        setDataTransport({
            labels: transportLabels,
            datasets: [{data: transportData}],
        })
        setDataHobby({
            labels: hobbyLabels,
            datasets: [{data: hobbyData}],
        })
        setDataSummary({
            labels: [ 'total costs', 'net income'],
            datasets: [{data: [totalCosts, netIncome]}]
        })
    }

    return(
        <div className="jqueryContainer">
            <div className="income">
                <InputItem title={livingLabels[6]} myFunc={updateChart} />
            </div>
            <form className="grid-container">
                <div className="icon-container">
                    <FcHome className="home-icon" />
                </div>
                <div className="icon-container">
                    <FcInTransit className="transport-icon" />
                </div>
                <div className="icon-container">
                    <FcPuzzle className="puzzle-icon" />
                </div>
                <InputItem title={livingLabels[0]} myFunc={updateChart}/>
                <InputItem title={transportLabels[0]} myFunc={updateChart}/>
                <InputItem title={hobbyLabels[0]} myFunc={updateChart}/>
                <InputItem title={livingLabels[1]} myFunc={updateChart}/>
                <InputItem title={transportLabels[1]} myFunc={updateChart}/>
                <InputItem title={hobbyLabels[1]} myFunc={updateChart}/>
                <InputItem title={livingLabels[2]} myFunc={updateChart}/>
                <InputItem title={transportLabels[2]} myFunc={updateChart}/>
                <InputItem title={hobbyLabels[2]} myFunc={updateChart}/>
                <InputItem title={livingLabels[3]} myFunc={updateChart}/>
                <InputItem title={transportLabels[3]} myFunc={updateChart}/>
                <InputItem title={hobbyLabels[3]} myFunc={updateChart}/>
                <InputItem title={livingLabels[4]} myFunc={updateChart}/>
                <p></p>{/* emty element for grid space*/}
                <InputItem title={hobbyLabels[4]} myFunc={updateChart}/>
                <InputItem title={livingLabels[5]} myFunc={updateChart}/>
                <p></p>{/* emty element for grid space*/}
                <InputItem title={hobbyLabels[5]} myFunc={updateChart} />
            </form>
            <DoughnutChart dataLiving={dataLiving} dataTransport={dataTransport} dataHobby={dataHobby} dataSummary={dataSummary}/>
        </div>
    )
}

export default Input