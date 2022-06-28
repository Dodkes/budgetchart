import { FcHome } from "react-icons/fc"; //define icon here, then add a component
import { FcPuzzle } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import DoughnutChart from './chart'
import { useState } from 'react'

//chart data variables
let livingData, hobbyData
livingData  = [0, 0, 0, 0, 0, 0, 0]
hobbyData = [0, 0, 0, 0, 0, 0, 0]
let transportData = [0, 0, 0, 0, 0]

//chart costs variables -> means chart data computed
let livingCosts, transportCosts, hobbyCosts, income
livingCosts = transportCosts = hobbyCosts = income = 0

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
        
        switch(event.target.id){
            case livingLabels[0]: livingData[0] = parseInt(activeInput) 
                break;
            case livingLabels[1]: livingData[1] = parseInt(activeInput)
                break;
            case livingLabels[2]: livingData[2] = parseInt(activeInput)
                break;
            case livingLabels[3]: livingData[3] = parseInt(activeInput)
                break;
            case livingLabels[4]: livingData[4] = parseInt(activeInput)
                break;
            case livingLabels[5]: livingData[5] = parseInt(activeInput)
                break;
            case transportLabels[0]: transportData[0] = parseInt(activeInput)
                break;
            case transportLabels[1]: transportData[1] = parseInt(activeInput)
                break;
            case transportLabels[2]: transportData[2] = parseInt(activeInput)
                break;
            case transportLabels[3]: transportData[3] = parseInt(activeInput)
                break;
            case hobbyLabels[0]: hobbyData[0] = parseInt(activeInput)
                break;
            case hobbyLabels[1]: hobbyData[1] = parseInt(activeInput)
                break;
            case hobbyLabels[2]: hobbyData[2] = parseInt(activeInput)
                break;
            case hobbyLabels[3]: hobbyData[3] = parseInt(activeInput)
                break;
            case hobbyLabels[4]: hobbyData[4] = parseInt(activeInput)
                break;
            case hobbyLabels[5]: hobbyData[5] = parseInt(activeInput)
                break;
            case livingLabels[6]: income = parseInt(activeInput)
                break;
            default:;
        }      
        console.log(event.target.id)
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
            <DoughnutChart dataLiving={dataLiving} dataTransport={dataTransport} dataHobby={dataHobby}/>
        </div>
    )
}

export default Input
