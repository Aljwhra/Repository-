
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
import AddPet from './components/AddPet';
import Main from './views/Main';
import ShowPets from './views/ShowPets';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Switch>
       
        <Route exact path="/pets">
        <Main  />
        </Route> 

        <Route path="/pets/new">
         <AddPet/>
        </Route>

        <Route path="/pets/:id">
          <ShowPets />
        </Route>

        <Route path="/edit/:id">
          <Update />
        </Route>
      
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
