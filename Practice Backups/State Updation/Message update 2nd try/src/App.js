import {Message} from "./Message/Message"
import {store} from './redux/store'
import {Provider} from "react-redux"
let App=()=>{
       return<>
       <Provider store={store}>
       <Message/>

       </Provider>
    
       </>
};
export default App