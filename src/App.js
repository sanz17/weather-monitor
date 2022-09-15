//import logo from './logo.svg';
import './App.css';
import Loginpage from './components/Loginpage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap'

function App() {
  return (
    <div className="App" style={{'backgroundColor':'#0e444e','backgroundImage':'../image/floral.jpg'}}>
      <Loginpage/>
    </div>
  );
}

export default App;