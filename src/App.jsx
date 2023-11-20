import './App.css'
import ButtonGoodbye from './components/ButtonGoodbye'
import ButtonHello from './components/ButtonHello'
import NavBar from './components/NavBar'

function App() {

  return (
    // THIS IS A FRAGMENT
    <>
      <NavBar />
      <ButtonHello buttonName="Hello!ress here" buttonClass="btn-hello" />
      <ButtonGoodbye >
        <h1>Hello</h1>
        <h1>Hello</h1>
      </ButtonGoodbye>
    </>
  )
}

export default App
