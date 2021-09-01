import { Link } from 'react-router-dom';

const DashboardNav = () => {
  const active = window.location.pathname;
  return (
    <ul className="nav nav-tabs">
      <li className="nav-items">
        <Link className={`nav-link ${active === '/dashboard' && "active"}`} to="/dashboard">
          予約ページ
        </Link>
      </li>
      <li className="nav-items">
        <Link 
          className={`nav-link ${active === '/dashboard/seller' && "active"}`} 
          to="/dashboard/seller"
        >
          予約したグランピング施設一覧
        </Link>
      </li>
    </ul>
  );
};

export default DashboardNav;