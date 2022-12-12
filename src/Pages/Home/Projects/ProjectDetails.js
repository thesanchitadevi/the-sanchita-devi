import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProjectDetailsCard from '../../ProjectDetailsCard/ProjectDetailsCard';

const ProjectDetails = () => {
    const projects = useLoaderData();
    const { sites } = projects;

    return (
        <section>
            {
                sites.map(site =>
                    <ProjectDetailsCard
                        key={site._id}
                        site={site}
                    ></ProjectDetailsCard>
                )
            }
        </section>

    );
};

export default ProjectDetails;