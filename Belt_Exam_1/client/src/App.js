
import './App.css';
import Main from './views/Main';
import ShowPirate from './views/ShowPirate';
// import PirateCrew from './views/PirateCrew'

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
       
       {/* <Route path="/pirates">
          <PirateCrew />
        </Route> */}

        <Route path="/pirates/new">
          <Main />
        </Route>

        <Route path="/pirates/:id">
          <ShowPirate />
        </Route>
      
      </Switch>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
