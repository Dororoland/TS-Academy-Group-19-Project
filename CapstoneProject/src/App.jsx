import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Imagesection from './ImageSection/imagesection.jsx'
import FormSec from './Form Section/form.jsx'
import Table from './Table Section/table.jsx'
import VideoSection from './Videos section/Videeosection.jsx'





function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     
     <Imagesection/>
     
     <p><FormSec></FormSec></p>
     <p><VideoSection/></p>
   
     
     
     
    
     



  </div>
  





)


  

}

export default App
