import './clients.css';

function Clients() {
    return (
        <section id='clients-container'>
            <h4 id='clients-title'>Client Projects</h4>
            <a className='client-link' href='https://sunset-city.netlify.app/'>
                <div className='client-project-container'>
                    <h5 className='project-title'>Sunset City</h5>
                    <p className='project-description'>A newly proposed RPG system currently in the development and funding stage, click on the project to see an example of the landing page before public release.</p>
                    <p className='project-testimonial'>            
                        <img  alt='sunset city logo' src='https://iili.io/HEtcis2.jpg' className='client-logo'/>
                        " Good work executed in a timely manner.  The website is clear and colourful and fills the requirements I asked for. Feedback during the process was listened to and implemented in a timely manner.  
                        I have used website building services and the work here met the needs of the project better than a template from one of those sites.  Efficient and exceeds the need of the project, would recommend to friends and collegues. "
                        <h6 className='client-name'>- Lauri Halme</h6>
                    </p>
                </div>
            </a>
        </section>
    );
};

export default Clients;