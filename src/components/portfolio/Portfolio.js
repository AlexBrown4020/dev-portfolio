import './portfolio.css';

function Portfolio () {
    return (
        <div id='projects-container'>
            <div className='project-card'>
                <div className='project-links'>
                    <h5 className='project-title-app'>Runtomo</h5>
                </div>
                <div className='project-blurb'>
                    <a href="https://github.com/CCP4-senior" class="project-image">
                        <img alt='Runtomo' class="project-image" src="https://avatars.githubusercontent.com/u/107094424?s=400&u=80a395950ed37432c0cc6b468fa27ec0dc5ad5fc&v=4"/>
                    </a>
                    <p className='project-paragraph'>
                        Runtomo is a mobile app that connects runners together; finding events and meet-up locations to run as part of a friendship group.  
                        Users can create profile pages, connect to friends, create their own events and join up with others in the Tokyo area.
                    </p>
                </div>
            </div>
            <div className='project-card'>
                <div className='project-links'>
                    <h5 className='project-title-app'>Cosplay Radar</h5>
                </div>
                <div className='project-blurb'>
                    <a href="https://cosplay-radar.netlify.app/" class="project-image">
                    <img alt='Cosplay Radar' style={{'background-color': 'white'}} class="project-image" src="https://cdn-icons-png.flaticon.com/512/2261/2261175.png"/>
                    </a>
                    <p className='project-paragraph'>
                        Cosplay Radar is built for cosplayers, designers and costume designers.  Using a web-scraping API , 
                        it can display upcoming internatonal conventions, 
                        as well as currently popular characters to give you some ideas of what to try next!  
                    </p>
                </div>
            </div>
            <div className='project-card'>
                <div className='project-links'>
                    <h5 className='project-title-app'>3D Portfolio</h5>
                </div>
                <div className='project-blurb'>
                    <a href="https://alexbrown-3dportfolio.netlify.app/" class="project-image">
                        <img alt='AdvHoard' style={{'background-color': 'slategray'}}class="project-image" src="https://iili.io/ZoUvBS.png"/>
                    </a>
                    <p className='project-paragraph'>
                        An application to display my 3D creations to potential customers, employers or other hobbyists.  3D Portfolio implements
                        ThreeJS to display the designs in a manipulatable 3D space so you can view the designs from all angles.
                    </p>
                </div>
            </div>
        </div>      
    );
};

export default Portfolio;