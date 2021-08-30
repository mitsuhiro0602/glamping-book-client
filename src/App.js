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
import StripeCallback from "./stripe/StripeCallback";
import EditGlamping from "./glampings/EditGlamping";
import ViewGlamping from "./glampings/ViewGlamping";

import StripeCancel from "./stripe/StripeCancel";
import StripeSuccess from "./stripe/StripeSuccess";
import SearchResult from "./glampings/SearchResult";


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
      <PrivateRoute exact path="/glamping/edit/:glampingId" component={EditGlamping} />
      <Route exact path="/glamping/:glampingId" component={ViewGlamping} />
      <Route exact path="/search-result" component={SearchResult} />
      <PrivateRoute exact path="/stripe/callback" component={StripeCallback} />
      <PrivateRoute exact path="/stripe/success/:glampingId" component={StripeSuccess} />
      <PrivateRoute exact path="/stripe/cancel" component={StripeCancel} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
