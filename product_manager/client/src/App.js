
import './App.css';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

///part3

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
        <Route path="/edit/:id" > 
         <Update/>
        </Route>
   </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
