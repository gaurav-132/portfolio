import Header from './components/Header/Header';
import MainContainer from './components/Body/MainContainer';
import './App.css';

function App() {
  return (
    <div className="App h-[100vh] bg-primary">
        <Header/>
        <MainContainer/>
    </div>
  );
}

export default App;
