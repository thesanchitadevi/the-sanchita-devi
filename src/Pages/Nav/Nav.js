import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <header aria-label="Page Header" className='lg:mb-0 sm:mb-30'>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl font-bold text-cyan-900 sm:text-3xl">
                                thesanchitadevi!
                            </h1>

                            <p className="mt-1.5 text-sm text-cyan-800">
                                Frontend Developer
                            </p>
                        </div>

                        <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                            <a 
                                href="https://drive.google.com/file/d/19l4GuCOJvAA-3RUn4lKgLALNiPBst1lm/view?usp=sharing"
                                
                                class="inline-flex items-center justify-center rounded-lg border border-cyan-600 px-5 py-3 text-cyan-600 transition hover:bg-cyan-900 hover:text-cyan-100 focus:outline-none focus:ring"
                                
                                target="_blank"
                                
                                download="sanchitadevi.pdf">
                                <button
                                    className='flex justify-center'
                                    type="button"
                                >
                                    <span class="text-sm font-medium"> View Website </span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="ml-1.5 h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </button>
                            </a>

                            
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Nav;