
import './App.css';
import Card from './componets/Card';
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
        <Card
          img ="sing.jpg"
          rating = {5.0}
          reviewCount = {6}
          country = "USA"
          title = "Learn to imrpove your expressions"
          price = {120} 
        />
      </main>

    </div>
  );
}

export default App;
