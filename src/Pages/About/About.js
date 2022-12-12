import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <section class="py-12">
            <div class="w-full lg:w-5/12 px-4 mx-auto">
                    <div class="relative flex flex-col min-w-0 break-words bg-cyan-900 bg-clip-padding backdrop-filter backdrop-blur-lg  bg-opacity-0 w-full mb-6 shadow-gray-600/50 shadow-lg rounded-lg">
                    <div class="px-6">
                        <div class="flex flex-wrap justify-center">
                            <div class="w-full px-4 flex justify-center">
                                <div class="relative">
                                    <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-12">
                            <h3 class="text-xl font-semibold leading-normal mb-2 text-gray-200 ">
                                Sanchita Devi
                            </h3>
                            <div class="text-sm leading-normal mt-0 mb-2 text-gray-300 font-bold uppercase">
                                <i class="fas fa-map-marker-alt mr-2 text-lg text-cyan-800"></i>
                                Dhaka, Bangladesh
                            </div>
                            <div class="mb-2 text-gray-100 mt-10">
                                <i class="fas fa-briefcase mr-2 text-lg text-gray-100"></i>
                                Frontend Developer
                            </div>
                            <div class=" text-gray-100">
                                <i class="fas fa-university mr-2 text-lg text-gray-100"></i>
                                National University of Bangladesh
                                </div>
                                <ul className="mt-5 flex justify-center gap-6 md:gap-8">
                                    <li>
                                        <a
                                            href="https://www.facebook.com/thesanchitadevi/"
                                            rel="noreferrer"
                                            target="_blank"
                                            className="text-gray-100 transition hover:text-cyan-700/75"
                                        >
                                            <span className="sr-only">Facebook</span>
                                            <svg
                                                className="h-6 w-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/thesanchitadevi"
                                            rel="noreferrer"
                                            target="_blank"
                                            className="text-gray-100 transition hover:text-cyan-700/75"
                                        >
                                            <span className="sr-only">GitHub</span>
                                            <svg
                                                className="h-6 w-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>

                                </ul>
                        </div>
                        <div class="mt-10 py-10 border-t border-gray-700 text-center">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full lg:w-9/12 px-4">
                                    <p class="mb-4 text-lg leading-relaxed text-sky-100">
                                        I am a Frontend Web Developer adept at building user-friendly responsive web application. Passionate about learning new technologies. bringing ideas to life, and working with dedicated teams to build efficient and robust applications suited to the user's needs.
                                    </p>
                                    <Link to="/" class="font-normal underline text-gray-600">
                                        Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        </div>
    );
};

export default About;