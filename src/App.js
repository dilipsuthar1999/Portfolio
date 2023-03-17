import './App.css'
import Data from './Data/content.json'
import Body from './Components/Body';

function App() {
  return (
    <Body Data={Data} />
  )
}

export default App;
