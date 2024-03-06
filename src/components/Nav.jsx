import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <header className="flex justify-center sm:justify-between py-4 px-5 md:px-10">
        <Link to="/" className="text-3xl font-semibold underline">
          <h1>MovieFlex</h1>
        </Link>
        <ul className="sm:flex gap-5 hidden text-lg">
          <li>
            <NavLink to="/popular">Popular</NavLink>
          </li>
          <li>
            <NavLink to="/series">Series</NavLink>
          </li>
          <li>
            <NavLink to="/trending">Trending</NavLink>
          </li>
        </ul>
      </header>
    </nav>
  );
};

export default Nav;
