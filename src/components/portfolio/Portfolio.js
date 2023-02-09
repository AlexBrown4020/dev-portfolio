import './portfolio.css';

function Portfolio () {
    return (
        <div id='projects-container'>
            <div className='apps-container apps-left'>
                <div class="projects">
                    <a href="https://github.com/CCP4-senior" class="project-image">
                        <img alt='Runtomo' class="project-image" src="https://avatars.githubusercontent.com/u/107094424?s=400&u=80a395950ed37432c0cc6b468fa27ec0dc5ad5fc&v=4"/>
                    </a>
                    <p className='app-name'>Runtomo</p>
                </div>
                <div class="projects">
                    <a href="https://dapper-lokum-183c52.netlify.app/" class="project-image">
                        <img alt='Life in Balance' class="project-image" src="https://iili.io/s8B7O7.jpg"/>
                    </a>
                    <p className='app-name'>Life in Balance</p>
                </div>
                <div class="projects">
                    <a href="https://gilded-sopapillas-cccb3e.netlify.app/" class="project-image">
                        <img alt='Cosplay Radar' style={{'background-color': 'white'}} class="project-image" src="https://cdn-icons-png.flaticon.com/512/2261/2261175.png"/>
                    </a>
                    <p className='app-name'>Cosplay Radar</p>
                </div>
            </div>
            <div className='apps-container apps-right'>
                <div class="projects">
                    <a href="https://alexbrown-3dportfolio.netlify.app/" class="project-image">
                        <img alt='AdvHoard' style={{'background-color': 'slategray'}}class="project-image" src="https://iili.io/ZoUvBS.png"/>
                    </a>
                    <p className='app-name'>3D Portfolio</p>
                </div>
                <div class="projects">
                    <a href="https://www.etsy.com/uk/shop/AdventurersHoardShop?ref=seller-platform-mcnav" class="project-image">
                        <img alt='Etsy' class="project-image" src="https://iili.io/H9xHCHN.png"/>
                    </a>
                    <p className='app-name'>Etsy Store</p>
                </div>
            </div>
        </div>      
    )
};

export default Portfolio;