
import './App.css';
import Card from './componets/Card';
import Hero from './componets/Hero';
import NavBar from './componets/NavBar';
import data from './data'
import { CardInterface } from './models/card-model';

const App: React.FC = () => {
  const cards = data.map((card) => {
    return ( <Card
      img = {card.coverImg}
      rating = {card.stats.rating}
      reviewCount = {card.stats.reviewCount}
      location ={card.location}
      title = {card.title}
      price = {card.price} 
    />
    )
  });
 
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
