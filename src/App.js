import logo from './logo.svg';
import './App.css';


import Brewery from './components/Brewery';
import Login from './components/Login';

function App() {
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-6 mt-3">
        <Brewery />
        </div>
      <div>
      </div>
    </div>
    </div>
  );
}

export default App;
