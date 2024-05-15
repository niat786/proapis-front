"use client"
import "../globals.css";

import { useState } from "react";
const header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };
    return (
        <>
            <header>
                <nav id="top-nav" className={isMenuOpen ? 'h-screen lg:h-auto fixed overflow-hidden z-20 w-full bg-white/80 dark:bg-gray-950/75 dark:shadow-md shadow-sm dark:shadow-gray-600/30 border-b border-gray-300   border-x dark:border-gray-700 backdrop-blur' : 'fixed overflow-hidden z-20 w-full bg-white/80 dark:bg-gray-950/75 dark:shadow shadow-sm dark:shadow-gray-950/10 border-b border-gray-300   border-x dark:border-gray-800 backdrop-blur'}
                >
                    <div className="px-6 m-auto max-w-6xl 2xl:px-0">
                        <div className="flex flex-wrap items-center justify-between py-2 sm:py-4">
                            <div className="w-full items-center flex justify-between lg:w-auto">
                                <a href="/" aria-label="proapis logo">
                                    <img src="/logo.svg" alt="logo" width="120" />
                                </a>
                                <div className="flex lg:hidden">
                                    <button aria-label="humburger" onClick={toggleMenu}
                                        className="relative border bordeer-gray-950/30 dark:border-white/20 size-9 rounded-full transition duration-300 active:scale-95">
                                        <div aria-hidden="true" id="line1"
                                            className="m-auto h-[1.5px] w-4 rounded bg-gray-900 transition duration-300 dark:bg-gray-300">
                                        </div>
                                        <div aria-hidden="true" id="line2"
                                            className="m-auto mt-1.5 h-[1.5px] w-4 rounded bg-gray-900 transition duration-300 dark:bg-gray-300">
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div
                                className="w-full h-0 lg:w-fit flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:flex lg:h-fit md:flex-nowrap">
                                <div className="mt-6 text-gray-600 dark:text-gray-300 md:-ml-4 lg:pr-4 lg:mt-0">
                                    <ul className="space-y-6 tracking-wide text-base lg:text-sm lg:flex lg:space-y-0">
                                        <li>
                                            <a href="/"
                                                className="block md:px-4 transition hover:text-[#2196f3] dark:hover:text-primary-400">
                                                <span>Home</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/pricing"
                                                className="block md:px-4 transition hover:text-[#2196f3] dark:hover:text-primary-400">
                                                <span>Pricing</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/about"
                                                className="block md:px-4 transition hover:text-[#2196f3] dark:hover:text-primary-400">
                                                <span>About</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/contact-us"
                                                className="block md:px-4 transition hover:text-[#2196f3] dark:hover:text-primary-400">
                                                <span>Contact</span>
                                            </a>
                                        </li>
                                    </ul>

                                </div>

                                <div
                                    className="w-full space-y-2 gap-2 pt-6 pb-4 lg:pb-0 border-t border-gray-300   dark:border-gray-600 items-center flex flex-col lg:flex-row lg:space-y-0 lg:w-fit lg:border-l lg:border-t-0 lg:pt-0 lg:pl-2">
                                    <a href="https://app.proapis.com/"
                                        className="w-full h-9 lg:w-fit group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 *:disabled:text-gray-950 disabled:border-gray-300   disabled:bg-gray-100 dark:disabled:border dark:disabled:border-gray-800 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-800 hover:bg-gray-100 active:bg-gray-200/75 dark:text-gray-300 dark:hover:bg-gray-500/10 dark:active:bg-gray-500/15 lg:text-sm lg:h-8 px-3.5 justify-center">
                                        <span>Login</span>
                                    </a>
                                    <a href="https://app.proapis.com/"
                                        className="w-full h-9 lg:w-fit group flex items-center relative border rounded-full *:select-none [&>*:not(.sr-only)]:relative before:rounded-full before:absolute before:inset-0 before:border before:bg-gradient-to-b *:disabled:opacity-20 disabled:text-gray-950/40 disabled:border-gray-300   disabled:bg-gray-100 disabled:*:text-gray-300 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:before:border-0 dark:before:border-t dark:before:shadow-inner dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 disabled:dark:*:text-gray-700 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none dark:*:disabled:!text-white text-white border-gray-950 bg-gray-600 before:border-gray-600 before:from-gray-800 hover:bg-gray-900 active:bg-gray-950 dark:text-gray-950 dark:before:border-gray-300   dark:before:from-gray-200 dark:bg-white dark:before:shadow-white/10 dark:hover:bg-gray-100 dark:active:bg-gray-300 dark:active:before:from-gray-200 lg:text-sm lg:h-8 px-3 justify-center">
                                        <span>Sign Up</span>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default header