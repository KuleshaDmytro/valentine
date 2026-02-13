import './App.css'
import { FloatingHearts } from './components/FloatingHearts/FloatingHearts'
import { ValentineCard } from './components/ValentineCard/ValentineCard'
import openingImg from './jpg/opening2.png'

function App() {

  return (
    <>
      <FloatingHearts />        
        <div style={{display: "grid", placeItems: "center" }}>
          <ValentineCard resultImgSrc={openingImg} />
        </div>
    </>
  )
}

export default App
