import { useState } from 'react'
import './App.css'
import {Container, Faq, Header,  Navigation, Section } from './components'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
     <Header/>
     <Navigation/>
     <Section/>
     <Faq/>
    </Container>
    </>
  )
}

export default App
