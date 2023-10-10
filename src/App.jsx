import {  } from 'react'
import TextSize from './Components/TextSize'
import TextPerson from './Components/TextPerson'
import TextColor from './Components/TextColor'
import TextBackground from './Components/TextBackground'
import Imagens from './Components/Imagens'

function App() {

  return (
    <>
      <div className='container'>
        <TextSize />
        <TextPerson />
        <TextColor />
        <TextBackground />
        <Imagens />
      </div>
    </>
  )
}

export default App
