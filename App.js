import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Search from"./components/main";
import Content from"./components/content"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <Content/>
      
    </div>
  );
}

export default App;
