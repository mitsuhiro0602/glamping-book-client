import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ToNav = () => {
  const dispatch = useDispatch()
  const {auth} = useSelector((state) => ({...state}));
  const history = useHistory()

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
      payload: null,
    });
    window.localStorage.removeItem('auth');
    history.push('/login');
  };

  return(
    <div className="nav bg-light d-flex justify-content-between">
      <Link className="nav-link" to="/">Home</Link>
      {
        auth !== null && (
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        )
      }
      { auth !== null && (
        <a className="nav-link pointer" href="/login" onClick={logout}>
          Logout
        </a>
      )}
      <Link className="nav-link" to="/register">Register</Link>
    </div>
  )
}




export default ToNav;
