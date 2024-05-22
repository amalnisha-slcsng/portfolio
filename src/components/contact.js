import React from 'react';
import ResumeImg from '../assets/girlresume.jpg';

export default function Contact() {
    const config = {
        line1: 'If you want to discuss more in details, Please contact me'
    };

    return (
        <section className='flex flex-col items-center bg-primary px-5 py-32' id='contact'>
            <div className='flex flex-col justify-center items-center text-white max-w-lg text-center'>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold text-white '>Contact</h1>
                <p className='pb-5 font-medium'>{config.line1}</p>
                <p className='py-2'><span className='font-bold'>Email:</span> amalnisha7705@gmail.com</p>
                <p className='py-2'><span className='font-bold'>Phone:</span> 8525986468</p>
            </div>
        </section>
    );
}
