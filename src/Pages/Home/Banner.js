import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="text-cyan-700">
            <div
                className="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:h-screen lg:items-center"
            >
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="bg-gradient-to-r from-cyan-500 via-cyan-700 to-cyan-900 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        Sanchita Devi

                        {/* <span className="sm:block"> Increase Conversion. </span> */}
                    </h1>

                    <p className="mx-auto mt-4  sm:text-xl sm:leading-relaxed">
                        I am a Passionate Frontend Web Developer, fast learner, and team player
                        also have strong desire to develop professionally and constantly enhance my skills.
                    </p>
                    <div className='flex justify-center items-center space-x-5 mt-10 text-xl font-bold'>
                        <Link to='/about'>About</Link>
                        <Link to='/blog'>Blog</Link>
                </div>
                </div>
            </div>
        </section>

    );
};

export default Banner;