import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Data Structure & Algorithms Visualizer
      </Link>
      <ul>
        <CustomLink to="/DataStructures">Data Strucutures</CustomLink>
        <CustomLink to="/Pathfinding">Pathfinding</CustomLink>
        <CustomLink to="/Sorting">Sorting</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
