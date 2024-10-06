import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#8EACCD] ">
        <div className="navbar sticky top-0 z-50 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
            <a className="btn btn-ghost text-xl">Countries</a>
          </div>
          <div className="navbar-center hidden lg:flex text-white ">
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
          <div className="navbar-end">
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
