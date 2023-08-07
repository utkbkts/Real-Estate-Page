import { NavLink, Outlet } from "react-router-dom";
import Bradcrump from "../components/Bradcrump";

const RoutLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>UTKU Emlak</h1>
          <NavLink to="/">Anasayfa</NavLink>
          <NavLink to="/Hakkimizda">Hakkımızda</NavLink>
          <NavLink to="/help">Yardım</NavLink>
          <NavLink to="/konutlar">Konutlar</NavLink>
        </nav>
        <Bradcrump/>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default RoutLayout;
