
import './App.css';
import Card from './componets/Card';
import Hero from './componets/Hero';
import NavBar from './componets/NavBar';
import data from './data'
import { CardInterface } from './models/card-model';

const App: React.FC = () => {
  const cards = data.map((card: CardInterface) => {
    return ( <Card
      key = {card.id}
      img = {card.coverImg}
      alt = {card.alt}
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
        <section className="cards-list">
        {cards}
        </section>
      </main>
    </div>
  );
}

export default App;
