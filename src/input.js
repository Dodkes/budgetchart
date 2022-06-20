import { FcHome } from "react-icons/fc"; //define icon here, then add a component
import { FcPuzzle } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import DoughnutChart from './chart'
import {useState} from 'react'

let livingData = []
let transportData = []
let hobbyData = []
const livingLabels = ['rental', 'TV / phone / internet', 'maintenance / house modernisation', 'savings / investings / mortgage', 'grocery', 'other living costs' ]
const transportLabels = ['public transport', 'fuel', 'car maintenance / leasing', 'other transport costs']
const hobbyLabels = ['bars / restaurants / cafes', 'hairdresser / cosmetics', 'wellness / self care', 'doctor / medicine', 'sport', 'other hobby costs']

function InputItem(props){
    function handleChange(event){
        switch(event.target.id){
            case 'rental': livingData[0] = parseInt(event.target.value)
                break;
            case 'TV / phone / internet': livingData[1] = parseInt(event.target.value)
                break;
            case 'maintenance / house modernisation': livingData[2] = parseInt(event.target.value)
                break;
            case 'savings / investings / mortgage': livingData[3] = parseInt(event.target.value)
                break;
            case 'grocery': livingData[4] = parseInt(event.target.value)
                break;
            case 'other living costs': livingData[5] = parseInt(event.target.value)
                break;
            case 'public transport': transportData[0] = parseInt(event.target.value)
                break;
            case 'fuel': transportData[1] = parseInt(event.target.value)
                break;
            case 'car maintenance / leasing': transportData[2] = parseInt(event.target.value)
                break;
            case 'other transport costs': transportData[3] = parseInt(event.target.value)
                break;
            case 'bars / restaurants / cafes': hobbyData[0] = parseInt(event.target.value)
                break;
            case 'hairdresser / cosmetics': hobbyData[1] = parseInt(event.target.value)
                break;
            case 'wellness / self care': hobbyData[2] = parseInt(event.target.value)
                break;
            case 'doctor / medicine': hobbyData[3] = parseInt(event.target.value)
                break;
            case 'sport': hobbyData[4] = parseInt(event.target.value)
                break;
            case 'other hobby costs': hobbyData[5] = parseInt(event.target.value)
                break;
            default:;
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
                backgroundColor: ['blueviolet','aqua'],
                borderColor: 'black',
                borderWidth: 1,
            }],
    })

    const [dataTransport, setDataTransport] = useState({
        labels: transportLabels,
        datasets: [{
                data: livingData,
                backgroundColor: ['blueviolet','aqua'],
                borderColor: 'black',
                borderWidth: 1,
            }],
    })

    const [dataHobby, setDataHobby] = useState({
        labels: hobbyLabels,
        datasets: [{
                data: livingData,
                backgroundColor: ['blueviolet','aqua'],
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
                <InputItem title='rental' myFunc={updateChart}/>
                <InputItem title='public transport' myFunc={updateChart}/>
                <InputItem title='bars / restaurants / cafes' myFunc={updateChart}/>
                <InputItem title='TV / phone / internet' myFunc={updateChart}/>
                <InputItem title='fuel' myFunc={updateChart}/>
                <InputItem title='hairdresser / cosmetics' myFunc={updateChart}/>
                <InputItem title='maintenance / house modernisation' myFunc={updateChart}/>
                <InputItem title='car maintenance / leasing' myFunc={updateChart}/>
                <InputItem title='wellness / self care' myFunc={updateChart}/>
                <InputItem title='savings / investings / mortgage' myFunc={updateChart}/>
                <InputItem title='other transport costs' myFunc={updateChart}/>
                <InputItem title='doctor / medicine' myFunc={updateChart}/>
                <InputItem title='grocery' myFunc={updateChart}/>
                <p></p>{/* emty element for grid space*/}
                <InputItem title='sport' myFunc={updateChart}/>
                <InputItem title='other living costs' myFunc={updateChart}/>
                <p></p>{/* emty element for grid space*/}
                <InputItem title='other hobby costs' myFunc={updateChart} />
            </form>
            <DoughnutChart dataLiving={dataLiving} dataTransport={dataTransport} dataHobby={dataHobby}/>
        </div>
    )
}

export default Input
