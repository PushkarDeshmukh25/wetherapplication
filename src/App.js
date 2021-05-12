
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Link,Switch} from "react-router-dom"
import Login from './components/Login';
import Mainpage from './components/Mainpage'
 import Logout from './components/Logout'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (

    <Provider store={store}>
    
     <Switch>
    <Route exact path="/" component={Login} />
     <Route  path="/mainpage" component={Mainpage} />
      <Route  path="/logout" component={Logout} /> 
     </Switch> 
     </Provider>
  );
}

export default App;
