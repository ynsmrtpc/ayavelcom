import React, { useState } from 'react';
import { useEffect } from 'react';
import { RiSunLine, RiMoonFill, RiSearchLine } from "react-icons/ri";

const Navbar = () => {
    const [isSearchbarActive, setIsSearchbarActive] = useState(true);
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(localStorage.getItem("_x_darkMode_on"));

    const toggleSearchbar = () => {
        setIsSearchbarActive((prev) => !prev);
    };

    const toggleDarkMode = () => {
        if (isDarkModeEnabled) {
            localStorage.removeItem("_x_darkMode_on");
            localStorage.getItem("_x_darkMode_on") === "true" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
        } else {
            localStorage.setItem("_x_darkMode_on", "true")
            localStorage.getItem("_x_darkMode_on") === "true" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
        }
        setIsDarkModeEnabled((prev) => !prev);
    };

    return (
        <nav className="header before:bg-white dark:before:bg-navy-750 print:hidden">
            <div className="header-container relative flex w-full bg-white dark:bg-navy-750 print:hidden">
                <div className="flex w-full items-center justify-between">
                    <div className="h-7 w-7">
                        <span className='text-xl'>ayavel</span>
                    </div>
                    <div className="-mr-1.5 flex items-center space-x-2">
                        <button
                            onClick={toggleSearchbar}
                            className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:hidden"
                        >
                            <RiSearchLine className="h-5.5 w-5.5 text-slate-500 dark:text-navy-100" />
                        </button>
                        <div
                            className="flex"
                            onClick={() => setIsSearchbarActive(false)}
                        >
                            <div className="md:flex relative mr-4 hidden  h-8">
                                <input
                                    placeholder="Search here..."
                                    className={`form-input peer h-full rounded-full bg-slate-150 px-4 pl-9 text-xs+ text-slate-800 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:text-navy-100 dark:placeholder-navy-300 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900  ${isSearchbarActive ? 'w-60' : 'w-80'
                                        }`}
                                    onBlur={() => setIsSearchbarActive(true)}
                                    type="text"
                                />
                                <div className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                    <RiSearchLine className="h-4.5 w-4.5 transition-colors duration-200" />
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={toggleDarkMode}
                            className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                        >
                            {localStorage.getItem("_x_darkMode_on") === "true" ? (
                                <RiMoonFill className="h-6 w-6 text-amber-400" />
                            ) : (
                                <RiSunLine className="h-6 w-6 text-amber-400" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden visible fixed inset-0 z-[100] flex flex-col bg-white dark:bg-navy-700 ${isSearchbarActive && 'hidden'}`}>
                <div className="flex items-center space-x-2 bg-slate-100 px-3 pt-2 dark:bg-navy-800">
                    <button
                        className="btn -ml-1.5 h-7 w-7 shrink-0 rounded-full p-0 text-slate-600 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
                        onBlur={() => setIsSearchbarActive(false)}
                    >
                        <RiSearchLine className="h-5.5 w-5.5 text-slate-500 dark:text-navy-100" />
                    </button>
                    <input
                        className="form-input h-8 w-full bg-transparent placeholder-slate-400 dark:placeholder-navy-300"
                        type="text"
                        placeholder="Search here..."
                    />
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
