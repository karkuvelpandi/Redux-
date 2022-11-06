import User from "./User/User";
import {Provider} from "react-redux"
import {store} from './redux/store'
function App() {
  return <>
<Provider store={store}>
   <User/>
</Provider>

  <h1>Hello I'm app </h1>
  </>
   
  }

export default App;
