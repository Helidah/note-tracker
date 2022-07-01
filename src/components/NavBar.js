import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("https://arcane-atoll-17408.herokuapp.com/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
      <div className=" font-bold text-lg flex items-center gap-x-1">
        <img src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/344/external-note-documents-icongeek26-outline-colour-icongeek26.png" width="30px" />
        <div className="tracking-wide dark:text-white">Note Tracker<span className="text-red-600">.</span></div>
      </div>

      <div className="mt-12 flex flex-col gap-y-4  fill-gray-500 text-sm">
        <div className="dark:text-white font-medium uppercase">Menu</div>
        <NavLink to="/"
          exact="true"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <p className="flex items-center space-x-2 py-1 dark:text-white borderme font-semibold  border-r-4 border-r-blue-600 pr-20">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
              <path d="M5 22h14v0c1.1 0 2-.9 2-2v-9 0c0-.27-.11-.53-.29-.71l-8-8v0c-.4-.39-1.02-.39-1.41 0l-8 8h0c-.2.18-.3.44-.3.71v9 0c0 1.1.89 2 2 2Zm5-2v-5h4v5Zm-5-8.59l7-7 7 7V20h-3v-5 0c0-1.11-.9-2-2-2h-4v0c-1.11 0-2 .89-2 2v5H5Z"></path>
            </svg>
            <span>Home</span>
          </p>
        </NavLink>

        <NavLink
          to="/new"
          exact="true"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <p className="flex items-center space-x-2 py-1 group hover:border-r-4 hover:border-r-blue-600 hover:font-semibold dark:hover:text-white">
            <span className="bg-blue-600 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="white">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
            </span>
            <span className="text-sm">New Note</span>
          </p>
        </NavLink>
        <button className="flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-blue-600 hover:font-semibold dark:hover:text-white">
          <svg className="h-5 w-5 group-hover:fill-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path d="M12 2C6.48 2 2 6.48 2 12c0 5.51 4.48 10 10 10 5.51 0 10-4.49 10-10 0-5.52-4.49-10-10-10Zm0 18c-4.42 0-8-3.59-8-8 0-4.42 3.58-8 8-8 4.41 0 8 3.58 8 8 0 4.41-3.59 8-8 8Z"></path>
              <path d="M13 7h-2v5.414l3.29 3.29 1.41-1.42 -2.71-2.71Z"></path>
            </g>
          </svg>
          <span>Recent Notes</span>
        </button>

        <div className="mt-8 dark:text-white font-medium uppercase">General</div>
        <NavLink to="/profile"
          exact="true"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          <p className=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-blue-600 hover:font-semibold dark:hover:text-white ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:stroke-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Settings</span>
          </p>
        </NavLink>
        <button className="flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-blue-600 hover:font-semibold dark:hover:text-white" onClick={handleLogoutClick}>
          <svg className="h-5 w-5 group-hover:fill-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path d="M16 13v-2H7V8l-5 4 5 4v-3Z"></path>
              <path d="M20 3h-9c-1.11 0-2 .89-2 2v4h2V5h9v14h-9v-4H9v4c0 1.1.89 2 2 2h9c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2Z"></path>
            </g>
          </svg>
          <span>Logout</span>
        </button>
        <button className="flex items-center space-x-2 py-1 mt-4">
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer" />
            <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
          </div>
          <label htmlFor="toggle" className="">Dark Theme</label>
        </button>


      </div>
    </div>
  );
}


export default NavBar;
