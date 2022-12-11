import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { id, title, details, img, live, projects } = project;
    return (
        <article className="flex flex-col bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg  bg-opacity-0 border border-gray-700">
            <a rel="noopener noreferrer" href={live} target="_blank" >
                <img alt="" className="object-cover w-full h-52 p-3 rounded-md" src={img} />
            </a>
            <div className="flex flex-col flex-1 p-6">

                <a rel="noopener noreferrer" href={live} className="text-xs tracking-wider uppercase hover:underline text-gray-100" target="_blank">{title}</a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-400">{details}</h3>
                <Link
                    to={`/projectDetails/${id}`}
                    class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-200"
                >
                    Explore more

                    <span
                        aria-hidden="true"
                        class="block transition group-hover:translate-x-0.5"
                    >
                        &rarr;
                    </span>
                </Link>

            </div>
        </article>
    );
};

export default ProjectCard;