import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopNav from "./components/TopNav";

// component
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./booking/Home"
import PrivateRoute from "./components/PrivateRoute";
import DashBoard from "./user/DashBoard";
import DashBoardSeller from "./user/DashboardSeller";
import NewGlamping from "./glampings/NewGlamping";


const App = () => {
  return (
    <BrowserRouter>
    <TopNav />
    <ToastContainer position="top-center" />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/dashboard" component={DashBoard} />
      <PrivateRoute exact path="/dashboard/seller" component={DashBoardSeller} />
      <PrivateRoute exact path="/glampings/new" component={NewGlamping} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
