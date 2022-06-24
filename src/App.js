import Input from './input'
import Circles from './circles'
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
    <Input />
    </>
  )
}

export default App
