import '../../App.css'

function Careers () {
    return (
        <div className="container">
            <h3 className='title text-white'>Careers</h3>
            <a className='project-card' href="https://www.mooncreativelab.com/ventures/goril">
                <div className='project-links'>
                    <h4 className='project-title-app'>Moon Creative Lab: Goril, Full-stack Developer</h4>
                </div>
                <div className='project-blurb'>
                    <img alt='Runtomo' class="project-image" src="https://moon-website-prod-images.s3.us-west-1.amazonaws.com/image3_e7068f0ba3.jpg"/>
                    <p className='project-paragraph'>
                        Working at Moon Creative Lab, I have been working on the Goril application:  designed to aid Japanese speakers in replicating native English
                        pronunciation by using speech assessment, activities, and games.
                    </p>
                </div>
                <p className='project-paragraph'>1st April 2023 - 1st October 2023</p>
            </a>
            <a className='project-card' href="https://www.codechrysalis.io/">
                <div className='project-links'>
                    <h4 className='project-title-app'>Code Chrysalis, Foundations Instructor</h4>
                </div>
                <div className='project-blurb'>
                    <img alt='Runtomo' style={{backgroundColor:'white'}} class="project-image" src="https://avatars.githubusercontent.com/u/24461336?s=200&v=4"/>
                    <p className='project-paragraph'>
                        Teaching software development and programming; I help students of different skill levels achieve competency in building webpages and understanding the basics of modern web development.
                        Focusing on modern HTML, CSS and JavaScript.
                    </p>
                </div>
                <p className='project-paragraph'>Started: 1st March 2023 - Current</p>
            </a> 
            <a className='project-card' href="https://discovernikkei.org/en/?gad_source=1&gclid=Cj0KCQiAoKeuBhCoARIsAB4Wxtc4RO8_gsUKKwCNc9uZkEkz4gShhCv7N-y6edfazFPGQ7-_9aQ6jkAaAgEpEALw_wcB">
                <div className='project-links'>
                    <h4 className='project-title-app'>Discover Nikkei, Full-stack Developer</h4>
                </div>
                <div className='project-blurb'>
                    <img alt='Runtomo' class="project-image" src="https://scontent-itm1-1.xx.fbcdn.net/v/t39.30808-1/309243054_466796742146594_132188886653923461_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=104&ccb=1-7&_nc_sid=4da83f&_nc_ohc=sdCAXSMyIqoAX98KV8P&_nc_ht=scontent-itm1-1.xx&oh=00_AfDiLS5xUsz6f_I1-hOlRE_UGpXUmEsQdNpU3OLxRkSzCA&oe=65D0D059"/>
                    <p className='project-paragraph'>
                        Launched in 2005, Discover Nikkei has been undergoing major changes to its UI/UX, design, and functionality.  I have been contributing by tackling issues, updating documentation, fixing visual bugs and updating legacy architecture.
                    </p>
                </div>
                <p className='project-paragraph'>15th November 2023 - Current</p>
            </a>
        </div>
    )
}

export default Careers