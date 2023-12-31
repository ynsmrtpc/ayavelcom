import React, { useState, useRef, useEffect } from 'react';
import { RiCalendar2Line } from "react-icons/ri";

const Plan = () => {
    const [isShowPopper, setIsShowPopper] = useState(false);
    const popperRef = useRef(null);

    const handleClickOutside = (event) => {
        if (popperRef.current && !popperRef.current.contains(event.target)) {
            setIsShowPopper(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="mt-4 sm:mt-5">
            <div className="flex items-center justify-between">
                <h2 className="text-base font-medium tracking-wide text-slate-700 dark:text-navy-100">
                    Gideceğimiz Yerler
                </h2>
                <div
                    onClick={() => setIsShowPopper(!isShowPopper)}
                    className="inline-flex"
                >
                    {isShowPopper && (
                        <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                            <ul>
                                <li>
                                    <a
                                        href="#"
                                        className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                                    >
                                        Action
                                    </a>
                                </li>
                                {/* Add more list items as needed */}
                            </ul>
                            <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                            <ul>
                                {/* Add more list items as needed */}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-3 space-y-4">
                <div className="card p-2">
                    <div className="flex space-x-4">
                        <img className="h-18 w-18 rounded-lg object-cover object-center" src="images/travel/picnic-1.jpg"
                            alt="image" />
                        <div>
                            <a href="#"
                                className="font-medium text-slate-700 outline-none transition-colors hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light">Picnic
                                on forest</a>
                            <p className="flex items-center space-x-1.5 text-xs">

                                <RiCalendar2Line className="h-3.5 w-3.5 text-slate-400 dark:text-navy-300" />

                                <span className="line-clamp-1">22 May - 28 May</span>
                            </p>
                            <div className="mt-2 flex -space-x-2">
                                <div className="avatar h-6 w-6 hover:z-10">
                                    <img className="rounded-full ring-2 ring-white dark:ring-navy-700" src="images/avatar/avatar-1.jpg"
                                        alt="avatar" />
                                </div>
                                <div className="avatar h-6 w-6 hover:z-10">
                                    <img className="rounded-full ring-2 ring-white dark:ring-navy-700" src="images/avatar/avatar-2.jpg"
                                        alt="avatar" />
                                </div>
                                <div className="avatar h-6 w-6 hover:z-10">
                                    <img className="rounded-full ring-2 ring-white dark:ring-navy-700" src="images/avatar/avatar-10.jpg"
                                        alt="avatar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plan;
