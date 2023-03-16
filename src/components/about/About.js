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

    const psql = {
        name: 'PostgreSQL',
        years: .75,
        projects: ['RunTomo']
    };
    const javascript = {
        name: 'JavaScript',
        years: 2,
        projects: ['Portfolio', 'Life in Balance', 'Cosplay Radar', '3D Portfolio']
    };
    const html = {
        name: 'HTML5',
        years: 2,
        projects: ['Portfolio', 'Life in Balance', 'Cosplay Radar', '3D Portfolio']
    };
    const github = {
        name: 'Github',
        years: 1,
        projects: ['Portfolio', 'Life in Balance', 'Cosplay Radar', '3D Portfolio', 'Runtomo', 'Ruby Recipes', 'Timeline']
    };
    const css = {
        name: 'CSS3',
        years: 2,
        projects: ['Portfolio', 'Life in Balance', 'Cosplay Radar', '3D Portfolio', 'Runtomo', 'Ruby Recipes', 'Timeline']
    };
    const node = {
        name: 'nodeJS',
        years: .75,
        projects: ['Life In Balance', 'Cosplay Radar']
    };
    const figma = {
        name: 'Figma',
        years: .5,
        projects: ['Portfolio', 'Sunset City']
    };
    const react = {
        name: 'ReactJS',
        years: 1,
        projects: ['Portfolio', 'Life in Balance', 'Cosplay Radar', '3D Portfolio'],
    };

    return (
        <div id='main-container'>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
            <div className='about-container'>
                <div className='about-structure'>
                    <div className="icon top-left"> 
                        <button className='lan-button' value={javascript} ref={ref} onClick={()=> popUp(javascript)}>
                            <img className='lan' alt='JavaScript' height='70px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            <h4>JavaScript</h4>
                        </button>
                    </div>
                    <div className="icon top">
                        <button className='lan-button' value={node} ref={ref} onClick={()=> popUp(node)}>
                            <img className='lan' alt='node' height='70px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                            <h4>NodeJS</h4>
                        </button>
                    </div>
                    <div className="icon top-right">     
                        <button className='lan-button' value={react} ref={ref} onClick={()=> popUp(react)}>
                            <img className='lan' alt='react' height='70px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            <h4>ReactJS</h4>
                        </button>
                    </div>
                </div>
                <div className='about-structure-inline'>
                    <div className="icon right">
                        <button className='lan-button' value={html} ref={ref} onClick={()=> popUp(html)}>
                            <img className='lan' alt='HTML5' height='70px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                            <h4>HTML</h4>
                        </button>
                    </div>
                    <h2 id='about-inline-title'>Languages</h2>
                    <div className='icon left'>  
                        <button className='lan-button' value={psql} ref={ref} onClick={()=> popUp(psql)}>
                            <img className='lan' height='70px' alt='elephant' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                            <h4>PostgreSQL</h4>
                        </button>
                    </div>
                </div>
                <div className='about-structure'>
                    <div className='icon bottom-left'> 
                        <button className='lan-button' value={css} ref={ref} onClick={()=> popUp(css)}>
                            <img className='lan' alt='CSS3' height='70px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                            <h4>CSS</h4>
                        </button>   
                    </div>
                    <div className='icon bottom'>     
                        <button className='lan-button' value={github} ref={ref} onClick={()=> popUp(github)}>
                            <img className='lan' alt='github' height='70px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                            <h4>Github</h4>
                        </button>
                    </div>
                    <div className='icon bottom-right'>
                        <button className='lan-button' value={figma} ref={ref} onClick={()=> popUp(figma)}>
                            <img className='lan' alt='Figma' height='70px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                            <h4>Figma</h4>
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
            <section id='nav-to-portfolio'></section>
        </div>
    );
};

export default About;