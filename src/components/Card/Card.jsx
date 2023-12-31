import React from 'react';
import { RiHeartLine, RiUserLocationLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";

const Card = ({ data }) => {
    return (
        <div className="card">
            <img className="h-80 w-full rounded-lg object-cover" src={data.image} alt="image" />
            <div className="absolute inset-0 flex h-full w-full flex-col justify-between">
                <div className="flex justify-end p-3">
                    {/* <button className="btn h-7 w-7 rounded-full bg-black/20 p-0 hover:bg-black/30 focus:bg-black/30">
                        <RiHeartLine className="h-4.5 w-4.5 text-white" />
                    </button> */}
                </div>
                <div className="rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 py-3 pt-14">
                    <div>
                        <a href="#" className="text-base font-semibold text-white line-clamp-2">
                            {data.title}
                        </a>
                    </div>
                    <div className="mt-1 flex items-center space-x-3 text-slate-200">
                        <p className="flex items-center space-x-1">
                            <RiUserLocationLine className="h-3.5 w-3.5" />
                            <span className="text-xs+ line-clamp-1">{data.location} </span>
                        </p>
                        <p className="flex shrink-0 items-center space-x-1">
                            <FaRegStar className="h-3.5 w-3.5" />
                            <span className="text-xs+">{data.star}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
