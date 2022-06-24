import { FcHome } from "react-icons/fc"; //define icon here, then add a component
import { FcPuzzle } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import DoughnutChart from './chart'
import {useState} from 'react'

let livingData = [0, 0, 0, 0 ,0 ,0, 0]
//let livingCosts = 0
let transportData = [0]
let hobbyData = [0]
const livingLabels = ['rental', 'TV / phone / internet', 'maintenance / house modernisation', 'savings / investings / mortgage', 'grocery', 'other living costs', 'income' ]
const transportLabels = ['public transport', 'fuel', 'car maintenance / leasing', 'other transport costs', 'income']
const hobbyLabels = ['bars / restaurants / cafes', 'hairdresser / cosmetics', 'wellness / self care', 'doctor / medicine', 'sport', 'other hobby costs', 'income']

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
            case 'Income':  livingData[6] = parseInt(event.target.value)
                            hobbyData[6] = parseInt(event.target.value) 
                            transportData[4] = parseInt(event.target.value)
                break;
            default:;
        }
    //     updateCosts()

    //     function updateCosts() {
    //     livingCosts = 0
    //     for (let i = 0; i < livingData.length - 1; i++) {
    //         livingCosts += livingData[i]
    //     }

    //     console.log('livingData[6] su o 1 pozadu a su ' + livingData[6])
    //     let x = livingData[6] - livingCosts
    //     livingData[6] = x
    // }
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
                backgroundColor: ['#8A2BE2','#bf8aef', '#e2caf8', '#f2ffff', '#b2ffff', '#00FFFF', '#000000'],
                borderColor: 'black',
                borderWidth: 1,
            }],
    })

    const [dataTransport, setDataTransport] = useState({
        labels: transportLabels,
        datasets: [{
                data: transportData,
                backgroundColor: ['#8A2BE2','#bf8aef', '#b2ffff', '#00FFFF', '#000000'],
                borderColor: 'black',
                borderWidth: 1,
            }],
    })

    const [dataHobby, setDataHobby] = useState({
        labels: hobbyLabels,
        datasets: [{
                data: hobbyData,
                backgroundColor: ['#8A2BE2','#bf8aef', '#e2caf8', '#f2ffff', '#b2ffff', '#00FFFF', '#000000'],
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
                <InputItem title='Income' myFunc={updateChart} />
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
