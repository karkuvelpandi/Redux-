
import { Provider } from "react-redux"
import { store } from './redux/store'
import Counter from './Counter/Counter'
import Message from './Message/Message'
let App = () => {

       return <>
              <Provider store={store}>
                     <Message />
                     <Counter />
              </Provider>
       </>
};
export default App