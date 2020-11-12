import { Redirect, Route, Switch } from 'react-router';
import { useSelector, useDispatch} from 'react-redux';

import {currentUser, setCurrentUser} from "./features/gameMetaDataSlice";
import Gameboard from "./components/GameBoard";
import LoginForm from "./components/SignUpForm"; 
import { signupUser, loginUser, VerifyUser} from "./services/api_helper";
import LandingPage from './components/LandingPage';


function App() {
  console.log(currentUser ? "yes" : "no")
  return (
    <div className="App">
      {currentUser ? 

        <Gameboard/>
        :
        <div>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/signup" component={LoginForm}/>
        </div>
    }
    </div>
  );
}

export default App;
