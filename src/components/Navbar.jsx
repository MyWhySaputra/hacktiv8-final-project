import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-[#8EACCD] sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/compare">Compare Countries</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex text-[#fff]">
          <ul className="menu menu-horizontal menu-md px-1 gap-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/compare">Compare Countries</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
}
