import {Message} from './Message/Message'
import {Provider}from 'react-redux'
import {store} from './redux/store'
import Navbar from './Navbar/Navbar';
function App() {
  return <>
<Provider store={store}>
  <Navbar />
<Message/>
</Provider>
  
  </>
}

export default App;
