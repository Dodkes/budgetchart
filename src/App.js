import Input from './input'
import Circles from './circles'
import $ from 'jquery' //import jquery

$(()=>{ //on document ready
  $('.jqueryContainer, .incomeContainer').show(1000, ()=>{
    $('.firstCircle, .secondCircleContainer').fadeIn(1000)
  })
})

function App() {
  return(
    <>
    <Circles />
    <Input />
    </>
  )
}

export default App
