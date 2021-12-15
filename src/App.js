import './App.css';
import Routers from './configs/routes';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <>
     <BrowserRouter>
      <Routers/>
     </BrowserRouter>
    </>
  );
}

export default App;
