import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <>
  <Navbar />
  <Switch>
  <Route exact path="/donor">
  <RegistrationForm type='Donor'/>
  </Route>
  <Route exact path="/recipient">
  <RegistrationForm type='Recipient'/>
  </Route>
  </Switch>
  </>
  );
}

export default App;
