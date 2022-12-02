import { GlobalStyle} from './styles/global';
import { Routes } from './routes'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Routes/>
    </div>
  );
}

export default App;
