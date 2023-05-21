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
                    <img alt='Runtomo' class="project-image" src="https://media.licdn.com/dms/image/C560BAQFQ4-ZO7Troqw/company-logo_200_200/0/1597699982110?e=1692835200&v=beta&t=hqfQ6PRn25Y-3qtoo63QJIRtOJytpqcKfLGNOCNu1yE"/>
                    <p className='project-paragraph'>
                        Working at Moon Creative Lab, I have been working on the Goril application:  designed to aid Japanese speakers in replicating native English
                        pronunciation by using speech assessment, activities, and games.
                    </p>
                </div>
                <p className='project-paragraph'>Started: 1st April 2023 - Current</p>
            </a>
            <a className='project-card' href="https://www.mooncreativelab.com/ventures/goril">
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
            
        </div>
    )
}

export default Careers