import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Assets/Components/header';
import Footer from './Assets/Components/footer';
import Welcome from './Assets/Components/welcome';
import About from './Assets/Components/about';  
import {Routes, Route } from 'react-router-dom';
 
function App() {
  return (
    <div >
       <Header/>
       <Routes> 
       <Route path={'/Get Started'}element={<About/>}/>  
       <Route path={'/'}element={<Welcome/>}/>  
       
       
       </Routes> 
       <Footer/> 
    </div>
  );
}

export default App;
 