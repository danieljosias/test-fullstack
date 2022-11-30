import FormClient from './components/FormClient'
import { GlobalStyle} from './styles/global';
import { Routes } from './routes'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Routes/>
      <FormClient/>
    </div>
  );
}

export default App;
