import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetailsCard = ({ site }) => {
    const { img1, img2, img3, server, client } = site;
    return (
        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
            <header class="text-center">
                <h2 class="text-xl font-bold text-gray-200 sm:text-3xl">
                    Projects Details
                </h2>

                <p class="max-w-md mx-auto mt-4 text-gray-300 text-lg">
                    <a href={server} target="_blank">Server Side</a> || 
                    {" "}<a href={client} target="_blank">Client Side</a>
                </p>
                <p class="max-w-md mx-auto mt-2 text-gray-300 text-md">
                    <Link to="/" className='underline'>Home</Link> 
                </p>
            </header>

            <>
                <section
                    class="overflow-hidden  sm:grid sm:grid-cols-2 sm:items-center"
                >
                    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                        <div class="mx-auto max-w-xl text-center sm:text-left">
                            <h2 class="text-xl font-bold text-gray-100 md:text-3xl">
                                PROJECT INFO
                            </h2>

                            <p class="hidden text-gray-500 md:mt-4 md:block">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
                                tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
                                fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
                                duis.
                            </p>
                            <h2 class="text-xl font-bold text-gray-100 md:text-3xl mt-10">
                                SKILL USED
                            </h2>

                            <p class="hidden text-gray-500 md:mt-4 md:block">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
                                tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
                                fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
                                duis.
                            </p>

                            <div class="mt-4 md:mt-8">
                                <a
                                    href="#"
                                    class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                                >
                                    Get Started Today
                                </a>
                            </div>
                        </div>
                    </div>

                    <img
                        alt="Violin"
                        src={img1}
                        class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
                    />
                </section>

            </>
        </div>
    );
};

export default ProjectDetailsCard;