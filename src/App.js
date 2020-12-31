import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Counter from './components/counter';
import Header from './components/Header';


function App() {
  return (
    <div>
      <Header/>
      <HelloWorld name="Wekesa"/>
    </div>
  );
}

export default App;
