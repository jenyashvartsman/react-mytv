import { Container } from 'react-bootstrap';
import AddTvItemModal from './components/AddTvItemModal';
import TvCarousel from './components/TvCarousel';
import TvList from './components/TvList';

function App() {
  return (
    <Container>
      <TvCarousel />
      <TvList />
      <AddTvItemModal />
    </Container>
  );
}

export default App;
