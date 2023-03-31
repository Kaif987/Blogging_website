import Homepage from "./Pages/Homepage"
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </div>
  )
}

export default App
