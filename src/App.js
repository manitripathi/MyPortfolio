import './App.css';
import Cover from './components/Cover/cover';
import About from './components/About/about';
import Navbar from './components/Navbar/navbar';
import Resume from './components/Resume/resume';
import MyPortfolio from './components/myPortfolio/myPortfolio';
import Contact from './components/Contact/contact';

function App() {
  return ( 
    <div className="App" id='App'>
      <Navbar/>
      <Cover/>
      <About/>
      <MyPortfolio/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;
