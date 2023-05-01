import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card';
function App() {
  let api = "https://rickandmortyapi.com/api/character"
  const [data, setData] = useState('')
  const [changeNumber, setChangeNumber] = useState(1)

  useEffect(() => {
    const fetchURL = async () => {
      const res = await fetch(api)
      const json = await res.json()
      setData(json.results)
    }

    fetchURL()


  }, [api])

  useEffect(() => {
    const newUrl = async () => {
      let api = 'https://rickandmortyapi.com/api/character?page=' + changeNumber
      const res = await fetch(api)
      const json = await res.json()
      setData(json.results)
    }
    newUrl()
  }, [changeNumber])



  return (
    <div className="App">
      <header>
        <h1>Rick and Morty Characters</h1>
      </header>

      <div className="main-container">
        <Card data={data} />
      </div>
        <div className="main-button">
          <button onClick={() => setChangeNumber(changeNumber + 1)} >+ Personagens</button>
        </div>

    </div>
  );
}

export default App;
