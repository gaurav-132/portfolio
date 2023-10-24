import Header from './components/Header/Header';
import MainContainer from './components/Body/MainContainer';
import Sidebar from './components/Sidebar/Sidebar';
import Top from './components/Sidebar/Top';
import  './App.css';



function App() {
  return (
    <div className="h-[100vh] overflow-auto  bg-primary">
        <aside className='hidden lg:flex h-screen fixed w-screen sm:w-[300px] z-30'>
            <div className='toggle flex flex-col lg:m-5 w-full'>
                <Top/>
                <Sidebar/>
            </div>
        </aside>
        <main className='flex-1 lg:pl-[300px] bg-primary'>
            <Header/>
            <MainContainer/>
        </main>
    </div>
  );
}

export default App;
