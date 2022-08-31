
import './App.css';
import Main from './views/Main';
import Details from './views/Details';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/products">
          <Main />
        </Route>
        <Route path="/products/:id" > 
         <Details/>
        </Route>
   </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
