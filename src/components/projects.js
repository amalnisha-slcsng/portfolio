import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/udemy.webp';
import websiteImg3 from '../assets/react todolist.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Ecommerce Website. Built with HTML, CSS , JS.',
                link: 'http://amalnisha.me/NostraProject/'
            },
            {
                image: websiteImg2,
                description: 'A Udemy Clone.Built with HTML,CSS & React Js.',
                link: 'https://udemy-react-self.vercel.app/'
            },
            {
                image: websiteImg3,
                description: 'An ActTodo App. Built with React.js & Tailwind Css.',
                
                link: 'https://acttodo-opal.vercel.app/'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary  text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built them with React.js, Tailwind CSS, HTML, CSS, and JavaScript. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                     <img className='h-[200px] w-[500px] transition-transform duration-300 transform hover:translate-y-[-10px] border rounded-md border-none hover:opacity-50' src={project.image}/>
                     <div className='project-desc'>
                         <p className='text-center px-5 py-5'>{project.description}</p>
                         <div className='flex justify-center'>
                             <a className='bg-secondary hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full' target='_blank' href={project.link}>View Project</a>
                         </div>
                     </div>
                 </div>
                 
            
                ))}
               
               
            </div>
        </div>
    </section>
}