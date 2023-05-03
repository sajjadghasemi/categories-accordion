import React, { useState } from "react";
import AccordionItems from "./AccordionItems";
import Link from "next/link";

const SubAccordion = ({ subMenu }) => {
    const [activeIndex, setActiveIndex] = useState("");

    const handleClick = (name) => {
        setActiveIndex(name === activeIndex ? "" : name);
    };

    return (
        <>
            {subMenu.map((item) => (
                <div
                    key={item.name}
                    className="flex flex-col w-5/6 bg-gray-500"
                >
                    {item.children[0] ? (
                        <div
                            onClick={() => handleClick(item.name)}
                            className={`z-20 flex justify-between p-2 bg-gray-500 text-xl cursor-pointer transition-colors ${
                                activeIndex === item.name && "text-yellow-300"
                            }`}
                        >
                            <h5>{item.name}</h5>
                            <span>
                                <div
                                    className={`transition-transform ${
                                        activeIndex === item.name
                                            ? "rotate-180"
                                            : "rotate-0"
                                    }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </div>
                            </span>
                        </div>
                    ) : (
                        <div
                            className={`z-20 flex justify-between p-2 bg-gray-500 text-xl`}
                        >
                            <h5>
                                <Link href={item.link}>{item.name}</Link>
                            </h5>
                        </div>
                    )}
                    <div
                        className={`z-10 text-lg bg-gray-400 transition-all -translate-y-full flex flex-col justify-end items-end ${
                            activeIndex === item.name && "translate-y-0"
                        }`}
                    >
                        {item.name === activeIndex && (
                            <>
                                {item.children[0] ? (
                                    <AccordionItems subMenu={item.children} />
                                ) : (
                                    <p className="p-2">{item.name}</p>
                                )}
                            </>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default SubAccordion;
