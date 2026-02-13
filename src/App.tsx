import './App.css'
import { FloatingHearts } from './components/FloatingHearts/FloatingHearts'
import { ValentineCard } from './components/ValentineCard/ValentineCard'

function App() {

  return (
    <>
      <FloatingHearts />        
        <div style={{display: "grid", placeItems: "center" }}>
          <ValentineCard/>
        </div>
    </>
  )
}

export default App
