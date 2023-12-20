import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Assets/Components/header';
import Footer from './Assets/Components/footer';  
import Web3Section from './Assets/Components/section2';
import TwoImagesComponent from './Assets/Components/welcome';
 
function App() {
  return (
    <div >
       <Header/> 
       <TwoImagesComponent/>
       <Web3Section/>
     
       <Footer/> 
    </div>
  );
}

export default App;
 