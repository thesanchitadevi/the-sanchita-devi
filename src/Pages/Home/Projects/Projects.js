import React from 'react';
import ePlatform from '../../../images/e-platform.jpg'
import blackMarket from '../../../images/black-market.jpg'
import mamasHouse from '../../../images/mamas-house.jpg'

const Projects = () => {
    return (
        <section className="py-0 sm:py-12 text-cyan-600">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-4xl font-bold">My Projects</h2>
                    <p className=" text-sm text-cyan-800">Listing some of my recent projects.</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                    <article className="flex flex-col bg-cyan-50">
                        <a rel="noopener noreferrer" href="https://wizard-platform-client.web.app/" target="_blank">
                            <img alt="" className="object-cover w-full h-52 bg-cyan-500" src={ePlatform} />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            
                            <a rel="noopener noreferrer" href="https://wizard-platform-client.web.app/" className="text-xs tracking-wider uppercase hover:underline text-cyan-900" target="_blank">E-Platform</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">A learning platform where you can develop your skill.</h3>
                            
                        </div>
                    </article>
                    <article className="flex flex-col bg-cyan-50">
                        <a rel="noopener noreferrer" href="https://black-market-ce97c.web.app/" target="_blank">
                            <img alt="" className="object-cover w-full h-52 bg-cyan-500" src={blackMarket} />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            
                            <a rel="noopener noreferrer" href="https://black-market-ce97c.web.app/" className="text-xs tracking-wider uppercase hover:underline text-cyan-900" target="_blank">Black-Market</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">A resale product based fullstack web app.</h3>
                            
                        </div>
                    </article>
                    <article className="flex flex-col bg-cyan-50">
                        <a rel="noopener noreferrer" href="https://mamas-house-e9df3.web.app/" target="_blank">
                            <img alt="" className="object-cover w-full h-52 bg-cyan-500" src={mamasHouse} />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                           
                            <a rel="noopener noreferrer" href="https://mamas-house-e9df3.web.app/" className="text-xs tracking-wider uppercase hover:underline text-cyan-900" target="_blank">Mamas-House</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">A cloud kitchen web app who provides different types of cuisines.</h3>
                            
                        </div>
                    </article>
                    
                </div>
            </div>
        </section>
    );
};

export default Projects;