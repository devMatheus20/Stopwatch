import React, { useState } from 'react'
import './styles.css'

function App() {

  const [intervalId, setIntervalId] = useState(0)
  
  const [number, setNumber] = useState(0)
  let [textButton1, setText] = useState('Iniciar')



  function stopWatch(number) {
    
    if (textButton1 === 'Iniciar') {

      const interval = setInterval(() => {

        number += 0.1
        setNumber(number)
       
      }, 100)

      setText("Pausar")
      setIntervalId(interval)
    }


    if (textButton1 === 'Pausar') {
      if(intervalId) {
        clearInterval(intervalId)

        setText("Iniciar")
        return
      }
    }
  }

  function clear(intervalId) {
    clearInterval(intervalId)

    setText('Iniciar')
    setNumber(0)
  }



  return (
    <div className='container'>
      <img src={require('../assets/cronometro.png')} alt='Imagem Cronometro' />

      <p>{number.toFixed(1)}</p>

      <div className='container-buttons'>
        <button onClick={() => stopWatch(number)}>{textButton1}</button>
        <button onClick={() => clear(intervalId)}>Limpar</button>
      </div>
    </div>
  )
}



export default App