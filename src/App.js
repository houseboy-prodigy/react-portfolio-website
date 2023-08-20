import React from 'react';
import './App.css';
import SiteHeader from './components/SiteHeader';
import BodyComponent from './components/BodyComponent';
import Divider from './components/Divider'; // Import the Divider component
import './components/BodyComponent.css';
import AnimatedText from './components/AnimatedComponent';
import AnimatedTextWord from './components/AnimatedWord';
function App() {
  return (
    <div className="App">
    <Divider /> 
      <SiteHeader />
      <Divider /> 
      <div className="body-main">
      <AnimatedTextWord text="Hi My name is Anshul Narang" />
    </div>

      {/* Add another Divider component */}
      <Divider/>

      <footer className="App-footer">
        © Your Corporation Name Limited | {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
