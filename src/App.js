import { Provider } from 'react-redux';
import store from './store';
import Home from './views/Home'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home/>
      </div>
    </Provider>
  );
}

export default App;
