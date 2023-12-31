import React, { useState, useRef, useEffect } from 'react';
import { RiCalendar2Line } from "react-icons/ri";

const Plan = ({ data }) => {
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

        <div className="card p-2 my-2">
            <div className="flex space-x-4">
                <img className="h-18 w-18 rounded-lg object-cover object-center" src={data.image}
                    alt="image" />
                <div>
                    <a href="#"
                        className="font-medium text-slate-700 outline-none transition-colors hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light">{data.location}</a>
                    <p className="flex items-center space-x-1.5 text-xs">

                        <RiCalendar2Line className="h-3.5 w-3.5 text-slate-400 dark:text-navy-300" />

                        <span className="line-clamp-1">{data.date}</span>
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

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plan;
