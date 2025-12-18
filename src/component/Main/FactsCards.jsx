"use client";
import React from "react";
import { Link } from "react-router-dom";

export function FactsCards({ category }) {
    return (
        <div className="
            w-full 
            h-50
            bg-white 
            rounded-xl 
            shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col 
            overflow-hidden
        ">

            <Link
                to={`/questions/category/${category.title.replace(/\s/g, "-")}`}
                className="flex flex-col items-center h-full w-full p-4"
            >
                {/* TITLE */}
                <h2 className="text-xl font-bold text-gray-800 text-center h-4 flex items-center justify-center mb-2">
                    {category.title}
                </h2>

                {/* IMAGE */}
                <div className="w-full h-36 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
                    <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
                    />
                </div>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-600 text-center mt-0 h-14 overflow-hidden">
                    {category.desc}
                </p>

                {/* Simulated "View Details" button look for action */}
                <div className="mt-3 pt-2">
                    <span className="text-blue-600 font-semibold hover:text-blue-800 text-sm">
                        Start Quiz →
                    </span>
                </div>
            </Link>

        </div>
    );
}

export default FactsCards;