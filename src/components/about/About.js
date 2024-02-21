import { useEffect, useRef, useState } from 'react';
import { reveal } from '../../functions/reveal';
import './about.css';
import '../../App.css';

function About() {
    const ref = useRef(null);
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [years, setYears] = useState();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref.current.contains(event.target)) {
                setShow(false);
                setName('');
                setYears();
                setProjects([]);
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    function popUp(obj) {
        setShow(!show);
        if (show) {
            setName('');
            setYears();
            setProjects([]);
            return
        } else {
            setName(obj.name);
            setYears(obj.years);
            setProjects(obj.projects);
            return;
        }
    };

    window.addEventListener("scroll", reveal);

    const tech = [
        {
            name: 'PostgreSQL',
            years: 1,
            projects: ['RunTomo', 'Moon Creative Lab', 'Discover Nikkei'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
        },
        {
            name: 'JavaScript',
            years: 3,
            projects: ['Portfolio', 'Life in Balance', 'Cosplay Radar', '3D Portfolio', 'Sunset City', 'Moon Creative Lab', 'Code Chrysalis'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        {
            name: 'HTML5',
            years: 3,
            projects: ['Portfolio', 'Life in Balance', 'Cosplay Radar', '3D Portfolio', 'Sunset City', 'Moon Creative Lab', 'Code Chrysalis', 'Discover Nikkei'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        },
        {
            name: 'Github',
            years: 2.5,
            projects: ['Portfolio', 'Life in Balance', 'Cosplay Radar', '3D Portfolio', 'Runtomo', 'Sunset City', 'Moon Creative Lab', 'Discover Nikkei'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
        },
        {
            name: 'CSS3',
            years: 2.5,
            projects: ['Portfolio', 'Life in Balance', 'Cosplay Radar', '3D Portfolio', 'Runtomo', 'Sunset city', 'Moon Creative Lab', 'Code Chrysalis', 'Discover Nikkei'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        },
        {
            name: 'nodeJS',
            years: 1,
            projects: ['Life In Balance', 'Cosplay Radar', 'Sunset City', 'Code Chrysalis'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        },
        {
            name: 'Figma',
            years: 1.5,
            projects: ['Portfolio', 'Sunset City', 'Moon Creative Lab', 'Discover Nikkei'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        },
        {
            name: 'ReactJS',
            years: 1.5,
            projects: ['Portfolio', 'Life in Balance', 'Cosplay Radar', '3D Portfolio', 'Sunset City', 'Moon Creative Lab'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
            name: 'MongoDB',
            years: 1,
            projects: ['Life in Balance', 'Sunset City'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
        },
        {
            name: 'Django',
            years: .5,
            projects: ['Runtomo', 'Discover Nikkei'],
            image: 'https://cdn.worldvectorlogo.com/logos/django.svg'
        },
        {
            name: 'TypeScript',
            years: 1,
            projects: ['Sunset City', 'Moon Creative Lab'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        },
        {
            name: 'NextJS',
            years: .5,
            projects: ['Moon Creative Lab'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
        },
        {
            name: 'Tailwind',
            years: .5,
            projects: ['Moon Creative Lab'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
        },
        {
            name: 'Python',
            years: .50,
            projects: ['Runtomo', 'Discover Nikkei'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
        }
    ]

    return (
        <div id='main-container'>
            <h3 className='section-heading'>Technologies</h3>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
            <div id='tech-container'>
                {
                    tech.map((obj) => {
                        return <div className='tech-item' ref={ref} onClick={() => popUp(obj)}>
                                <img className='tech-image' src={obj.image} alt={obj.name} key={obj.name}/>
                                <h4 className='tech-name'>{obj.name}</h4>
                            </div>
                    })
                }
            </div>

            {
                    show ? <div className='language-window'>
                        <div className='row'>
                            <h4 className='language-title'>Technology:</h4>
                            <p className='language name'>{name}</p>
                        </div>
                        <div className='row'>
                            <h4 className='language-title'>Years Experience:</h4>
                            <p className='language years'>{years}</p>
                        </div>
                        <div className='row-proj'>
                            <div className='title-container'>
                                <h4 className='language-title'>Projects:</h4>
                            </div>
                            <div className='project-container'>
                            {
                                projects.map((str) => {
                                    const currIndex = projects.indexOf(str)
                                    if (currIndex + 1 >= projects.length) {
                                        return <span className='language-project'>{`${str}`} </span>
                                    }
                                    return <span className='language-project'>{`${str}, `}</span>
                                })
                            }
                            </div>
                        </div>
                    </div>
                        :
                    <></>
                }
            <section id='nav-to-portfolio'></section>
        </div>
    );
};

export default About;