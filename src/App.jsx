import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'
import FormSec from './Form Section/form.jsx'
import Header from './Header/Header.jsx'
import Imagesection from './ImageSection/imagesection.jsx'
import Table from './Table Section/table.jsx'
import Footer from './Footer/Footer.jsx'
import Video from './Video/video.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Video/>
      <Imagesection/>
      <Table/>
      <FormSec/>
      <Footer/>
    </div>
   )
  }
     
  export default App
