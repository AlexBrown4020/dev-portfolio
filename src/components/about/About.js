import { useEffect, useRef, useState } from 'react';
import './about.css';

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

    function reveal() {
    var reveals = document.querySelectorAll(".icon");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            } else {
            reveals[i].classList.remove("active");
            }
        }
    };
    
    window.addEventListener("scroll", reveal);
    const tech = [
        {
            name: 'PostgreSQL',
            years: 1,
            projects: ['RunTomo'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
        },
        {
            name: 'JavaScript',
            years: 2,
            projects: ['Portfolio', 'Life in Balance', 'Cosplay Radar', '3D Portfolio', 'Sunset City'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        {
            name: 'HTML5',
            years: 2,
            projects: ['Portfolio', 'Life in Balance', 'Cosplay Radar', '3D Portfolio', 'Sunset City'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        },
        {
            name: 'Github',
            years: 1,
            projects: ['Portfolio', 'Life in Balance', 'Cosplay Radar', '3D Portfolio', 'Runtomo', 'Sunset City'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
        },
        {
            name: 'CSS3',
            years: 2,
            projects: ['Portfolio', 'Life in Balance', 'Cosplay Radar', '3D Portfolio', 'Runtomo', 'Sunset city'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        },
        {
            name: 'nodeJS',
            years: 1,
            projects: ['Life In Balance', 'Cosplay Radar', 'Sunset City'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        },
        {
            name: 'Figma',
            years: .5,
            projects: ['Portfolio', 'Sunset City'],
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        },
        {
            name: 'ReactJS',
            years: 1,
            projects: ['Portfolio', 'Life in Balance', 'Cosplay Radar', '3D Portfolio', 'Sunset City'],
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
            projects: ['Runtomo'],
            image: 'https://cdn.worldvectorlogo.com/logos/django.svg'
        }
    ]

    return (
        <div id='main-container'>
            <h2 id='about-title'>Technologies</h2>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
            <div id='tech-container'>
                {
                    tech.map((obj) => {
                        return <div className='tech-item'>
                                <img className='tech-image' src={obj.image} alt={obj.name} key={obj.name}/>
                                <h4 className='tech-name'>{obj.name}</h4>
                            </div>
                    })
                }
            </div>

{/*
                    <div className='icon bottom-right'>
                        <button className='lan-button' value={figma} ref={ref} onClick={()=> popUp(figma)}>
                            <img className='lan' alt='Figma' height='70px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                            <h4 className='lan-name'>Figma</h4>
                        </button>
                    </div>
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
            </div>
             */}
            <section id='nav-to-portfolio'></section>
        </div>
    );
};

export default About;