import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { id, title, details, img, live, projects } = project;
    return (
        <article className="flex flex-col bg-cyan-50 rounded-md">
            <a rel="noopener noreferrer" href={live} target="_blank" >
                <img alt="" className="object-cover w-full h-52 bg-cyan-900 p-3 rounded-md" src={img} />
            </a>
            <div className="flex flex-col flex-1 p-6">

                <a rel="noopener noreferrer" href={live} className="text-xs tracking-wider uppercase hover:underline text-cyan-900" target="_blank">{title}</a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{details}</h3>
                <Link
                    to={`/projectDetails/${id}`}
                    class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-800"
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