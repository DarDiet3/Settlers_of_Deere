import { Redirect, Route, Switch } from 'react-router';
import { useSelector, useDispatch} from 'react-redux';

import {currentUser, setCurrentUser} from "./features/gameMetaDataSlice";
import Gameboard from "./components/GameBoard";
import LoginForm from "./components/LoginForm"; 
import { signupUser, loginUser, VerifyUser} from "./services/api_helper";


function App() {
  return (
    <div className="App">
      <Route path="/signup" render={() => (
        <LoginForm/>
      )} />
      <Gameboard/>
    </div>
  );
}

export default App;
