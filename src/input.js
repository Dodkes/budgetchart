import { FcHome } from "react-icons/fc"; //define icon here, then add a component
import { FcPuzzle } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";

function InputItem(props){
    function handleChange(event){ //zadame argument event
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
    }
    
    return(
        <label className='grid-item' title={props.title}>
                <div className="inputName">{props.title}</div>
                <input type='number' placeholder="0 €" id={props.title} onChange={handleChange}/>
        </label>
    )
}

function Input(){
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
                <InputItem title='rental' />
                <InputItem title='public transport' />
                <InputItem title='bars / restaurants / cafes' />
                <InputItem title='TV / phone / internet' />
                <InputItem title='fuel' />
                <InputItem title='hairdresser / cosmetics' />
                <InputItem title='maintenance / house modernisation' />
                <InputItem title='car maintenance / leasing' />
                <InputItem title='wellness / self care' />
                <InputItem title='savings / investings / mortgage' />
                <InputItem title='other transport costs' />
                <InputItem title='doctor / medicine' />
                <InputItem title='grocery' />
                <p></p>{/* emty element for grid space*/}
                <InputItem title='sport' />
                <InputItem title='other living costs' />
                <p></p>{/* emty element for grid space*/}
                <InputItem title='other hobby costs' />
            </form>
        </div>
    )
}

export let chartData = [0, 0, 0]
export default Input

//chartjs dynamic data pozriet