import React, { useState, useRef, useEffect } from 'react';

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
                    My Plan
                </h2>
                <div
                    onClick={() => setIsShowPopper(!isShowPopper)}
                    className="inline-flex"
                >
                    <button
                        ref={popperRef}
                        className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                        </svg>
                    </button>

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
                <div class="card p-2">
                    <div class="flex space-x-4">
                        <img class="h-18 w-18 rounded-lg object-cover object-center" src="images/travel/picnic-1.jpg"
                            alt="image" />
                        <div>
                            <a href="#"
                                class="font-medium text-slate-700 outline-none transition-colors hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light">Picnic
                                on forest</a>
                            <p class="flex items-center space-x-1.5 text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-slate-400 dark:text-navy-300"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span class="line-clamp-1">22 May - 28 May</span>
                            </p>
                            <div class="mt-2 flex -space-x-2">
                                <div class="avatar h-6 w-6 hover:z-10">
                                    <img class="rounded-full ring-2 ring-white dark:ring-navy-700" src="images/avatar/avatar-1.jpg"
                                        alt="avatar" />
                                </div>
                                <div class="avatar h-6 w-6 hover:z-10">
                                    <img class="rounded-full ring-2 ring-white dark:ring-navy-700" src="images/avatar/avatar-2.jpg"
                                        alt="avatar" />
                                </div>
                                <div class="avatar h-6 w-6 hover:z-10">
                                    <img class="rounded-full ring-2 ring-white dark:ring-navy-700" src="images/avatar/avatar-10.jpg"
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
