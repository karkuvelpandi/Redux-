import Counter from "./Counter/Counter";
import {Provider} from "react-redux"
import {store} from './redux/Store'
function App() {
  return <>
<Provider store={store}>
<Counter/>
</Provider>

  <h1>Hello I'm app </h1>
  </>
   
  }

export default App;
