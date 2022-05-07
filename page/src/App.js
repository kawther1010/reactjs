import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import product__img from './HS301.png';

import { Container, Row, Col } from 'react-bootstrap';

function App() {
  function add() {
    document.getElementById('notification').style.display='block';
    setTimeout(()=>{
      document.getElementById('notification').style.display='none';
  },8000);
  }
  function close() {
    document.getElementById('notification').style.display='none';
  }
/*
  const btn = document.getElementById("btn");
  const container = document.getElementById("container");
  btn.addEventListener('click', () =>{
    createnotification();
  });
  function createnotification(){
    const notif = document.createElement('div');
    notif.classList.add('toast');
    container.appendChild(notif);
    notif.innerText = "This challenge is crazy!!!!!!"
    setTimeout(()=>{
        notif.remove();
    },3000);
  }
*/


  return (
    <div className='body'>
      <div className='notification' id='notification'>
        <button className='notification__btn' onClick={close}>X</button>
        <h4>Added</h4>
      </div>
      <Container>
        <Row>
          <Col lg={5}>
            <br/><br/><br/><br/><br/><br/>
            <h2>Aures Horns HS30</h2>
            <p>
              Headphones for gamers with RGB lighting. Compatible with PS4 and XBOX game consoles. Adapter included.

              Headphone Parameters:
              Diameter: Ø 50 mm
              Sensitivity: 110 ± 3dB
              Impedance: 22 Ω
              Frequency Response: 20-20000Hz
            </p>
            <br/><br/><br/>
            <button id='button' className='btn' onClick={add}> <b>Buy</b> </button>
          </Col>
          <Col lg={7}>
            <img className='product__img' src={product__img} alt='product' />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
