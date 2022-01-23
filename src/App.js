
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="docter">
      <Navbar title="TextCount"/>
      <div className="container mb-5">
      <TextForm heading="Enter the text to analyse."/>
      </div>
    </div>

  );
}

export default App;
