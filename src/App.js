import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./booking/Home"
import TopNav from "./components/TopNav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <BrowserRouter>
    <TopNav />
    <ToastContainer position="top-center" />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
