
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowCard from './components/rowCards/RowCard';
import { genres } from './urls';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    {genres.map((genre, index) => (
        <RowCard key={index} url={genre.url} title={genre.title} isSmall={genre.title !== 'Netflix Originals'} />
      ))}
    </div>
  );
}

export default App;
  