import Input from './input'
import Income from './income'
import Circles from './circles'
import ChartComponent from './chart'
//import ChartComponent from './chart'
import $ from 'jquery' //import jquery

$(()=>{ //on document ready
  $('.jqueryContainer, .incomeContainer').slideDown(1000, ()=>{
    $('.firstCircle, .secondCircle').fadeIn(1000)
  })
})

function App() {

  return(
    <>
    <Circles />
    <Income />
    <Input />
    <ChartComponent />
    </>
  )
}

export default App
