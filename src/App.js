import logo from './logo.svg';
import './App.css';


import Brewery from './components/Brewery';
import Login from './components/Login';

function App() {
  return (
    <div className='container'>
    <div className="row justify-content-center">
      <div>
        <Brewery />
      </div>
      <div>
       <Login />
      </div>
    </div>
    </div>
  );
}

export default App;
