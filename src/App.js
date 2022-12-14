import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Brewery from './components/Brewery';
import Alert from './components/Alert'


function App() {
  return (
    <>
    <Alert message="test"/>
      <NavBar />
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-6 mt-3">
          <Brewery />
        </div>
      <div>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
