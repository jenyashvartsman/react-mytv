import { Container } from 'react-bootstrap';
import AddTvItemModal from './components/AddTvItemModal';
import TvCarousal from './components/TvCarousal';
import TvList from './components/TvList';

function App() {
  return (
    <Container>
      <TvCarousal />
      <TvList />
      <AddTvItemModal />
    </Container>
  );
}

export default App;
