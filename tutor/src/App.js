//import logo from './logo.svg';
import './App.css';

function App() {
  const uppername = (userName) => {
    return userName.toUpperCase();
  }
  let name = "kawther";
  const element = <h2>Heyyyyyy {uppername(name)}</h2>;
  return element;
}

export default App;
