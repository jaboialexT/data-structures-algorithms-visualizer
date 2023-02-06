import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React, { useState } from "react";

let structures = ["Stack", "Queue", "Linked List", "Tree", "Graph"];
let sortAlgorthims = ["Bubble Sort", "Insertion Sort", "Selection Sort"];
let pathfindingAlgorthims = ["Dijkstra's Algorithm", "A* Search Algorithm"];

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Data Structure & Algorithms Visualizer
      </Link>
      <ul>
        <CustomLink
          to="/DataStructures"
          className="link"
          title="Data Structures"
        >
          <DropdownMenu className="menu-item" menu={structures}></DropdownMenu>
        </CustomLink>
        <CustomLink to="/Pathfinding" className="link" title="Pathfinding">
          <DropdownMenu
            className="menu-item"
            menu={pathfindingAlgorthims}
          ></DropdownMenu>
        </CustomLink>
        <CustomLink to="/Sorting" className="link" title="Sorting">
          <DropdownMenu
            className="menu-item"
            menu={sortAlgorthims}
          ></DropdownMenu>
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const [open, setOpen] = useState(false);
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={open ? "active" : ""}>
      <Link to={to} {...props} onClick={() => setOpen(!open)}>
        {props.title}
      </Link>
      {open && children}
    </li>
  );
}

function DropdownMenu(props) {
  let array = [];
  function DropdownItem(props) {
    return (
      <Link to="#" className="menu-item">
        {props.children}
      </Link>
    );
  }
  for (let i = 0; i < props.menu.length; i++) {
    array[i] = <DropdownItem>{props.menu[i]}</DropdownItem>;
  }
  return <div className="dropdown">{array}</div>;
}
