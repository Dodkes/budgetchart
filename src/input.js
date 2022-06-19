import { FcHome } from "react-icons/fc"; //define icon here, then add a component
import { FcPuzzle } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import DoughnutChart from './chart'
import {useState} from 'react'

export let chartData = [0, 0, 0]
export const labelData = ['rental', 'TV / phone / internet', 'maintenance / house modernisation', 
'savings / investings / mortgage', 'grocery', 'other living costs', 'public transport', 'fuel', 
'car maintenance / leasing', 'other transport costs', 'bars / restaurants / cafes',
'hairdresser / cosmetics', 'wellness / self care', 'doctor / medicine', 'sport', 'other hobby costs']

function InputItem(props){
    function handleChange(event){
        switch(event.target.id){
            case 'rental': chartData[0] = parseInt(event.target.value)
                break;
            case 'TV / phone / internet': chartData[1] = parseInt(event.target.value)
                break;
            case 'maintenance / house modernisation': chartData[2] = parseInt(event.target.value)
                break;
            case 'savings / investings / mortgage': chartData[3] = parseInt(event.target.value)
                break;
            case 'grocery': chartData[4] = parseInt(event.target.value)
                break;
            case 'other living costs': chartData[5] = parseInt(event.target.value)
                break;
            case 'public transport': chartData[6] = parseInt(event.target.value)
                break;
            case 'fuel': chartData[7] = parseInt(event.target.value)
                break;
            case 'car maintenance / leasing': chartData[8] = parseInt(event.target.value)
                break;
            case 'other transport costs': chartData[9] = parseInt(event.target.value)
                break;
            case 'bars / restaurants / cafes': chartData[10] = parseInt(event.target.value)
                break;
            case 'hairdresser / cosmetics': chartData[11] = parseInt(event.target.value)
                break;
            case 'wellness / self care': chartData[12] = parseInt(event.target.value)
                break;
            case 'doctor / medicine': chartData[13] = parseInt(event.target.value)
                break;
            case 'sport': chartData[14] = parseInt(event.target.value)
                break;
            case 'other hobby costs': chartData[15] = parseInt(event.target.value)
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
    const [data, setData] = useState({
        labels: labelData,
        datasets: [{
                data: chartData,
                backgroundColor: ['blueviolet','aqua'],
                borderColor: 'black',
                borderWidth: 1,
            }],
    })

    const updateChartData = () => {
        setData({
            labels: labelData,
            datasets: [{
                    data: chartData,
                    backgroundColor: ['blueviolet','aqua'],
                    borderColor: 'black',
                    borderWidth: 1,
                }],
        })
        console.log(data)
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
                <InputItem title='rental' myFunc={updateChartData}/>
                <InputItem title='public transport' myFunc={updateChartData}/>
                <InputItem title='bars / restaurants / cafes' myFunc={updateChartData}/>
                <InputItem title='TV / phone / internet' myFunc={updateChartData}/>
                <InputItem title='fuel' myFunc={updateChartData}/>
                <InputItem title='hairdresser / cosmetics' myFunc={updateChartData}/>
                <InputItem title='maintenance / house modernisation' myFunc={updateChartData}/>
                <InputItem title='car maintenance / leasing' myFunc={updateChartData}/>
                <InputItem title='wellness / self care' myFunc={updateChartData}/>
                <InputItem title='savings / investings / mortgage' myFunc={updateChartData}/>
                <InputItem title='other transport costs' myFunc={updateChartData}/>
                <InputItem title='doctor / medicine' myFunc={updateChartData}/>
                <InputItem title='grocery' myFunc={updateChartData}/>
                <p></p>{/* emty element for grid space*/}
                <InputItem title='sport' myFunc={updateChartData}/>
                <InputItem title='other living costs' myFunc={updateChartData}/>
                <p></p>{/* emty element for grid space*/}
                <InputItem title='other hobby costs' myFunc={updateChartData} />
            </form>
            <DoughnutChart data={data}/>
        </div>
    )
}

export default Input
