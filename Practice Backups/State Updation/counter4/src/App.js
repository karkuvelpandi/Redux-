
import Counter from './counter/Counter';
import {store}from"./redux/store"
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
