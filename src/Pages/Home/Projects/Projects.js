import React from 'react';
import ePlatform from '../../../images/e-platform.jpg'
import blackMarket from '../../../images/black-market.jpg'
import mamasHouse from '../../../images/mamas-house.jpg'
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import ProjectCard from './ProjectCard';

const Projects = () => {

    const { data: projects = [], isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch('projects.json');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <section className="py-0 sm:py-12 text-cyan-700 ">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-4xl font-bold">My Projects</h2>
                    <p className=" text-sm text-cyan-800">Listing some of my recent projects.</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 ">
                    {
                        projects.map(project => <ProjectCard
                            key={project.id}
                            project={project}
                        ></ProjectCard>)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Projects;