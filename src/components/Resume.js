import React from 'react';
import ResumeImg from '../assets/girlresume.jpg';

export default function Resume() {
    const config = {
        line1: 'You can view my Resume'
    };

    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5 py-10' id='resume'>
            <div className='py-5 md:w-1/2 flex justify-center'>
                <img src={ResumeImg} alt="Amal Nisha's Resume" className='w-full max-w-xs md:max-w-sm lg:max-w-md' />
            </div>
            <div className='md:w-1/2 flex justify-center items-center'>
                <div className='flex flex-col justify-center text-white text-center md:text-left'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold mx-auto md:mx-0'>Resume</h1>
                    <p className='pb-5'>{config.line1} <a href="https://www.canva.com/design/DAGANNoSjEk/jW5YZ042_6zyDy3irftQ6A/edit?utm_content=DAGANNoSjEk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" download className='custom-button'>Download</a></p>
                </div>
            </div>
        </section>
    );
}
