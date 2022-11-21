import './App.css';
import Home from './Components/Home'
import Header from './Components/Header';
import About from './Components/About';

import Skills from './Components/Skills';
import MyProjects from './Components/MyProjects';



function App() {
    
    
    window.onbeforeunload = function () {
    window.scrollTo(0,0);
     }
    
  return (
    
    <div className="App">
      
      
      
        <Header/>
        <Home/>
        <About/>
        <Skills/>
       <MyProjects/>
      

    </div>
  );
}

export default App;
