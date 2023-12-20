
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import News from './Components/News';
import NewsHeader from './Components/NewsHeader';
import Newsfetcher from './Components/Newsfetcher';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <br/>

      <Header/>
      <NewsHeader/>
      <News/>
   
    </div>
  );
}

export default App;
