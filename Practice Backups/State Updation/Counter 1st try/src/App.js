
import { Provider } from "react-redux"
import { store } from './redux/store'
import Counter from './Counter/Counter'
let App = () => {

       return <>
              <Provider store={store}>
                    
                     <Counter/>
              </Provider>
       </>
};
export default App