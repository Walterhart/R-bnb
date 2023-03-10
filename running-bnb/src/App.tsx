
import './App.css';
import Hero from './componets/Hero';
import NavBar from './componets/NavBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main>
        <Hero/>
      </main>

    </div>
  );
}

export default App;
