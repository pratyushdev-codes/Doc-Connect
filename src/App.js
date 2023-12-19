
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Newsfetcher from './Components/Newsfetcher';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <News/>
   
    </div>
  );
}

export default App;
