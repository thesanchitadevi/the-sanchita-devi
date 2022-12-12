import React from 'react';

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
            </header>

            <>
                <div className="container mx-auto space-y-12 mt-10">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={img1} alt="" className="h-80 bg-gray-500 aspect-video "/>
                        <div className="flex flex-col justify-center flex-1 p-6 ">
                            <span className="text-xs uppercase text-gray-400">Join, it's free</span>
                            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                            <p className="my-6 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src={img2} alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 ">
                            <span className="text-xs uppercase text-gray-400">Join, it's free</span>
                            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                            <p className="my-6 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={img3} alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 ">
                            <span className="text-xs uppercase text-gray-400">Join, it's free</span>
                            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                            <p className="my-6 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default ProjectDetailsCard;