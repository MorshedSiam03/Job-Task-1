const Navbar = () => {
  return (
    <>
      <div className="navbar  bg-black">
        
        <div className="flex justify-between items-center w-full max-w-screen-lg mx-auto">
          <div className="flex-1">
            <img src="/src/assets/Logo.svg" alt="" />
          </div>
          <div className="flex-none flex items-center justify-center space-x-2">
            <div className="dropdown dropdown-end">
              <div className=" hidden lg:flex justify-center items-center space-x-2">
              <div
                role="button"
                className="btn btn-ghost bg-[#2B2B2B] btn-circle"
              >
                <img src="/src/assets/Search.svg" alt="Search" />
              </div>
              <div
                role="button"
                className="btn btn-ghost bg-[#2B2B2B] btn-circle"
              >
                <img src="/src/assets/Pen.svg" alt="Pen" />
              </div>
              <div
                role="button"
                className="btn btn-ghost bg-[#2B2B2B] btn-circle"
              >
                <img src="/src/assets/mail.svg" alt="Mail" />
              </div>
              <div
                role="button"
                className="btn btn-ghost bg-[#2B2B2B] btn-circle"
              >
                <img src="/src/assets/Bell.svg" alt="Bell" />
              </div>
              <div
                role="button"
                className="btn btn-ghost bg-[#2B2B2B] btn-circle"
              >
                <img src="/src/assets/ThreeDot.svg" alt="More" />
              </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="Profile" src="/src/assets/Profile Pic.png" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            <div
                role="button"
                className="btn btn-ghost bg-[#2B2B2B] btn-circle lg:hidden"
              >
                <img src="/src/assets/menu.svg" alt="More" />
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
