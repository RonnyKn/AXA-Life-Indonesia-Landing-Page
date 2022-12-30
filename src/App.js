import "./App.css"
import About from "./components/about/About"
import Benefit from "./components/benefit/Benefit"
import Form from "./components/form/Form"
import Header from "./components/header/Header"
import TopBar from "./components/topBar/TopBar"

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Benefit />
      <About />
      <Form />
    </>
  )
}

export default App
