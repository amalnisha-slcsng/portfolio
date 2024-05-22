import HeroImg from '../assets/developer.png';
import { AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle :'A Passionate Web Developer'
    }
    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-white text-6xl font-hero-font'>
                    Hi..👋,<br />I'm Amal Nisha 
                    <p className='text-2xl pt-2'>{config.subtitle}</p>
                </h1>
                <div className='flex px-5 py-10'>
                    <a href="https://www.linkedin.com/in/amal-nisha-mernstackdeveloper/" className='pr-5 hover:text-white' aria-label="LinkedIn">
                        <AiOutlineLinkedin size={40} />
                    </a>
                    <a href="https://wa.me/8525986468
" className='pr-5 hover:text-white' aria-label="WhatsApp">
                        <AiOutlineWhatsApp size={40} />
                    </a>
                    <a href="https://www.instagram.com" className='hover:text-white' aria-label="Instagram">
                        <AiOutlineInstagram size={40} />
                    </a>
                </div>
            </div>
            <img className='md:w-1/3' src={HeroImg} alt="Developer Illustration" />
        </section>
    );
}
